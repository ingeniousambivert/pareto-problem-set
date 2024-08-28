import { expect } from "chai"
import { topKFrequent } from "../src/top_k_frequent_elements.mjs"

describe("Check if an array contains the top k frequent elements", function () {
	it("should return the top 2 frequent elements for [1, 1, 1, 2, 2, 3] and k = 2", function () {
		const result = topKFrequent([1, 1, 1, 2, 2, 3], 2)
		expect(result).to.have.members([1, 2])
	})

	it("should return the top 1 frequent element for [1] and k = 1", function () {
		const result = topKFrequent([1], 1)
		expect(result).to.eql([1])
	})

	it("should return the top 1 frequent element for [1, 2] and k = 1", function () {
		const result = topKFrequent([1, 2], 1)
		expect(result).to.have.members([1])
	})

	it("should return the top 3 frequent elements for [1, 2, 2, 3, 3, 3, 4, 4, 4, 4] and k = 3", function () {
		const result = topKFrequent([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 3)
		expect(result).to.have.members([4, 3, 2])
	})

	it("should handle large input arrays correctly", function () {
		const input = Array(1000).fill(1).concat(Array(500).fill(2))
		const result = topKFrequent(input, 2)
		expect(result).to.have.members([1, 2])
	})
})
