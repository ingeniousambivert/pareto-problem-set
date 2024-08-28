import { expect } from "chai"
import { productExceptSelf } from "../src/product_except_self.mjs"

describe("Check if array contains product of all elements except self", function () {
	it("should return [24, 12, 8, 6] for input [1, 2, 3, 4]", () => {
		const result = productExceptSelf([1, 2, 3, 4])
		expect(result).to.deep.equal([24, 12, 8, 6])
	})

	it("should return [0, 0, 0, 0] for input [9, 0, 0, 0]", () => {
		const result = productExceptSelf([9, 0, 0, 0])
		expect(result).to.deep.equal([0, 0, 0, 0])
	})

	it("should return [0, 0] for input [0, 0]", () => {
		const result = productExceptSelf([0, 0])
		expect(result).to.deep.equal([0, 0])
	})

	it("should return [1, 1, 1, 1] for input [1, 1, 1, 1]", () => {
		const result = productExceptSelf([1, 1, 1, 1])
		expect(result).to.deep.equal([1, 1, 1, 1])
	})

	it("should return [120, 60, 40, 30, 24] for input [1, 2, 3, 4, 5]", () => {
		const result = productExceptSelf([1, 2, 3, 4, 5])
		expect(result).to.deep.equal([120, 60, 40, 30, 24])
	})

	it("should return [1] for input [1]", () => {
		const result = productExceptSelf([1])
		expect(result).to.deep.equal([1])
	})
})
