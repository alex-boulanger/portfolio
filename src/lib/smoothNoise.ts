const fade = (value: number) => value * value * value * (value * (value * 6 - 15) + 10);
const lerp = (start: number, end: number, amount: number) => start + (end - start) * amount;

function hash(x: number, y: number, seed: number) {
	let value = Math.imul(x, 374761393) + Math.imul(y, 668265263) + Math.imul(seed, 1442695041);
	value = (value ^ (value >>> 13)) >>> 0;
	value = Math.imul(value, 1274126177) >>> 0;
	return (value / 0xffffffff) * 2 - 1;
}

/** Deterministic, smoothly interpolated 2D value noise in the range -1 to 1. */
export function smoothNoise2D(x: number, y: number, seed = 1337) {
	const x0 = Math.floor(x);
	const y0 = Math.floor(y);
	const tx = fade(x - x0);
	const ty = fade(y - y0);

	const top = lerp(hash(x0, y0, seed), hash(x0 + 1, y0, seed), tx);
	const bottom = lerp(hash(x0, y0 + 1, seed), hash(x0 + 1, y0 + 1, seed), tx);
	return lerp(top, bottom, ty);
}
