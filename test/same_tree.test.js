import { expect } from "chai"
import { isSameTree, TreeNode } from "../src/same_tree.mjs"

describe("Check if two binary trees are the same", () => {
	it("should return true for identical trees", () => {
		const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
		const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
		expect(isSameTree(tree1, tree2)).to.be.true
	})

	it("should return false for trees with different structures", () => {
		const tree1 = new TreeNode(1, new TreeNode(2), null)
		const tree2 = new TreeNode(1, null, new TreeNode(2))
		expect(isSameTree(tree1, tree2)).to.be.false
	})

	it("should return false for trees with different values", () => {
		const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(1))
		const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
		expect(isSameTree(tree1, tree2)).to.be.false
	})

	it("should return true for two empty trees (null roots)", () => {
		const tree1 = null
		const tree2 = null
		expect(isSameTree(tree1, tree2)).to.be.true
	})

	it("should return false when one tree is empty and the other is not", () => {
		const tree1 = new TreeNode(1)
		const tree2 = null
		expect(isSameTree(tree1, tree2)).to.be.false
	})

	it("should return true for deeply nested identical trees", () => {
		const tree1 = new TreeNode(
			1,
			new TreeNode(2, new TreeNode(4), new TreeNode(5)),
			new TreeNode(3)
		)
		const tree2 = new TreeNode(
			1,
			new TreeNode(2, new TreeNode(4), new TreeNode(5)),
			new TreeNode(3)
		)
		expect(isSameTree(tree1, tree2)).to.be.true
	})
})
