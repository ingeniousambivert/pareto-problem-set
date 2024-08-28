import { expect } from "chai"
import { surroundedRegions } from "../src/surrounded_regions.mjs"

describe("Check if the surrounded regions problem is solved correctly", function () {
	it("should correctly solve the surrounded regions problem", function () {
		//TODO: Fix these tests
		// const board1 = [
		// 	["X", "X", "X", "X"],
		// 	["X", "O", "O", "X"],
		// 	["X", "X", "O", "X"],
		// 	["X", "O", "X", "X"],
		// ]
		// surroundedRegions(board1)
		// console.log(board1)
		// expect(board1).to.deep.equal([
		// 	["X", "X", "X", "X"],
		// 	["X", "X", "X", "X"],
		// 	["X", "X", "X", "X"],
		// 	["X", "X", "X", "X"],
		// ])

		// const board2 = [
		// 	["X", "O", "X"],
		// 	["O", "O", "O"],
		// 	["X", "O", "X"],
		// ]
		// surroundedRegions(board2)
		// console.log(board2)
		// expect(board2).to.deep.equal([
		// 	["X", "X", "X"],
		// 	["X", "X", "X"],
		// 	["X", "X", "X"],
		// ])

		const board3 = [
			["O", "O"],
			["O", "O"],
		]
		surroundedRegions(board3)
		console.log(board3)
		expect(board3).to.deep.equal([
			["O", "O"],
			["O", "O"],
		])

		const board4 = [
			["X", "X"],
			["X", "X"],
		]
		surroundedRegions(board4)
		console.log(board4)
		expect(board4).to.deep.equal([
			["X", "X"],
			["X", "X"],
		])
	})
})
