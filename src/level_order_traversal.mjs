/**
 * Represents a node in the binary tree.
 * @param {number} val - Value of the tree node.
 * @param {TreeNode|null} left - Left child of the tree node.
 * @param {TreeNode|null} right - Right child of the tree node.
 */
export class TreeNode {
	constructor(val = 0, left = null, right = null) {
		this.val = val
		this.left = left
		this.right = right
	}
}

/**
 * Performs level order traversal on a binary tree.
 * @param {TreeNode|null} root - The root node of the binary tree.
 * @returns {number[][]} - A 2D array where each sub-array represents the values at each level.
 */
export function levelOrder(root) {
	// If the tree is empty, return an empty array
	if (!root) return []

	// Initialize the result array to store each level
	const result = []

	// Initialize the queue with the root node for BFS (breadth-first search)
	const queue = [root]

	// Perform BFS traversal until there are no more nodes left to process
	while (queue.length > 0) {
		const levelSize = queue.length // Get the number of nodes at the current level
		const currentLevel = [] // Array to store nodes at this level

		// Process each node in the current level
		for (let i = 0; i < levelSize; i++) {
			const node = queue.shift() // Dequeue the front node
			currentLevel.push(node.val) // Add the node's value to the current level's array

			// Enqueue the left child if it exists
			if (node.left) queue.push(node.left)

			// Enqueue the right child if it exists
			if (node.right) queue.push(node.right)
		}

		// Add the current level to the final result
		result.push(currentLevel)
	}

	// Return the level-order traversal result
	return result
}
