import { expect } from "chai"
import { search } from "../src/search_rotated_sorted_array.mjs"

describe("Check the search in rotated sorted array", function () {
	it("should return the index of the target when present", () => {
		expect(search([4, 5, 6, 7, 0, 1, 2], 0)).to.equal(4)
		expect(search([4, 5, 6, 7, 0, 1, 2], 3)).to.equal(-1)
		expect(search([1], 1)).to.equal(0)
		expect(search([1, 3], 3)).to.equal(1)
		expect(search([5, 6, 7, 8, 9, 1, 2, 3, 4], 8)).to.equal(3)
	})

	it("should return -1 when the target is not present", () => {
		expect(search([1, 3], 2)).to.equal(-1)
		expect(search([2, 3, 4, 5, 6], 1)).to.equal(-1)
	})

	it("should handle cases with multiple rotations", () => {
		expect(search([6, 7, 8, 1, 2, 3, 4, 5], 1)).to.equal(3)
		expect(search([5, 6, 7, 8, 1, 2, 3, 4], 7)).to.equal(2)
	})

	it("should handle an array with duplicate elements", () => {
		// TODO: Fix these test cases
		// expect(search([2, 2, 2, 3, 4, 2], 3)).to.equal(3)
		// expect(search([2, 2, 2, 2, 2, 2, 2], 2)).to.equal(0)
		expect(search([2, 2, 2, 3, 4, 2, 2, 2], 4)).to.equal(4)
		expect(search([2, 2, 2, 2, 2, 2, 1, 2], 1)).to.equal(6)
		// expect(search([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 2)).to.equal(0)
	})
})
