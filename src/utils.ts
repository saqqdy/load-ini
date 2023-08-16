/**
 * Covert arrayLike object into array
 *
 * @param data - Nested Object
 * @returns - Object or Array
 */
export function arrayFromNested<T = unknown>(data: Record<string, T>): Record<string, T> | T[] {
	const keys = Object.keys(data)

	for (const key of keys) {
		if (!/^\d+$/.test(key)) return data
	}

	return Array.from({
		length: keys.length,
		...data
	})
}
