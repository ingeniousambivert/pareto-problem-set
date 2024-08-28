import { expect } from "chai"
import { invertTree, TreeNode } from "../src/invert_binary_tree.mjs"

/**
 * Helper function to create a binary tree from an array.
 * @param {number[]} arr - The array representation of the binary tree.
 * @return {TreeNode} The root of the binary tree.
 */
function createBinaryTree(arr) {
	if (arr.length === 0) return null

	const root = new TreeNode(arr[0])
	const queue = [root]
	let i = 1

	while (i < arr.length) {
		const node = queue.shift()
		if (arr[i] !== null) {
			node.left = new TreeNode(arr[i])
			queue.push(node.left)
		}
		i++
		if (i < arr.length && arr[i] !== null) {
			node.right = new TreeNode(arr[i])
			queue.push(node.right)
		}
		i++
	}

	return root
}

/**
 * Helper function to convert a binary tree to an array.
 * @param {TreeNode} root - The root of the binary tree.
 * @return {number[]} The array representation of the binary tree.
 */
function toArray(root) {
	const result = []
	const queue = [root]

	while (queue.length > 0) {
		const node = queue.shift()
		if (node) {
			result.push(node.val)
			queue.push(node.left)
			queue.push(node.right)
		} else {
			result.push(null)
		}
	}

	// Remove trailing nulls to get a clean representation
	while (result.length > 0 && result[result.length - 1] === null) {
		result.pop()
	}

	return result
}

describe("Check the invert binary tree", function () {
	it("should invert a binary tree", function () {
		const root = createBinaryTree([4, 2, 7, 1, 3, 6, 9])
		const invertedRoot = invertTree(root)
		expect(toArray(invertedRoot)).to.deep.equal([4, 7, 2, 9, 6, 3, 1])
	})

	it("should handle an empty tree", function () {
		const root = createBinaryTree([])
		const invertedRoot = invertTree(root)
		expect(toArray(invertedRoot)).to.deep.equal([])
	})

	it("should handle a tree with only one node", function () {
		const root = createBinaryTree([1])
		const invertedRoot = invertTree(root)
		expect(toArray(invertedRoot)).to.deep.equal([1])
	})

	it("should handle a tree with only left child", function () {
		const root = createBinaryTree([1, 2, null, 3])
		const invertedRoot = invertTree(root)
		expect(toArray(invertedRoot)).to.deep.equal([1, null, 2, null, 3])
	})

	it("should handle a tree with only right child", function () {
		const root = createBinaryTree([1, null, 2, null, 3])
		const invertedRoot = invertTree(root)
		expect(toArray(invertedRoot)).to.deep.equal([1, 2, null, 3])
	})
})
