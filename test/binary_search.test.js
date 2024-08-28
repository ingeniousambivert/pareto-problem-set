import { expect } from "chai"
import { binarySearch } from "../src/binary_search.mjs"

describe("Check the binary search", function () {
	it("should return the index of the target value if it exists in the array", () => {
		const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		expect(binarySearch(nums, 5)).to.equal(4)
		expect(binarySearch(nums, 1)).to.equal(0)
		expect(binarySearch(nums, 10)).to.equal(9)
	})

	it("should return -1 if the target value does not exist in the array", () => {
		const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		expect(binarySearch(nums, 11)).to.equal(-1)
		expect(binarySearch(nums, -1)).to.equal(-1)
	})

	it("should handle an empty array", () => {
		const nums = []
		expect(binarySearch(nums, 1)).to.equal(-1)
	})

	it("should handle an array with one element", () => {
		const nums = [1]
		expect(binarySearch(nums, 1)).to.equal(0)
		expect(binarySearch(nums, 2)).to.equal(-1)
	})

	it("should handle an array with duplicate values", () => {
		const nums = [1, 2, 2, 2, 3, 4, 5]
		expect(binarySearch(nums, 2)).to.be.oneOf([1, 2, 3]) // Returns any index of the target value
		expect(binarySearch(nums, 4)).to.equal(5)
		expect(binarySearch(nums, 6)).to.equal(-1)
	})
})
