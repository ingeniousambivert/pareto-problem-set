/**
 * Definition for a binary tree node.
 * @typedef {Object} TreeNode
 * @property {number} val - The value of the node.
 * @property {TreeNode|null} left - The left subtree node.
 * @property {TreeNode|null} right - The right subtree node.
 */

/**
 * Determines if a binary tree is height-balanced.
 * A binary tree is balanced if the difference in heights between the left and right subtrees is no greater than 1 for all nodes.
 *
 * @param {TreeNode|null} root - The root node of the binary tree.
 * @returns {boolean} - Returns true if the binary tree is balanced, false otherwise.
 */

export function isBalanced(root) {
	/**
	 * Helper function to calculate the height of the tree.
	 * It also checks if the tree is balanced in the process.
	 *
	 * @param {TreeNode|null} node - Current node in the binary tree.
	 * @returns {[boolean, number]} - A tuple where the first element is a boolean indicating if the subtree is balanced,
	 *                                and the second element is the height of the subtree.
	 */
	function checkHeight(node) {
		// An empty tree is balanced with a height of -1.
		if (node === null) return [true, -1]

		// Recursively check the left subtree.
		const [leftBalanced, leftHeight] = checkHeight(node.left)
		if (!leftBalanced) return [false, 0] // If left subtree is not balanced, no need to proceed further.

		// Recursively check the right subtree.
		const [rightBalanced, rightHeight] = checkHeight(node.right)
		if (!rightBalanced) return [false, 0] // If right subtree is not balanced, no need to proceed further.

		// Check if the current node is balanced (difference in heights is <= 1).
		const balanced = Math.abs(leftHeight - rightHeight) <= 1

		// Calculate the current node's height.
		const height = Math.max(leftHeight, rightHeight) + 1

		// Return whether the subtree is balanced and its height.
		return [balanced, height]
	}

	// Start the recursive height check from the root node.
	const [balanced] = checkHeight(root)
	return balanced
}
