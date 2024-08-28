import { expect } from "chai"
import {
	TreeNode,
	kthSmallest,
} from "../src/kth_smallest_binary_search_tree.mjs"

describe("Check kth smallest element in a binary search tree", () => {
	it("should return 1 for the first smallest element in a single node tree", () => {
		const root = new TreeNode(1)
		const result = kthSmallest(root, 1)
		expect(result).to.equal(1)
	})

	it("should return the kth smallest element in a BST", () => {
		const root = new TreeNode(3)
		root.left = new TreeNode(1)
		root.right = new TreeNode(4)
		root.left.right = new TreeNode(2)

		const result1 = kthSmallest(root, 1)
		expect(result1).to.equal(1)

		const result2 = kthSmallest(root, 2)
		expect(result2).to.equal(2)

		const result3 = kthSmallest(root, 3)
		expect(result3).to.equal(3)

		const result4 = kthSmallest(root, 4)
		expect(result4).to.equal(4)
	})

	it("should handle larger trees and return correct kth smallest", () => {
		const root = new TreeNode(5)
		root.left = new TreeNode(3)
		root.right = new TreeNode(6)
		root.left.left = new TreeNode(2)
		root.left.right = new TreeNode(4)
		root.left.left.left = new TreeNode(1)

		const result1 = kthSmallest(root, 1)
		expect(result1).to.equal(1)

		const result2 = kthSmallest(root, 2)
		expect(result2).to.equal(2)

		const result3 = kthSmallest(root, 3)
		expect(result3).to.equal(3)

		const result4 = kthSmallest(root, 4)
		expect(result4).to.equal(4)

		const result5 = kthSmallest(root, 5)
		expect(result5).to.equal(5)

		const result6 = kthSmallest(root, 6)
		expect(result6).to.equal(6)
	})

	it("should handle edge cases when k is out of range", () => {
		const root = new TreeNode(2)
		root.left = new TreeNode(1)

		const result = kthSmallest(root, 2)
		expect(result).to.equal(2)
	})
})
