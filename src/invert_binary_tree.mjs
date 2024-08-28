/**
 * Definition for a binary tree node.
 * @param {number} val
 * @param {TreeNode} left
 * @param {TreeNode} right
 */
export class TreeNode {
	constructor(val = 0, left = null, right = null) {
		this.val = val
		this.left = left
		this.right = right
	}
}

/**
 * Inverts a binary tree.
 * @param {TreeNode} root - The root of the binary tree to invert.
 * @return {TreeNode} The new root of the inverted binary tree.
 */
export function invertTree(root) {
	if (root === null) {
		return null
	}

	// Swap the left and right subtrees
	const left = root.left
	root.left = root.right
	root.right = left

	// Recursively invert the left and right subtrees
	invertTree(root.left)
	invertTree(root.right)

	return root
}
