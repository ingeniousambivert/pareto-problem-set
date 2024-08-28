// TreeNode class definition
export class TreeNode {
	/**
	 * @param {number} val - The value of the node.
	 * @param {TreeNode|null} left - The left child node.
	 * @param {TreeNode|null} right - The right child node.
	 */
	constructor(val, left = null, right = null) {
		this.val = val
		this.left = left
		this.right = right
	}
}

/**
 * Finds the lowest common ancestor of two nodes in a binary tree.
 * @param {TreeNode} root - The root of the binary tree.
 * @param {TreeNode} p - The first node.
 * @param {TreeNode} q - The second node.
 * @return {TreeNode|null} - The lowest common ancestor of nodes p and q.
 */
function lowestCommonAncestor(root, p, q) {
	if (root === null) return null

	// If either p or q matches the root, then the root is the LCA
	if (root === p || root === q) return root

	// Recur for left and right subtrees
	const left = lowestCommonAncestor(root.left, p, q)
	const right = lowestCommonAncestor(root.right, p, q)

	// If both left and right subtrees return non-null, root is the LCA
	if (left !== null && right !== null) return root

	// Otherwise, return the non-null child (if both are null, return null)
	return left !== null ? left : right
}

/**
 * Checks if a node is present in the binary tree.
 * @param {TreeNode} root - The root of the binary tree.
 * @param {TreeNode} target - The target node to find.
 * @return {boolean} - True if target is present in the tree, false otherwise.
 */
function exists(root, target) {
	if (root === null) return false
	if (root === target) return true
	return exists(root.left, target) || exists(root.right, target)
}

/**
 * Finds the lowest common ancestor of two nodes in a binary tree, ensuring both nodes are present.
 * @param {TreeNode} root - The root of the binary tree.
 * @param {TreeNode} p - The first node.
 * @param {TreeNode} q - The second node.
 * @return {TreeNode|null} - The lowest common ancestor of nodes p and q, or null if one or both nodes are missing.
 */
export function findLCAWithPresenceCheck(root, p, q) {
	// Find the potential LCA
	const lca = lowestCommonAncestor(root, p, q)

	// Check if both nodes are present in the tree
	const pExists = exists(root, p)
	const qExists = exists(root, q)

	// If both nodes are present, return the LCA, otherwise return null
	return pExists && qExists ? lca : null
}
