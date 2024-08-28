import { expect } from "chai"
import { numIslands } from "../src/number_of_islands.mjs"

describe("Check number of islands in a 2D grid", () => {
	it("should return 1 for a single island", () => {
		const grid = [
			["1", "1", "1", "1", "0"],
			["1", "1", "0", "1", "0"],
			["1", "1", "0", "0", "0"],
			["0", "0", "0", "0", "0"],
		]
		expect(numIslands(grid)).to.equal(1)
	})

	it("should return 3 for multiple distinct islands", () => {
		const grid = [
			["1", "1", "0", "0", "0"],
			["1", "1", "0", "0", "0"],
			["0", "0", "1", "0", "0"],
			["0", "0", "0", "1", "1"],
		]
		expect(numIslands(grid)).to.equal(3)
	})

	it("should return 0 for a grid full of water", () => {
		const grid = [
			["0", "0", "0", "0"],
			["0", "0", "0", "0"],
			["0", "0", "0", "0"],
			["0", "0", "0", "0"],
		]
		expect(numIslands(grid)).to.equal(0)
	})

	it("should return 1 for a single land cell", () => {
		const grid = [
			["0", "0", "0", "0"],
			["0", "1", "0", "0"],
			["0", "0", "0", "0"],
			["0", "0", "0", "0"],
		]
		expect(numIslands(grid)).to.equal(1)
	})

	it("should return 2 for a grid with two connected islands", () => {
		const grid = [
			["1", "1", "0", "0", "0"],
			["1", "1", "0", "0", "0"],
			["0", "0", "1", "1", "0"],
			["0", "0", "0", "1", "1"],
		]
		expect(numIslands(grid)).to.equal(2)
	})

	it("should handle an empty grid", () => {
		const grid = []
		expect(numIslands(grid)).to.equal(0)
	})
})
