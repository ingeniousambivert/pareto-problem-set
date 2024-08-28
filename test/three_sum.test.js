import { expect } from "chai"
import { threeSum } from "../src/three_sum.mjs"

describe("Check if three numbers in an array sum up to zero", function () {
	it("should return unique triplets that sum up to zero", function () {
		const nums = [-1, 0, 1, 2, -1, -4]
		const expected = [
			[-1, -1, 2],
			[-1, 0, 1],
		]
		expect(threeSum(nums)).to.deep.equal(expected)
	})

	it("should return an empty array when no triplets sum up to zero", function () {
		const nums = [1, 2, -2, -1]
		const expected = []
		expect(threeSum(nums)).to.deep.equal(expected)
	})

	it("should handle an empty input array", function () {
		const nums = []
		const expected = []
		expect(threeSum(nums)).to.deep.equal(expected)
	})

	it("should handle cases where all elements are zero", function () {
		const nums = [0, 0, 0, 0]
		const expected = [[0, 0, 0]]
		expect(threeSum(nums)).to.deep.equal(expected)
	})

	it("should handle input with fewer than three elements", function () {
		const nums = [1, -1]
		const expected = []
		expect(threeSum(nums)).to.deep.equal(expected)
	})

	// TODO: Fix this test
	// it("should handle large inputs with multiple triplets", function () {
	// 	const nums = [-4, -2, 1, 3, 2, 0, 0, -1, 1, -4]
	// 	const actual = threeSum(nums)
	// 	const expected = [
	// 		[-4, -1, 1],
	// 		[-4, 0, 4],
	// 		[-2, -1, 3],
	// 		[-2, 0, 2],
	// 		[-1, 0, 1],
	// 	]

	// 	// Normalize the output to compare regardless of order
	// 	const sortArray = (arr) =>
	// 		arr
	// 			.map((triplet) => triplet.sort((a, b) => a - b))
	// 			.sort((a, b) => {
	// 				if (a[0] !== b[0]) return a[0] - b[0]
	// 				if (a[1] !== b[1]) return a[1] - b[1]
	// 				return a[2] - b[2]
	// 			})
	// 	expect(sortArray(actual)).to.deep.equal(sortArray(expected))
	// })
})
