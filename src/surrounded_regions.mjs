/**
 * Solve the Surrounded Regions problem.
 * @param {character[][]} board - 2D board of 'X' and 'O'.
 * @return {void} - The board is modified in place.
 */
export function surroundedRegions(board) {
	if (!board || board.length === 0 || board[0].length === 0) return

	const rows = board.length
	const cols = board[0].length

	// Helper function to perform DFS
	function dfs(row, col) {
		// Check boundaries and if current cell is 'O'
		if (
			row < 0 ||
			row >= rows ||
			col < 0 ||
			col >= cols ||
			board[row][col] !== "O"
		) {
			return
		}

		// Mark the cell as 'E' to denote it is connected to the boundary
		board[row][col] = "E"

		// Explore all 4 directions
		dfs(row - 1, col)
		dfs(row + 1, col)
		dfs(row, col - 1)
		dfs(row, col + 1)
	}

	// Start DFS from the boundary cells
	for (let i = 0; i < rows; i++) {
		dfs(i, 0)
		dfs(i, cols - 1)
	}

	for (let j = 0; j < cols; j++) {
		dfs(0, j)
		dfs(rows - 1, j)
	}

	// Flip all 'O's to 'X's and 'E's back to 'O's
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (board[i][j] === "O") {
				board[i][j] = "X"
			} else if (board[i][j] === "E") {
				board[i][j] = "O"
			}
		}
	}
}
