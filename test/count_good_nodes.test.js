import { expect } from "chai"
import { TreeNode, countGoodNodes } from "../src/count_good_nodes.mjs"

describe("Check good nodes in a binary tree", () => {
	it("should return 4 for a tree where every node is good", () => {
		const root = new TreeNode(3)
		root.left = new TreeNode(1)
		root.right = new TreeNode(4)
		root.left.left = new TreeNode(3)
		root.right.left = new TreeNode(1)
		root.right.right = new TreeNode(5)
		expect(countGoodNodes(root)).to.equal(4)
	})

	it("should return 1 for a single node tree", () => {
		const root = new TreeNode(1)
		expect(countGoodNodes(root)).to.equal(1)
	})

	it("should return 3 for a tree with some good nodes", () => {
		const root = new TreeNode(3)
		root.left = new TreeNode(1)
		root.right = new TreeNode(4)
		root.left.left = new TreeNode(3)
		root.right.left = new TreeNode(3)
		root.right.right = new TreeNode(5)
		expect(countGoodNodes(root)).to.equal(4)
	})

	it("should return 0 for an empty tree", () => {
		expect(countGoodNodes(null)).to.equal(0)
	})

	it("should return 1 when root has a greater value than its children", () => {
		const root = new TreeNode(5)
		root.left = new TreeNode(3)
		root.right = new TreeNode(2)
		expect(countGoodNodes(root)).to.equal(1)
	})
})
