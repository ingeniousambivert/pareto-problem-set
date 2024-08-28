import { expect } from "chai"
import { maxAreaOfIsland } from "../src/max_area_of_island.mjs"

describe("Check max area of island", () => {
	// TODO: Fix this test
	// it("should return 6 for the grid [[0,1,0,0],[1,1,1,0],[0,1,0,0],[0,0,0,0]]", () => {
	// 	const grid = [
	// 		[0, 1, 0, 0],
	// 		[1, 1, 1, 0],
	// 		[0, 1, 0, 0],
	// 		[0, 0, 0, 0],
	// 	]
	// 	expect(maxAreaOfIsland([...grid])).to.equal(6)
	// })

	it("should return 0 for an empty grid", () => {
		const grid = []
		expect(maxAreaOfIsland(grid)).to.equal(0)
	})

	it("should return 1 for a grid with only one land cell [[1]]", () => {
		const grid = [[1]]
		expect(maxAreaOfIsland(grid)).to.equal(1)
	})

	it("should return 4 for the grid [[1,1,0,0],[1,1,0,0],[0,0,0,1],[0,0,0,1]]", () => {
		const grid = [
			[1, 1, 0, 0],
			[1, 1, 0, 0],
			[0, 0, 0, 1],
			[0, 0, 0, 1],
		]
		expect(maxAreaOfIsland(grid)).to.equal(4)
	})

	it("should return 9 for the grid [[1,1,1],[1,1,1],[1,1,1]]", () => {
		const grid = [
			[1, 1, 1],
			[1, 1, 1],
			[1, 1, 1],
		]
		expect(maxAreaOfIsland(grid)).to.equal(9)
	})

	it("should return 0 for the grid with all water [[0,0],[0,0]]", () => {
		const grid = [
			[0, 0],
			[0, 0],
		]
		expect(maxAreaOfIsland(grid)).to.equal(0)
	})
})
