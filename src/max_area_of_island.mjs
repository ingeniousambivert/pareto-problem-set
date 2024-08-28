/**
 * Finds the maximum area of an island in a grid.
 * @param {number[][]} grid - A 2D grid representing the map of islands (1s) and water (0s).
 * @returns {number} The maximum area of an island.
 */
export function maxAreaOfIsland(grid) {
	if (!grid || grid.length === 0) return 0

	let maxArea = 0

	/**
	 * Performs depth-first search (DFS) to calculate the area of the island.
	 * @param {number} i - The current row index.
	 * @param {number} j - The current column index.
	 * @returns {number} The area of the island starting from (i, j).
	 */
	function dfs(i, j) {
		// Check boundaries and if the cell is land (1)
		if (
			i < 0 ||
			i >= grid.length ||
			j < 0 ||
			j >= grid[0].length ||
			grid[i][j] === 0
		) {
			return 0
		}
		// Mark the cell as visited
		grid[i][j] = 0
		// Calculate the area of the current island
		let area = 1
		area += dfs(i + 1, j)
		area += dfs(i - 1, j)
		area += dfs(i, j + 1)
		area += dfs(i, j - 1)
		return area
	}

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === 1) {
				// Compute the area of the island and update maxArea if needed
				maxArea = Math.max(maxArea, dfs(i, j))
			}
		}
	}

	return maxArea
}
