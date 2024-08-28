/**
 * Definition for a binary tree node.
 * @param {number} val - The value of the node.
 * @param {TreeNode|null} left - The left child of the node.
 * @param {TreeNode|null} right - The right child of the node.
 */
export class TreeNode {
	constructor(val = 0, left = null, right = null) {
		this.val = val
		this.left = left
		this.right = right
	}
}

/**
 * Returns the values of the nodes visible from the right side of the binary tree.
 * @param {TreeNode|null} root - The root of the binary tree.
 * @returns {number[]} - The list of node values visible from the right side.
 */
export function rightSideView(root) {
	// Base case: If the root is null, return an empty array
	if (!root) return []

	// Array to store the result
	const result = []
	// Queue to facilitate level order traversal (BFS)
	const queue = [root]

	// BFS to traverse the tree level by level
	while (queue.length > 0) {
		const levelSize = queue.length
		let rightmostNodeValue = null

		// Traverse each level
		for (let i = 0; i < levelSize; i++) {
			const currentNode = queue.shift()

			// Track the last node's value (rightmost node at this level)
			rightmostNodeValue = currentNode.val

			// Add left and right children to the queue for the next level
			if (currentNode.left) queue.push(currentNode.left)
			if (currentNode.right) queue.push(currentNode.right)
		}

		// Add the rightmost node's value for the current level to the result
		result.push(rightmostNodeValue)
	}

	// Return the list of visible nodes from the right side
	return result
}
