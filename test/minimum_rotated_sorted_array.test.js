import { expect } from "chai"
import { findMin } from "../src/minimum_rotated_sorted_array.mjs"

describe("Check the minimum in rotated sorted array", function () {
	it("should return the minimum element in a rotated sorted array", function () {
		expect(findMin([3, 4, 5, 1, 2])).to.equal(1)
		expect(findMin([4, 5, 6, 7, 0, 1, 2])).to.equal(0)
		expect(findMin([11, 13, 15, 17])).to.equal(11)
		expect(findMin([1])).to.equal(1)
		expect(findMin([2, 1])).to.equal(1)
	})

	it("should handle arrays that have not been rotated", function () {
		expect(findMin([1, 2, 3, 4, 5])).to.equal(1)
		expect(findMin([0, 1, 2, 3, 4, 5])).to.equal(0)
	})

	it("should handle arrays with duplicate values", function () {
		expect(findMin([2, 2, 2, 0, 1])).to.equal(0)
		expect(findMin([1, 1, 1, 1, 1, 1, 1, 0, 1, 1])).to.equal(0)
		expect(findMin([3, 3, 3, 3, 1, 3, 3, 3])).to.equal(1)
	})

	it("should handle arrays with negative values", function () {
		expect(findMin([-4, -3, -2, -1, -7, -2, -2])).to.equal(-7)
		expect(findMin([-7, -6, -5, -4, -3, -2, -1])).to.equal(-7)
	})
})
