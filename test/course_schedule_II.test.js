import { expect } from "chai"
import { findOrder } from "../src/course_schedule_II.mjs"

describe("Check if the course schedule II problem is solved correctly", function () {
	it("should return [0, 1] for numCourses=2 and prerequisites=[[1, 0]]", function () {
		const numCourses = 2
		const prerequisites = [[1, 0]]
		const result = findOrder(numCourses, prerequisites)
		expect(result).to.have.members([0, 1])
	})

	it("should return [0, 1, 2, 3] for numCourses=4 and prerequisites=[[1, 0], [2, 1], [3, 2]]", function () {
		const numCourses = 4
		const prerequisites = [
			[1, 0],
			[2, 1],
			[3, 2],
		]
		const result = findOrder(numCourses, prerequisites)
		expect(result).to.have.members([0, 1, 2, 3])
	})

	it("should return [] for numCourses=2 and prerequisites=[[1, 0], [0, 1]]", function () {
		const numCourses = 2
		const prerequisites = [
			[1, 0],
			[0, 1],
		]
		const result = findOrder(numCourses, prerequisites)
		expect(result).to.be.empty
	})

	it("should return [0, 1, 2] for numCourses=3 and prerequisites=[[1, 0], [2, 1]]", function () {
		const numCourses = 3
		const prerequisites = [
			[1, 0],
			[2, 1],
		]
		const result = findOrder(numCourses, prerequisites)
		expect(result).to.have.members([0, 1, 2])
	})

	it("should return [0, 1, 2, 3, 4] for numCourses=5 and prerequisites=[[1, 0], [2, 0], [3, 1], [4, 2]]", function () {
		const numCourses = 5
		const prerequisites = [
			[1, 0],
			[2, 0],
			[3, 1],
			[4, 2],
		]
		const result = findOrder(numCourses, prerequisites)
		expect(result).to.have.members([0, 1, 2, 3, 4])
	})
})
