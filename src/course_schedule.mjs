/**
 * Determines if all courses can be finished given the prerequisites.
 *
 * @param {number} numCourses - The total number of courses.
 * @param {number[][]} prerequisites - A list of prerequisites where each prerequisite is a pair [ai, bi].
 * @returns {boolean} - True if all courses can be finished, otherwise false.
 */

export function canFinish(numCourses, prerequisites) {
	// Create an adjacency list for the graph
	const graph = Array.from({ length: numCourses }, () => [])
	// Array to track the in-degree (number of incoming edges) of each node
	const inDegree = Array(numCourses).fill(0)

	// Build the graph and in-degree array
	for (const [course, prerequisite] of prerequisites) {
		graph[prerequisite].push(course)
		inDegree[course]++
	}

	// Queue for BFS (Breadth-First Search)
	const queue = []
	// Add all nodes with in-degree 0 (no prerequisites)
	for (let i = 0; i < numCourses; i++) {
		if (inDegree[i] === 0) {
			queue.push(i)
		}
	}

	// Count of courses that have been processed
	let processedCourses = 0

	while (queue.length > 0) {
		const course = queue.shift()
		processedCourses++

		// Process all adjacent nodes (courses dependent on the current course)
		for (const neighbor of graph[course]) {
			inDegree[neighbor]--
			// If in-degree of neighbor becomes 0, add it to the queue
			if (inDegree[neighbor] === 0) {
				queue.push(neighbor)
			}
		}
	}

	// If we have processed all courses, return true, otherwise false
	return processedCourses === numCourses
}
