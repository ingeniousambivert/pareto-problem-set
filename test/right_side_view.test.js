import { expect } from "chai"
import { TreeNode, rightSideView } from "../src/right_side_view.mjs"

describe("Check right side view of a binary tree", () => {
	it("should return an empty array when the tree is empty", () => {
		expect(rightSideView(null)).to.deep.equal([])
	})

	it("should return the root when the tree only has one node", () => {
		const root = new TreeNode(1)
		expect(rightSideView(root)).to.deep.equal([1])
	})

	it("should return right-side view of a tree with multiple nodes", () => {
		const root = new TreeNode(1)
		root.left = new TreeNode(2)
		root.right = new TreeNode(3)
		root.left.right = new TreeNode(5)
		root.right.right = new TreeNode(4)

		expect(rightSideView(root)).to.deep.equal([1, 3, 4])
	})

	it("should return right-side view when the right subtree is missing", () => {
		const root = new TreeNode(1)
		root.left = new TreeNode(2)
		root.left.left = new TreeNode(4)
		expect(rightSideView(root)).to.deep.equal([1, 2, 4])
	})

	it("should return right-side view when the left subtree is missing", () => {
		const root = new TreeNode(1)
		root.right = new TreeNode(3)
		root.right.right = new TreeNode(4)
		expect(rightSideView(root)).to.deep.equal([1, 3, 4])
	})

	it("should handle a complex tree structure", () => {
		const root = new TreeNode(1)
		root.left = new TreeNode(2)
		root.right = new TreeNode(3)
		root.left.right = new TreeNode(5)
		root.right.left = new TreeNode(6)
		root.right.right = new TreeNode(7)
		root.left.right.left = new TreeNode(8)

		expect(rightSideView(root)).to.deep.equal([1, 3, 7, 8])
	})
})
