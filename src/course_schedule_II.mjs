/**
 * Finds the order of courses to finish all courses or returns an empty array if it's impossible.
 * @param {number} numCourses - Total number of courses.
 * @param {number[][]} prerequisites - Array of pairs where the second element is a prerequisite for the first.
 * @returns {number[]} - The order of courses to take.
 */
export function findOrder(numCourses, prerequisites) {
	// Create adjacency list and indegree array
	const adjList = Array.from({ length: numCourses }, () => [])
	const indegree = new Array(numCourses).fill(0)

	// Build the graph and indegree array
	for (const [course, prereq] of prerequisites) {
		adjList[prereq].push(course)
		indegree[course]++
	}

	// Initialize queue with courses having no prerequisites
	const queue = []
	for (let i = 0; i < numCourses; i++) {
		if (indegree[i] === 0) queue.push(i)
	}

	const order = []

	// Perform Kahn's Algorithm for Topological Sorting
	while (queue.length > 0) {
		const course = queue.shift()
		order.push(course)

		for (const nextCourse of adjList[course]) {
			indegree[nextCourse]--
			if (indegree[nextCourse] === 0) queue.push(nextCourse)
		}
	}

	// If we processed all courses, return the order; otherwise, return empty array
	return order.length === numCourses ? order : []
}
