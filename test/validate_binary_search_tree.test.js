import { expect } from "chai"
import { TreeNode, isValidBST } from "../src/validate_binary_search_tree.mjs"

describe("Check is valid binary search tree", () => {
	it("should return true for a valid BST", function () {
		const root = new TreeNode(2)
		root.left = new TreeNode(1)
		root.right = new TreeNode(3)
		expect(isValidBST(root)).to.be.true
	})

	it("should return false for an invalid BST", function () {
		const root = new TreeNode(5)
		root.left = new TreeNode(1)
		root.right = new TreeNode(4)
		root.right.left = new TreeNode(3)
		root.right.right = new TreeNode(6)
		expect(isValidBST(root)).to.be.false
	})

	it("should return true for an empty tree", function () {
		const root = null
		expect(isValidBST(root)).to.be.true
	})

	it("should return true for a single node tree", function () {
		const root = new TreeNode(1)
		expect(isValidBST(root)).to.be.true
	})

	it("should return false when left child has a greater value than parent", function () {
		const root = new TreeNode(10)
		root.left = new TreeNode(15)
		expect(isValidBST(root)).to.be.false
	})

	it("should return false when right child has a smaller value than parent", function () {
		const root = new TreeNode(10)
		root.right = new TreeNode(5)
		expect(isValidBST(root)).to.be.false
	})

	it("should handle negative values in a valid BST", function () {
		const root = new TreeNode(0)
		root.left = new TreeNode(-10)
		root.right = new TreeNode(10)
		expect(isValidBST(root)).to.be.true
	})

	it("should return false for a tree that is a valid binary tree but not a BST", function () {
		const root = new TreeNode(10)
		root.left = new TreeNode(5)
		root.right = new TreeNode(15)
		root.right.left = new TreeNode(6) // Invalid because 6 < 10 (root)
		root.right.right = new TreeNode(20)
		expect(isValidBST(root)).to.be.false
	})
})
