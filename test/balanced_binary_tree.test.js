import { expect } from "chai"
import { isBalanced } from "../src/balanced_binary_tree.mjs"

/**
 * Helper function to create a TreeNode.
 * @param {number} val - Value of the node.
 * @param {TreeNode|null} left - Left child node.
 * @param {TreeNode|null} right - Right child node.
 * @returns {TreeNode} - Returns a TreeNode object.
 */

function TreeNode(val, left = null, right = null) {
	return { val, left, right }
}

describe("Check if a binary tree is balanced", () => {
	it("should return true for an empty tree", () => {
		expect(isBalanced(null)).to.be.true
	})

	it("should return true for a single node tree", () => {
		const root = TreeNode(1)
		expect(isBalanced(root)).to.be.true
	})

	it("should return true for a balanced binary tree", () => {
		const root = TreeNode(1, TreeNode(2), TreeNode(3))
		expect(isBalanced(root)).to.be.true
	})

	it("should return false for an unbalanced binary tree", () => {
		const root = TreeNode(1, TreeNode(2, TreeNode(3, TreeNode(4))))
		expect(isBalanced(root)).to.be.false
	})

	it("should return true for a balanced tree with multiple levels", () => {
		const root = TreeNode(1, TreeNode(2, TreeNode(4), TreeNode(5)), TreeNode(3))
		expect(isBalanced(root)).to.be.true
	})

	it("should return false for an unbalanced tree with right subtree deeper", () => {
		const root = TreeNode(
			1,
			TreeNode(2),
			TreeNode(3, null, TreeNode(4, null, TreeNode(5)))
		)
		expect(isBalanced(root)).to.be.false
	})
})
