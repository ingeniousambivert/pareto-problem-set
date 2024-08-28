/**
 * Definition for a binary tree node.
 * @param {number} val - Value of the node
 * @param {TreeNode|null} left - Left child of the node
 * @param {TreeNode|null} right - Right child of the node
 */
export class TreeNode {
	constructor(val, left = null, right = null) {
		this.val = val
		this.left = left
		this.right = right
	}
}

/**
 * Checks if a given binary tree is a valid binary search tree.
 *
 * @param {TreeNode} root - The root of the binary tree to validate
 * @returns {boolean} - Returns true if the binary tree is a valid BST, false otherwise
 */
export function isValidBST(root) {
	/**
	 * Helper function to validate the binary search tree.
	 *
	 * @param {TreeNode} node - The current node being validated
	 * @param {number|null} min - The minimum allowable value for the current node (if any)
	 * @param {number|null} max - The maximum allowable value for the current node (if any)
	 * @returns {boolean} - Returns true if the subtree is a valid BST, false otherwise
	 */
	function validate(node, min, max) {
		// An empty tree is a valid BST
		if (!node) return true

		// Check if the current node's value violates the min/max constraint
		if (
			(min !== null && node.val <= min) ||
			(max !== null && node.val >= max)
		) {
			return false
		}

		// Recursively validate the left and right subtrees
		return (
			validate(node.left, min, node.val) && validate(node.right, node.val, max)
		)
	}

	// Start the validation with no constraints (min=null, max=null)
	return validate(root, null, null)
}
