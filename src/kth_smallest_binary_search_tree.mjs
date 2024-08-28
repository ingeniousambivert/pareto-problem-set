export class TreeNode {
	/**
	 * TreeNode constructor
	 * @param {number} val - Value of the node
	 * @param {TreeNode|null} left - Left child of the node
	 * @param {TreeNode|null} right - Right child of the node
	 */
	constructor(val, left = null, right = null) {
		this.val = val
		this.left = left
		this.right = right
	}
}

/**
 * Function to find the kth smallest element in a binary search tree.
 * @param {TreeNode} root - The root of the binary search tree.
 * @param {number} k - The k-th position to find the smallest element.
 * @returns {number} - The k-th smallest element.
 */
export function kthSmallest(root, k) {
	// Array to store the inorder traversal of the tree
	let inorderTraversal = []

	/**
	 * Helper function to perform inorder traversal (left-root-right)
	 * This traversal ensures that the nodes are visited in ascending order
	 * @param {TreeNode} node - The current node in the traversal
	 */
	const inorder = (node) => {
		if (node === null) return
		inorder(node.left) // Traverse left subtree
		inorderTraversal.push(node.val) // Visit current node
		inorder(node.right) // Traverse right subtree
	}

	// Start inorder traversal from the root
	inorder(root)

	// Since the inorder traversal gives us sorted elements, return the k-1 index (0-based index)
	return inorderTraversal[k - 1]
}
