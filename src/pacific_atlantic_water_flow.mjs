/**
 * @param {number[][]} matrix - The height matrix of the grid.
 * @return {number[][]} - The list of coordinates from which water can flow to both oceans.
 */
export function pacificAtlantic(matrix) {
	if (matrix.length === 0 || matrix[0].length === 0) return []

	const rows = matrix.length
	const cols = matrix[0].length
	const pacificReachable = Array.from({ length: rows }, () =>
		Array(cols).fill(false)
	)
	const atlanticReachable = Array.from({ length: rows }, () =>
		Array(cols).fill(false)
	)

	// Helper function for DFS
	function dfs(row, col, reachable, prevHeight) {
		if (
			row < 0 ||
			row >= rows ||
			col < 0 ||
			col >= cols ||
			reachable[row][col] ||
			matrix[row][col] < prevHeight
		)
			return
		reachable[row][col] = true
		dfs(row + 1, col, reachable, matrix[row][col])
		dfs(row - 1, col, reachable, matrix[row][col])
		dfs(row, col + 1, reachable, matrix[row][col])
		dfs(row, col - 1, reachable, matrix[row][col])
	}

	// Start DFS from the Pacific Ocean border
	for (let i = 0; i < rows; i++) {
		dfs(i, 0, pacificReachable, matrix[i][0])
	}
	for (let j = 0; j < cols; j++) {
		dfs(0, j, pacificReachable, matrix[0][j])
	}

	// Start DFS from the Atlantic Ocean border
	for (let i = 0; i < rows; i++) {
		dfs(i, cols - 1, atlanticReachable, matrix[i][cols - 1])
	}
	for (let j = 0; j < cols; j++) {
		dfs(rows - 1, j, atlanticReachable, matrix[rows - 1][j])
	}

	// Collect cells that can reach both oceans
	const result = []
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (pacificReachable[i][j] && atlanticReachable[i][j]) {
				result.push([i, j])
			}
		}
	}

	return result
}
