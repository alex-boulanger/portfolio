/**
 * The 8x8 Bayer matrix: the integers 0 to 63 arranged so any two neighbours
 * sit as far apart in value as possible. Ordered dithering reads a per-cell
 * threshold from this tile, so neighbouring cells never agree on when to flip.
 */
export const BAYER_8 = [
	0, 32, 8, 40, 2, 34, 10, 42,
	48, 16, 56, 24, 50, 18, 58, 26,
	12, 44, 4, 36, 14, 46, 6, 38,
	60, 28, 52, 20, 62, 30, 54, 22,
	3, 35, 11, 43, 1, 33, 9, 41,
	51, 19, 59, 27, 49, 17, 57, 25,
	15, 47, 7, 39, 13, 45, 5, 37,
	63, 31, 55, 23, 61, 29, 53, 21,
];

export const BAYER_SIZE = 8;
export const BAYER_LEVELS = 64;

/** Normalised threshold, 0 to 1, for the cell at (column, row). */
export function bayerThreshold(column: number, row: number) {
	return (BAYER_8[(row % BAYER_SIZE) * BAYER_SIZE + (column % BAYER_SIZE)] + 0.5) / BAYER_LEVELS;
}

/**
 * The same tile read at an offset, with the axes swapped. A second layer needs
 * its own queue, or it switches on in step with the first one.
 */
export function accentThreshold(column: number, row: number) {
	return (BAYER_8[((column + 3) % BAYER_SIZE) * BAYER_SIZE + ((row + 5) % BAYER_SIZE)] + 0.5) / BAYER_LEVELS;
}
