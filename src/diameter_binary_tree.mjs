/**
 * Definition for a binary tree node.
 * @typedef {Object} TreeNode
 * @property {number} val - The value of the node.
 * @property {TreeNode|null} left - Left child node.
 * @property {TreeNode|null} right - Right child node.
 */

/**
 * Function to compute the diameter of a binary tree.
 * The diameter is the length of the longest path between any two nodes in the tree.
 * The path may or may not pass through the root.
 *
 * @param {TreeNode|null} root - The root of the binary tree.
 * @returns {number} - The diameter of the tree.
 */

export function diameterOfBinaryTree(root) {
	let diameter = 0

	/**
	 * Recursive helper function to compute the depth of the tree.
	 * At each node, it computes the left and right depth and updates the diameter.
	 *
	 * @param {TreeNode|null} node - The current node being evaluated.
	 * @returns {number} - The depth of the current node.
	 */
	function depth(node) {
		if (node === null) return 0 // Base case: if node is null, return depth 0

		// Recursively get the depth of the left and right subtrees
		const leftDepth = depth(node.left)
		const rightDepth = depth(node.right)

		// Update the diameter if the current path through the node is longer than the current diameter
		diameter = Math.max(diameter, leftDepth + rightDepth)

		// Return the depth of the node, which is the max of its children's depth plus 1
		return Math.max(leftDepth, rightDepth) + 1
	}

	// Start the depth-first search from the root node
	depth(root)

	// Return the maximum diameter found
	return diameter
}
