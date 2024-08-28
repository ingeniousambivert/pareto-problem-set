import { expect } from "chai"
import { canFinish } from "../src/course_schedule.mjs"

describe("Check if the course schedule problem is solved correctly", function () {
	it("should return true for no prerequisites", () => {
		expect(canFinish(2, [])).to.be.true
	})

	it("should return true for courses with no cycles", () => {
		expect(canFinish(2, [[1, 0]])).to.be.true
		expect(
			canFinish(4, [
				[1, 0],
				[2, 1],
				[3, 2],
			])
		).to.be.true
	})

	it("should return false for courses with a cycle", () => {
		expect(
			canFinish(2, [
				[1, 0],
				[0, 1],
			])
		).to.be.false
		expect(
			canFinish(3, [
				[0, 1],
				[1, 2],
				[2, 0],
			])
		).to.be.false
	})
})
