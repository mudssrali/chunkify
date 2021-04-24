/**
 * @description: takes a single array, breaks it into chunks of size chunkSize
 *  and returns an array of arrays of max length chunkSize
 * @param kvArray an iteratable array of any arbitrary length
 * @param chunkSize size of each chunk
 * @param reverse reverse array while making chunks
 * @returns an array of arrays of chunksize
 */

export const chunkify = <T>(kvArray: Array<T>, chunkSize: number, reverse = false): Array<T[]> => {

	if (!Array.isArray(kvArray)) {
		throw new TypeError('Expected an `Iterable` in the first argument');
	}

	if (!(Number.isSafeInteger(chunkSize) && chunkSize > 0)) {
		throw new TypeError(
			`Expected \`chunkSize\` to be a an integer from 1 and up, got \`${chunkSize}\``
		);
	}

	if (kvArray.length === 0) {
		return [[]];
	}


	if (chunkSize >= kvArray.length) {
		// check if reverse true, without mutating the original array,
		// return the reverse array, else return the shallow copy of original array
		const reversed_arr = reverse ? kvArray.map((_, index, orignalArray) => orignalArray[orignalArray.length - 1 - index]) : [...kvArray]

		return [reversed_arr];
	}

	return kvArray.reduce<T[][]>((agg, _, index) => {

		const curr = reverse ? kvArray[kvArray.length - 1 - index] : kvArray[index]

		const chunkIndex = Math.floor(index / chunkSize);

		if (!agg[chunkIndex]) {
			agg[chunkIndex] = [];
		}

		agg[chunkIndex].push(curr);

		return agg;

	}, []);
}

export default chunkify