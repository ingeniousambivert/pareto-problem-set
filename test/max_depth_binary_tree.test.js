import { expect } from "chai"
import { maxDepth, TreeNode } from "../src/max_depth_binary_tree.mjs"

describe("Check max depth of binary tree", function () {
	it("should return 0 for an empty tree", function () {
		expect(maxDepth(null)).to.equal(0)
	})

	it("should return 1 for a tree with a single node", function () {
		const root = new TreeNode(1)
		expect(maxDepth(root)).to.equal(1)
	})

	it("should return 2 for a tree with two levels", function () {
		const root = new TreeNode(1, new TreeNode(2), null)
		expect(maxDepth(root)).to.equal(2)
	})

	it("should return 3 for a balanced binary tree", function () {
		const root = new TreeNode(1, new TreeNode(2), new TreeNode(3))
		root.left.left = new TreeNode(4)
		root.left.right = new TreeNode(5)
		root.right.right = new TreeNode(6)
		expect(maxDepth(root)).to.equal(3)
	})

	it("should return 4 for an unbalanced binary tree", function () {
		const root = new TreeNode(
			1,
			new TreeNode(2, new TreeNode(3, new TreeNode(4), null), null),
			null
		)
		expect(maxDepth(root)).to.equal(4)
	})

	it("should return 3 for a tree with both left and right subtrees of different depths", function () {
		const root = new TreeNode(1)
		root.left = new TreeNode(2)
		root.right = new TreeNode(3, new TreeNode(4), null)
		root.right.left.left = new TreeNode(5)
		expect(maxDepth(root)).to.equal(4)
	})
})
