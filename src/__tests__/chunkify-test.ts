import { test, expect } from '@jest/globals';
import { chunkify } from '../chunkify';

test(`it returns an array of arrays of chunkSize 2`, () => {
	const result = chunkify([1, 2, 3, 4, 5, 6], 2)
	expect(result).toEqual([[1, 2], [3, 4], [5, 6]])
});

test(`it returns an array of arrays of chunkSize 5`, () => {
	const result = chunkify([1, 2, 3, 4, 5, 6], 5)
	expect(result).toEqual([[1, 2, 3, 4, 5], [6]])
});

test(`it returns an array of arrays of chunkSize 12`, () => {
	const result = chunkify([...Array(20).keys()], 12)
	expect(result).toEqual([
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
		[12, 13, 14, 15, 16, 17, 18, 19]
	])
});

test(`it returns an array of arrays of chunkSize 3 in reverse order`, () => {
	const result = chunkify([1, 2, 3, 4, 5, 6], 3, true)
	expect(result).toEqual([[6, 5, 4], [3, 2, 1]])
});

test(`it returns an array of arrays of type string of chunkSize 1 in reverse order`, () => {
	const result = chunkify(["open-source", "is", "everything"], 1, true)
	expect(result).toEqual([["everything"], ["is"], ["open-source"]])
})
