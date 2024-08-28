import { expect } from "chai"
import { TreeNode, levelOrder } from "../src/level_order_traversal.mjs"

describe("Check level order traversal in a tree", () => {
	it("should return an empty array for an empty tree", () => {
		const root = null
		expect(levelOrder(root)).to.deep.equal([])
	})

	it("should return correct level order for a single node tree", () => {
		const root = new TreeNode(1)
		expect(levelOrder(root)).to.deep.equal([[1]])
	})

	it("should return correct level order for a balanced binary tree", () => {
		const root = new TreeNode(1)
		root.left = new TreeNode(2)
		root.right = new TreeNode(3)
		root.left.left = new TreeNode(4)
		root.left.right = new TreeNode(5)
		root.right.left = new TreeNode(6)
		root.right.right = new TreeNode(7)

		expect(levelOrder(root)).to.deep.equal([[1], [2, 3], [4, 5, 6, 7]])
	})

	it("should return correct level order for a left-skewed tree", () => {
		const root = new TreeNode(1)
		root.left = new TreeNode(2)
		root.left.left = new TreeNode(3)
		root.left.left.left = new TreeNode(4)

		expect(levelOrder(root)).to.deep.equal([[1], [2], [3], [4]])
	})

	it("should return correct level order for a right-skewed tree", () => {
		const root = new TreeNode(1)
		root.right = new TreeNode(2)
		root.right.right = new TreeNode(3)
		root.right.right.right = new TreeNode(4)

		expect(levelOrder(root)).to.deep.equal([[1], [2], [3], [4]])
	})

	it("should return correct level order for an unbalanced tree", () => {
		const root = new TreeNode(1)
		root.left = new TreeNode(2)
		root.left.right = new TreeNode(4)
		root.left.right.left = new TreeNode(5)

		expect(levelOrder(root)).to.deep.equal([[1], [2], [4], [5]])
	})
})
