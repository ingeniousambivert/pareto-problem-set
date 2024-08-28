/**
 * Definition for a binary tree node.
 * @typedef {Object} TreeNode
 * @property {number} val - The value of the node
 * @property {TreeNode|null} left - The left child of the node
 * @property {TreeNode|null} right - The right child of the node
 */

export class TreeNode {
	constructor(val, left = null, right = null) {
		this.val = val
		this.left = left
		this.right = right
	}
}

/**
 * Checks if two trees are identical.
 * @param {TreeNode} s - The root of the first tree
 * @param {TreeNode} t - The root of the second tree
 * @returns {boolean} - Returns true if trees are identical, false otherwise
 */
export function isIdentical(s, t) {
	// If both nodes are null, they are identical
	if (!s && !t) {
		return true
	}

	// If one node is null and the other is not, they are not identical
	if (!s || !t) {
		return false
	}

	// Check if current node values are the same and both left and right subtrees are identical
	return (
		s.val === t.val &&
		isIdentical(s.left, t.left) &&
		isIdentical(s.right, t.right)
	)
}

/**
 * Determines if `t` is a subtree of `s`.
 * @param {TreeNode} s - The root of the main tree
 * @param {TreeNode} t - The root of the subtree to be checked
 * @returns {boolean} - Returns true if `t` is a subtree of `s`, false otherwise
 */
export function isSubtree(s, t) {
	// If both `s` and `t` are null, then `t` is a subtree of `s`
	if (!s && !t) {
		return true
	}

	// If `t` is null, `t` is not a valid subtree of a non-empty `s`
	if (!t) {
		return false
	}

	// If `s` is null but `t` is not, `t` cannot be a subtree
	if (!s) {
		return false
	}

	// Check if trees rooted at current nodes are identical
	if (isIdentical(s, t)) {
		return true
	}

	// Recursively check left and right subtrees
	return isSubtree(s.left, t) || isSubtree(s.right, t)
}
