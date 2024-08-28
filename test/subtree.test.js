import { expect } from "chai"
import { isSubtree, TreeNode } from "../src/subtree.mjs"

describe("Check if a subtree is a subset of a larger tree", () => {
	it("should return true for a subtree matching root of the main tree", () => {
		const s = new TreeNode(
			3,
			new TreeNode(4, new TreeNode(1), new TreeNode(2)),
			new TreeNode(5)
		)
		const t = new TreeNode(4, new TreeNode(1), new TreeNode(2))
		expect(isSubtree(s, t)).to.be.true
	})

	it("should return false for a non-matching subtree", () => {
		const s = new TreeNode(
			3,
			new TreeNode(4, new TreeNode(1), new TreeNode(2)),
			new TreeNode(5)
		)
		const t = new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0)))
		expect(isSubtree(s, t)).to.be.false
	})

	it("should return true for a subtree deep inside the main tree", () => {
		const s = new TreeNode(
			3,
			new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0))),
			new TreeNode(5)
		)
		const t = new TreeNode(2, new TreeNode(0))
		expect(isSubtree(s, t)).to.be.true
	})

	it("should return false for an empty subtree when main tree is non-empty", () => {
		const s = new TreeNode(1)
		const t = null
		expect(isSubtree(s, t)).to.be.false
	})

	it("should return true for identical single node trees", () => {
		const s = new TreeNode(1)
		const t = new TreeNode(1)
		expect(isSubtree(s, t)).to.be.true
	})

	it("should return false when main tree is empty", () => {
		const s = null
		const t = new TreeNode(1)
		expect(isSubtree(s, t)).to.be.false
	})

	it("should return true for an empty subtree when both trees are empty", () => {
		const s = null
		const t = null
		expect(isSubtree(s, t)).to.be.true
	})
})
