import { expect } from "chai"
import { longestConsecutive } from "../src/longest_consecutive.mjs"

describe("Check if array contains the longest consecutive elements", function () {
	it("should return the length of the longest consecutive sequence in a typical case", function () {
		expect(longestConsecutive([100, 4, 200, 1, 3, 2])).to.equal(4)
	})

	it("should handle an array with duplicate values", function () {
		expect(longestConsecutive([0, 0])).to.equal(1)
		expect(longestConsecutive([1, 2, 2, 3, 4, 5, 5, 6])).to.equal(6)
	})

	it("should handle an array with no consecutive numbers", function () {
		expect(longestConsecutive([10, 100, 1000, 10000])).to.equal(1)
	})

	it("should handle arrays with negative numbers", function () {
		expect(longestConsecutive([-1, -2, -3, 1, 2, 3])).to.equal(3)
	})

	it("should handle arrays with large consecutive sequences", function () {
		const largeConsecutiveArray = Array.from({ length: 1000 }, (_, i) => i)
		expect(longestConsecutive(largeConsecutiveArray)).to.equal(1000)
	})

	it("should handle an array with a single element", function () {
		expect(longestConsecutive([42])).to.equal(1)
	})

	it("should handle a large array with a mixture of consecutive and non-consecutive sequences", function () {
		const largeArray = Array.from({ length: 10000 }, (_, i) => i).concat([
			50000, 50001, 50002,
		])
		expect(longestConsecutive(largeArray)).to.equal(10000)
	})
})
