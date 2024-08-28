// Definition for a binary tree node.
export class TreeNode {
	/**
	 * Creates an instance of TreeNode.
	 * @param {number} val - The value of the node.
	 * @param {TreeNode|null} left - The left child of the node.
	 * @param {TreeNode|null} right - The right child of the node.
	 */
	constructor(val = 0, left = null, right = null) {
		this.val = val
		this.left = left
		this.right = right
	}
}

/**
 * Calculate the maximum depth of a binary tree.
 * @param {TreeNode|null} root - The root of the binary tree.
 * @returns {number} - The maximum depth of the tree.
 *
 * This function recursively calculates the depth by checking the left and right
 * subtrees and returning the maximum depth of either side plus 1 (for the root).
 * If the node is null, it returns 0, which means an empty tree has a depth of 0.
 */
export function maxDepth(root) {
	// Base case: if the node is null, return depth as 0
	if (root === null) {
		return 0
	}

	// Recursively find the depth of the left and right subtrees
	const leftDepth = maxDepth(root.left)
	const rightDepth = maxDepth(root.right)

	// Return the maximum depth of the subtrees plus 1 (for the current node)
	return Math.max(leftDepth, rightDepth) + 1
}
