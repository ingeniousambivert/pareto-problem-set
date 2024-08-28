// TreeNode definition for a binary tree node.
/**
 * @class TreeNode
 * @param {number} val - The value of the node
 * @param {TreeNode|null} left - The left child of the node
 * @param {TreeNode|null} right - The right child of the node
 */
export class TreeNode {
	constructor(val = 0, left = null, right = null) {
		this.val = val
		this.left = left
		this.right = right
	}
}

/**
 * Checks if two binary trees are the same.
 *
 * @function isSameTree
 * @param {TreeNode|null} p - The root node of the first tree
 * @param {TreeNode|null} q - The root node of the second tree
 * @returns {boolean} - True if both trees are the same, false otherwise
 */
export function isSameTree(p, q) {
	// Base case: If both nodes are null, the trees are the same at this level
	if (p === null && q === null) {
		return true
	}

	// If one of the nodes is null and the other is not, trees are different
	if (p === null || q === null) {
		return false
	}

	// If the current nodes have different values, trees are different
	if (p.val !== q.val) {
		return false
	}

	// Recursively check the left and right subtrees
	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
