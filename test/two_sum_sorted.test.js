import { expect } from "chai"
import { twoSum } from "../src/two_sum_sorted.mjs"

describe("Check if two numbers in a 1-indexed sorted array add up to a target", () => {
	it("should return [1, 2] for numbers [2, 7, 11, 15] with target 9", () => {
		const result = twoSum([2, 7, 11, 15], 9)
		expect(result).to.deep.equal([1, 2])
	})

	it("should return [1, 3] for numbers [2, 3, 4] with target 6", () => {
		const result = twoSum([2, 3, 4], 6)
		expect(result).to.deep.equal([1, 3])
	})

	it("should return [1, 2] for numbers [-1, 0] with target -1", () => {
		const result = twoSum([-1, 0], -1)
		expect(result).to.deep.equal([1, 2])
	})

	it("should return [1, 2] for numbers [1, 1] with target 2", () => {
		const result = twoSum([1, 1], 2)
		expect(result).to.deep.equal([1, 2])
	})

	it("should return [] for numbers [1, 2, 3] with target 7", () => {
		const result = twoSum([1, 2, 3], 7)
		expect(result).to.deep.equal([])
	})

	it("should return [1, 4] for numbers [1, 2, 3, 4, 5] with target 6", () => {
		const result = twoSum([1, 2, 3, 4, 5], 6)
		expect(result).to.deep.equal([1, 5])
	})

	it("should return [2, 5] for numbers [1, 2, 3, 4, 5, 6] with target 8", () => {
		const result = twoSum([1, 2, 3, 4, 5, 6], 8)
		expect(result).to.deep.equal([2, 6])
	})
})
