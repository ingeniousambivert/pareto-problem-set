import { expect } from "chai"
import { diameterOfBinaryTree } from "../src/diameter_binary_tree.mjs"

/**
 * Helper function to create a binary tree node.
 *
 * @param {number} val - The value of the node.
 * @param {TreeNode|null} left - The left child node.
 * @param {TreeNode|null} right - The right child node.
 * @returns {TreeNode} - A new tree node.
 */
function createTreeNode(val, left = null, right = null) {
	return { val, left, right }
}

describe("Check diameter of binary tree", () => {
	it("should return 0 for an empty tree", () => {
		const root = null
		const result = diameterOfBinaryTree(root)
		expect(result).to.equal(0)
	})

	it("should return 0 for a tree with one node", () => {
		const root = createTreeNode(1)
		const result = diameterOfBinaryTree(root)
		expect(result).to.equal(0)
	})

	it("should return the correct diameter for a tree with multiple nodes", () => {
		const root = createTreeNode(
			1,
			createTreeNode(2, createTreeNode(4), createTreeNode(5)),
			createTreeNode(3)
		)
		const result = diameterOfBinaryTree(root)
		expect(result).to.equal(3) // The longest path is [4, 2, 1, 3]
	})

	it("should return the correct diameter for a skewed tree", () => {
		const root = createTreeNode(
			1,
			createTreeNode(2, createTreeNode(3, createTreeNode(4, createTreeNode(5))))
		)
		const result = diameterOfBinaryTree(root)
		expect(result).to.equal(4) // The longest path is [5, 4, 3, 2, 1]
	})

	it("should return the correct diameter for a balanced binary tree", () => {
		const root = createTreeNode(
			1,
			createTreeNode(2, createTreeNode(4), createTreeNode(5)),
			createTreeNode(3, createTreeNode(6), createTreeNode(7))
		)
		const result = diameterOfBinaryTree(root)
		expect(result).to.equal(4) // The longest path is [4, 2, 1, 3, 7]
	})
})
