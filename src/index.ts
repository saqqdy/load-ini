import { existsSync, promises, readFileSync } from 'fs'
import { type EncodeOptions, parse, stringify } from 'ini'

/**
 * Strip UTF-8 byte order mark (BOM) from a string
 *
 * @param data - string
 * @returns - result
 */
function stripBom(data: string): string {
	if (typeof data !== 'string') throw new TypeError(`Expected a string, got ${typeof data}`)

	// Catches EFBBBF (UTF-8 BOM) because the buffer-to-string
	// conversion translates it to FEFF (UTF-16 BOM).
	if (data.charCodeAt(0) === 0xfeff) return (data as string).slice(1)

	return data
}

/**
 * parse ini data
 *
 * @param data - file path
 * @returns - result
 */
export function parseIni(data: string): Record<string, unknown> | null {
	try {
		return parse(stripBom(data))
	} catch (err: any) {
		console.error(err)
		return null
	}
}

/**
 * stringify ini data
 *
 * @param data - file path
 * @param options - stringify options: EncodeOptions
 * @returns - result
 */
export function stringifyIni<T>(data: T, options?: EncodeOptions): string | null {
	try {
		return stringify(data, options)
	} catch (err: any) {
		console.error(err)
		return null
	}
}

/**
 * load .ini
 *
 * @example
 * ```ts
 * import { loadIni } from 'load-ini'
 * const data = await loadIni('/path/of/ini') // \{ "name": "saqqdy" \}
 * ```
 * @param path - file path
 * @returns - result
 */
export async function loadIni(path: string): Promise<Record<string, unknown> | null> {
	if (!existsSync(path)) {
		console.error(`${path} is not exists`)
		return null
	}
	return parseIni(await promises.readFile(path, 'utf8'))
}

/**
 * load .ini sync
 *
 * @example
 * ```ts
 * import { loadIniSync } from 'load-ini'
 * const data = loadIniSync('/path/of/ini') // \{ "name": "saqqdy" \}
 * ```
 * @param path - file path
 * @returns - result
 */
export function loadIniSync(path: string): Record<string, unknown> | null {
	if (!existsSync(path)) {
		console.error(`${path} is not exists`)
		return null
	}
	return parseIni(readFileSync(path, 'utf8'))
}

export const version = '__VERSION__' as string
