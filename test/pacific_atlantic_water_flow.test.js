import { expect } from "chai"
import { pacificAtlantic } from "../src/pacific_atlantic_water_flow.mjs"

describe("pacificAtlantic", () => {
	it("should return cells that can reach both Pacific and Atlantic oceans", () => {
		// TODO: Fix these tests
		// 	const matrix1 = [
		// 		[1, 2, 3],
		// 		[8, 9, 4],
		// 		[7, 6, 5],
		// 	]
		// 	const expected1 = [
		// 		[0, 2],
		// 		[1, 1],
		// 		[1, 2],
		// 		[2, 1],
		// 		[2, 2],
		// 	]
		// 	const result1 = pacificAtlantic(matrix1)
		// 	console.log("Result 1:", result1)
		// 	expect(result1).to.deep.equal(expected1)

		// const matrix2 = [
		// 	[1, 2, 3, 4, 5],
		// 	[16, 17, 24, 23, 6],
		// 	[15, 18, 23, 22, 7],
		// 	[14, 19, 22, 21, 8],
		// 	[13, 20, 21, 20, 9],
		// 	[12, 11, 10, 11, 10],
		// ]
		// const expected2 = [
		// 	[0, 4],
		// 	[1, 4],
		// 	[1, 3],
		// 	[2, 3],
		// 	[3, 3],
		// 	[4, 2],
		// 	[5, 0],
		// ]
		// const result2 = pacificAtlantic(matrix2)
		// console.log("Result 2:", result2)
		// expect(result2).to.deep.equal(expected2)

		// const matrix3 = [
		// 	[1, 2, 3],
		// 	[8, 4, 5],
		// 	[7, 6, 5],
		// ]
		// const expected3 = [
		// 	[0, 2],
		// 	[1, 1],
		// 	[1, 2],
		// 	[2, 1],
		// 	[2, 2],
		// ]
		// const result3 = pacificAtlantic(matrix3)
		// console.log("Result 3:", result3)
		// expect(result3).to.deep.equal(expected3)

		// const matrix4 = [
		// 	[1, 2, 3, 4, 5],
		// 	[16, 17, 24, 23, 6],
		// 	[15, 18, 23, 22, 7],
		// 	[14, 19, 22, 21, 8],
		// 	[13, 20, 21, 20, 9],
		// 	[12, 11, 10, 11, 10],
		// ]
		// const expected4 = [
		// 	[0, 4],
		// 	[1, 4],
		// 	[1, 3],
		// 	[2, 3],
		// 	[3, 3],
		// 	[4, 2],
		// 	[5, 0],
		// ]
		// const result4 = pacificAtlantic(matrix4)
		// console.log("Result 4:", result4)
		// expect(result4).to.deep.equal(expected4)

		const matrix5 = []
		const expected5 = []
		const result5 = pacificAtlantic(matrix5)
		console.log("Result 5:", result5)
		expect(result5).to.deep.equal(expected5)
	})
})
