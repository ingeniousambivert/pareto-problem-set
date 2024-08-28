import { expect } from "chai"
import { maxProfit } from "../src/best_time_to_buy_sell_stock.mjs"

describe("Check the maximum profit from buying and selling stock", function () {
	it("should return 5 for prices [7, 1, 5, 3, 6, 4]", () => {
		expect(maxProfit([7, 1, 5, 3, 6, 4])).to.equal(5)
	})

	it("should return 0 for prices [7, 6, 4, 3, 1]", () => {
		expect(maxProfit([7, 6, 4, 3, 1])).to.equal(0)
	})

	it("should return 1 for prices [1, 2]", () => {
		expect(maxProfit([1, 2])).to.equal(1)
	})

	it("should return 0 for prices [2, 1]", () => {
		expect(maxProfit([2, 1])).to.equal(0)
	})

	it("should return 8 for prices [1, 3, 5, 7, 9]", () => {
		expect(maxProfit([1, 3, 5, 7, 9])).to.equal(8)
	})

	it("should return 8 for prices [2, 4, 6, 8, 10]", () => {
		expect(maxProfit([2, 4, 6, 8, 10])).to.equal(8)
	})

	it("should return 8 for prices [2, 1, 3, 8, 4, 9]", () => {
		expect(maxProfit([2, 1, 3, 8, 4, 9])).to.equal(8)
	})

	it("should return 0 for empty prices array", () => {
		expect(maxProfit([])).to.equal(0)
	})

	it("should return 0 for prices with a single element [1]", () => {
		expect(maxProfit([1])).to.equal(0)
	})

	it("should return 99 for prices with one peak [1, 100]", () => {
		expect(maxProfit([1, 100])).to.equal(99)
	})
})
