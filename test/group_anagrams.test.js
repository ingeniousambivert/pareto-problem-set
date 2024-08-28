import { expect } from "chai"
import { groupAnagrams } from "../src/group_anagrams.mjs"

describe("Check if all strings in an array are anagrams of each other", function () {
	it("should group anagrams correctly", () => {
		const input = ["eat", "tea", "tan", "ate", "nat", "bat"]
		const expected = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
		const result = groupAnagrams(input)

		// Flatten arrays for comparison since order of groups can vary
		const resultSorted = result.map((group) => group.sort()).sort()
		const expectedSorted = expected.map((group) => group.sort()).sort()

		expect(resultSorted).to.deep.equal(expectedSorted)
	})

	it("should return an empty array when input is empty", () => {
		const input = []
		const expected = []
		const result = groupAnagrams(input)

		expect(result).to.deep.equal(expected)
	})

	it("should handle single string input", () => {
		const input = ["single"]
		const expected = [["single"]]
		const result = groupAnagrams(input)

		expect(result).to.deep.equal(expected)
	})

	it("should handle input with no anagrams", () => {
		const input = ["abc", "def", "ghi"]
		const expected = [["abc"], ["def"], ["ghi"]]
		const result = groupAnagrams(input)

		expect(result).to.deep.equal(expected)
	})
})
