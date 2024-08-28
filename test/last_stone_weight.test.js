import { expect } from "chai"
import { lastStoneWeight } from "../src/last_stone_weight.mjs"

describe("Check last stone weight in a queue", () => {
	it("should return 1 for [2,7,4,1,8,1]", () => {
		const stones = [2, 7, 4, 1, 8, 1]
		const result = lastStoneWeight(stones)
		expect(result).to.equal(1)
	})

	it("should return 1 for [1,1]", () => {
		const stones = [1, 1]
		const result = lastStoneWeight(stones)
		expect(result).to.equal(1)
	})

	it("should return 2 for [10,4,2,10]", () => {
		const stones = [10, 4, 2, 10]
		const result = lastStoneWeight(stones)
		expect(result).to.equal(2)
	})

	it("should return 8 for [8]", () => {
		const stones = [8]
		const result = lastStoneWeight(stones)
		expect(result).to.equal(8)
	})

	it("should return 0 for []", () => {
		const stones = []
		const result = lastStoneWeight(stones)
		expect(result).to.equal(0)
	})
})
