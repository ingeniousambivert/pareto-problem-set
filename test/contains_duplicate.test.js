import { expect } from "chai"
import { containsDuplicate } from "../src/contains_duplicate.mjs"

describe("Check if array contains duplicate elements", function () {
	it("should return true if there are duplicates in the array", () => {
		const nums = [1, 2, 3, 1]
		expect(containsDuplicate(nums)).to.be.true
	})

	it("should return false if there are no duplicates in the array", () => {
		const nums = [1, 2, 3, 4]
		expect(containsDuplicate(nums)).to.be.false
	})

	it("should return false for an empty array", () => {
		const nums = []
		expect(containsDuplicate(nums)).to.be.false
	})

	it("should return true for an array with a single duplicate element", () => {
		const nums = [1, 1]
		expect(containsDuplicate(nums)).to.be.true
	})

	it("should return true for an array with multiple duplicates", () => {
		const nums = [4, 2, 4, 1, 2]
		expect(containsDuplicate(nums)).to.be.true
	})

	it("should return false for an array with one element", () => {
		const nums = [1]
		expect(containsDuplicate(nums)).to.be.false
	})
})
