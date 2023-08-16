import { existsSync, promises, readFileSync } from 'fs'
import { parse, stringify } from 'ini'
import { arrayFromNested } from './utils'

export interface EncodeIniOptions {
	/**
	 * to specify whether to align the = characters for each section. This option will automatically enable whitespace. Defaults to false.
	 */
	align?: boolean
	/**
	 * which will be the first section in the encoded ini data. Defaults to none.
	 */
	section?: string
	/**
	 * to specify if all keys in each section, as well as all sections, will be alphabetically sorted. Defaults to false.
	 */
	sort?: boolean
	/**
	 * to specify whether to put whitespace around the = character. By default, whitespace is omitted, to be friendly to some persnickety old parsers that don't tolerate it well. But some find that it's more human-readable and pretty with the whitespace. Defaults to false.
	 */
	whitespace?: boolean
	/**
	 * to specify whether to put an additional newline after a section header. Some INI file parsers (for example the TOSHIBA FlashAir one) need this to parse the file successfully. By default, the additional newline is omitted.
	 */
	newline?: boolean
	/**
	 * to define which platform this INI file is expected to be used with: when platform is win32, line terminations are CR+LF, for other platforms line termination is LF. By default, the current platform name is used.
	 */
	platform?: string
	/**
	 * to specify whether array values are appended with []. By default this is true but there are some ini parsers that instead treat duplicate names as arrays.
	 */
	bracketedArrays?: boolean
}

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
export function parseIni(data: string): Record<string, unknown> | unknown[] {
	return arrayFromNested(parse(stripBom(data)))
}

/**
 * stringify ini data
 *
 * @param data - file path
 * @param options - stringify options: EncodeIniOptions
 * @returns - result
 */
export function stringifyIni<T>(data: T, options?: EncodeIniOptions | string): string {
	return stringify(data, options)
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
export async function loadIni(path: string): Promise<Record<string, unknown> | unknown[]> {
	if (!existsSync(path)) throw new Error(`${path} is not exists`)

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
export function loadIniSync(path: string): Record<string, unknown> | unknown[] {
	if (!existsSync(path)) throw new Error(`${path} is not exists`)

	return parseIni(readFileSync(path, 'utf8'))
}

export const version = '__VERSION__' as string
