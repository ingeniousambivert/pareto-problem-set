import { expect } from "chai"
import { findKthLargest } from "../src/kth_largest_array.mjs"

describe("Check kth largest element in an array", () => {
	it("should return the 3rd largest element for [3,2,1,5,6,4] and k=2", function () {
		const result = findKthLargest([3, 2, 1, 5, 6, 4], 2)
		expect(result).to.equal(5)
	})

	//TODO: Fix this test
	// it("should return the 1st largest element for [1,2,3,4,5] and k=1", function () {
	// 	const result = findKthLargest([1, 2, 3, 4, 5], 1)
	// 	expect(result).to.equal(5)
	// })

	it("should return the 4th largest element for [7, 6, 5, 4, 3, 2, 1] and k=4", function () {
		const result = findKthLargest([7, 6, 5, 4, 3, 2, 1], 4)
		expect(result).to.equal(4)
	})

	it("should throw an error if k is out of bounds", function () {
		expect(() => findKthLargest([1, 2, 3], 0)).to.throw("Invalid value for k.")
		expect(() => findKthLargest([1, 2, 3], 4)).to.throw("Invalid value for k.")
	})

	it("should return the 2nd largest element for [1,1,1,1,1,1,1] and k=2", function () {
		const result = findKthLargest([1, 1, 1, 1, 1, 1, 1], 2)
		expect(result).to.equal(1)
	})
})
