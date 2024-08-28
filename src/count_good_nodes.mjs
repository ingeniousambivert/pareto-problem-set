export class TreeNode {
	/**
	 * @param {number} val - The value of the tree node.
	 * @param {TreeNode} left - The left child of the node.
	 * @param {TreeNode} right - The right child of the node.
	 */
	constructor(val = 0, left = null, right = null) {
		this.val = val
		this.left = left
		this.right = right
	}
}

/**
 * @param {TreeNode} root - The root node of the binary tree.
 * @return {number} - The count of good nodes in the tree.
 *
 * This function counts the "good" nodes in a binary tree. A node is considered
 * good if, along the path from the root to this node, there are no nodes with
 * a value greater than the current node's value.
 */
export function countGoodNodes(root) {
	if (!root) return 0 // Return 0 if the tree is empty

	/**
	 * Helper function to perform DFS traversal and count good nodes.
	 *
	 * @param {TreeNode} node - The current node in the traversal.
	 * @param {number} maxSoFar - The maximum value encountered from the root to this node.
	 * @return {number} - The number of good nodes in the subtree rooted at the current node.
	 */
	function dfs(node, maxSoFar) {
		if (!node) return 0

		// Determine if the current node is a good node.
		let isGood = node.val >= maxSoFar ? 1 : 0

		// Update maxSoFar for the next recursive calls.
		maxSoFar = Math.max(maxSoFar, node.val)

		// Recursively count good nodes in the left and right subtrees.
		return isGood + dfs(node.left, maxSoFar) + dfs(node.right, maxSoFar)
	}

	// Start the DFS traversal from the root, with its value as the initial max.
	return dfs(root, root.val)
}
