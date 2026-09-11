export type Rgb = readonly [number, number, number];

/** The three flat colours every dither demo is allowed: background, ink, accent. */
export const PAPER: Rgb = [198, 195, 188];
export const INK: Rgb = [10, 10, 10];
export const ACCENT: Rgb = [0, 0, 255];

export const CELL_PAPER = 0;
export const CELL_INK = 1;
export const CELL_ACCENT = 2;

export const THREE_TONE: readonly Rgb[] = [PAPER, INK, ACCENT];

export interface CellSurface {
	cols: number;
	rows: number;
	/**
	 * One palette index per cell, row-major. Reallocated whenever the grid
	 * changes, so read it off the surface each frame instead of holding a copy.
	 */
	cells: Uint8Array;
	/** Re-reads the element box. Returns true when the cell grid changed size. */
	measure(): boolean;
	/** Blits the cells to the visible canvas, one flat block each. */
	paint(): void;
	setCellSize(size: number): void;
}

/**
 * A canvas addressed in cells rather than pixels. Cells are written into a
 * buffer of one pixel per cell and blown up with smoothing off, so a grid of
 * hard yes/no choices costs one scaled drawImage instead of thousands of
 * fillRect calls.
 *
 * measure() only reports grid changes; setting a canvas size clears it, so
 * always paint() after measuring.
 */
export function createCellSurface(
	canvas: HTMLCanvasElement,
	cellSize: number,
	palette: readonly Rgb[] = THREE_TONE,
): CellSurface | null {
	const view = canvas.getContext('2d', { alpha: false });
	const buffer = document.createElement('canvas');
	const bufferView = buffer.getContext('2d');
	if (!view || !bufferView) return null;

	let size = cellSize;
	let image: ImageData | null = null;

	const surface: CellSurface = {
		cols: 0,
		rows: 0,
		cells: new Uint8Array(0),

		measure() {
			const rect = canvas.getBoundingClientRect();
			if (rect.width < 1 || rect.height < 1) return false;

			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			const width = Math.round(rect.width * dpr);
			const height = Math.round(rect.height * dpr);
			if (canvas.width !== width) canvas.width = width;
			if (canvas.height !== height) canvas.height = height;

			const cols = Math.max(1, Math.round(rect.width / size));
			const rows = Math.max(1, Math.round(rect.height / size));
			if (cols === surface.cols && rows === surface.rows) return false;

			surface.cols = cols;
			surface.rows = rows;
			surface.cells = new Uint8Array(cols * rows);
			buffer.width = cols;
			buffer.height = rows;
			image = bufferView.createImageData(cols, rows);
			return true;
		},

		paint() {
			if (!image) return;
			const data = image.data;
			const cells = surface.cells;
			for (let i = 0; i < cells.length; i++) {
				const colour = palette[cells[i]] ?? palette[0];
				const p = i * 4;
				data[p] = colour[0];
				data[p + 1] = colour[1];
				data[p + 2] = colour[2];
				data[p + 3] = 255;
			}
			bufferView.putImageData(image, 0, 0);
			// Resizing a canvas resets its context, so this is re-asserted here.
			view.imageSmoothingEnabled = false;
			view.drawImage(buffer, 0, 0, canvas.width, canvas.height);
		},

		setCellSize(next: number) {
			size = next;
		},
	};

	return surface;
}
