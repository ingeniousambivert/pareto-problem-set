/**
 * Counts the number of islands in a 2D grid.
 *
 * @param {character[][]} grid - A 2D grid where each cell is either '1' (land) or '0' (water).
 * @returns {number} - The number of islands.
 */
export function numIslands(grid) {
	if (!grid || grid.length === 0) return 0

	const rows = grid.length
	const cols = grid[0].length
	let numIslands = 0

	/**
	 * Performs Depth-First Search to mark all land cells connected to (r, c) as visited.
	 *
	 * @param {number} r - The row index.
	 * @param {number} c - The column index.
	 */
	function dfs(r, c) {
		// Check boundaries and if the cell is water or already visited
		if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === "0") {
			return
		}

		// Mark the cell as visited
		grid[r][c] = "0"

		// Recursively visit all connected land cells
		dfs(r - 1, c) // up
		dfs(r + 1, c) // down
		dfs(r, c - 1) // left
		dfs(r, c + 1) // right
	}

	// Iterate through each cell in the grid
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			// If a land cell is found, it means a new island is discovered
			if (grid[r][c] === "1") {
				numIslands++
				dfs(r, c) // Perform DFS to mark all cells in this island
			}
		}
	}

	return numIslands
}
