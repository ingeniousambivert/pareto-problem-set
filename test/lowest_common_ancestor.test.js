import { expect } from "chai"
import {
	TreeNode,
	findLCAWithPresenceCheck,
} from "../src/lowest_common_ancestor.mjs"

describe("Check lowest common ancestor in a tree", () => {
	it("should find the lowest common ancestor in a simple case", function () {
		// Build the tree:
		//       3
		//      / \
		//     5   1
		//    / \ / \
		//   6  2 0  8
		//     / \
		//    7  4
		const root = new TreeNode(3)
		const node5 = new TreeNode(5)
		const node1 = new TreeNode(1)
		root.left = node5
		root.right = node1
		const node6 = new TreeNode(6)
		const node2 = new TreeNode(2)
		node5.left = node6
		node5.right = node2
		const node0 = new TreeNode(0)
		const node8 = new TreeNode(8)
		node1.left = node0
		node1.right = node8
		const node7 = new TreeNode(7)
		const node4 = new TreeNode(4)
		node2.left = node7
		node2.right = node4

		expect(findLCAWithPresenceCheck(root, node5, node1)).to.equal(root)
		expect(findLCAWithPresenceCheck(root, node5, node4)).to.equal(node5)
		expect(findLCAWithPresenceCheck(root, node7, node8)).to.equal(root)
		expect(findLCAWithPresenceCheck(root, node5, node6)).to.equal(node5)
	})

	it("should return null if one or both nodes are not present", function () {
		const root = new TreeNode(1)
		const node2 = new TreeNode(2)
		const node3 = new TreeNode(3)
		root.left = node2
		root.right = node3

		// Node 4 is not part of the tree
		const result = findLCAWithPresenceCheck(root, node2, new TreeNode(4))
		expect(result).to.be.null
	})

	it("should handle edge cases with minimal tree", function () {
		const root = new TreeNode(1)

		// LCA of the same node
		expect(findLCAWithPresenceCheck(root, root, root)).to.equal(root)

		// Node 2 is not part of the tree
		const result = findLCAWithPresenceCheck(root, root, new TreeNode(2))
		expect(result).to.be.null
	})
})
