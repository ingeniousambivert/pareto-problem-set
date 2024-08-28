// dailyTemperatures.test.mjs

import { expect } from "chai"
import { dailyTemperatures } from "../src/daily_temperatures.mjs"

describe("Check daily temperatures", function () {
	it("should return [1, 1, 4, 2, 1, 1, 0, 0] for input [73, 74, 75, 71, 69, 72, 76, 73]", () => {
		const input = [73, 74, 75, 71, 69, 72, 76, 73]
		const expected = [1, 1, 4, 2, 1, 1, 0, 0]
		expect(dailyTemperatures(input)).to.deep.equal(expected)
	})

	it("should return [1, 1, 1, 0] for input [30, 40, 50, 60]", () => {
		const input = [30, 40, 50, 60]
		const expected = [1, 1, 1, 0]
		expect(dailyTemperatures(input)).to.deep.equal(expected)
	})

	it("should return [0, 0, 0, 0] for input [90, 90, 90, 90]", () => {
		const input = [90, 90, 90, 90]
		const expected = [0, 0, 0, 0]
		expect(dailyTemperatures(input)).to.deep.equal(expected)
	})

	it("should return [1, 1, 1, 1, 0] for input [1, 2, 3, 4, 5]", () => {
		const input = [1, 2, 3, 4, 5]
		const expected = [1, 1, 1, 1, 0]
		expect(dailyTemperatures(input)).to.deep.equal(expected)
	})

	it("should return [0] for input [100]", () => {
		const input = [100]
		const expected = [0]
		expect(dailyTemperatures(input)).to.deep.equal(expected)
	})
})
