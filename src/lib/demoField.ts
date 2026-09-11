import { smoothNoise2D } from './smoothNoise';

const FIELD_SEED = 24;

/**
 * The field the threshold and Bayer demos both quantise: a left-to-right
 * gradient with soft hills rolled into it, so a hard threshold has something
 * to visibly fail at. u and v run 0 to 1 across the strip; the result is ink
 * density, 0 to 1.
 */
export function demoDensity(u: number, v: number) {
	const hills = smoothNoise2D(u * 3.2, v * 1.6, FIELD_SEED) * 0.24;
	return Math.min(1, Math.max(0, u + hills));
}
