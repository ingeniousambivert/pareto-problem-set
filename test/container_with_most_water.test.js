import { expect } from "chai"
import { maxArea } from "../src/container_with_most_water.mjs"

describe("Check the maximum area of a container", function () {
	it("should return 49 for the input [1,8,6,2,5,4,8,3,7]", function () {
		const result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
		expect(result).to.equal(49)
	})

	it("should return 1 for the input [1,1]", function () {
		const result = maxArea([1, 1])
		expect(result).to.equal(1)
	})

	it("should return 16 for the input [4,3,2,1,4]", function () {
		const result = maxArea([4, 3, 2, 1, 4])
		expect(result).to.equal(16)
	})

	it("should return 25 for the input [1,2,3,4,5,6,7,8,9,10]", function () {
		const result = maxArea([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
		expect(result).to.equal(25)
	})

	it("should return 3 for the input [1,2,1,1]", function () {
		const result = maxArea([1, 2, 1, 1])
		expect(result).to.equal(3)
	})

	it("should return 0 for an empty input array", function () {
		const result = maxArea([])
		expect(result).to.equal(0)
	})
})
