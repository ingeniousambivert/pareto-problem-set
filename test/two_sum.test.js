import { expect } from "chai"
import { twoSum } from "../src/two_sum.mjs"

describe("Check if two numbers sum to a target", function () {
	it("should return [0, 1] for input [2, 7, 11, 15] and target 9", function () {
		const nums = [2, 7, 11, 15]
		const target = 9
		const result = twoSum(nums, target)
		expect(result).to.deep.equal([0, 1])
	})

	it("should return [1, 2] for input [3, 2, 4] and target 6", function () {
		const nums = [3, 2, 4]
		const target = 6
		const result = twoSum(nums, target)
		expect(result).to.deep.equal([1, 2])
	})

	it("should return [2, 4] for input [-1, -2, -3, -4, -5] and target -8", function () {
		const nums = [-1, -2, -3, -4, -5]
		const target = -8
		const result = twoSum(nums, target)
		expect(result).to.deep.equal([2, 4])
	})

	it("should throw an error for input [1, 2, 3] and target 7", function () {
		const nums = [1, 2, 3]
		const target = 7
		expect(() => twoSum(nums, target)).to.throw("No two sum solution")
	})
})
