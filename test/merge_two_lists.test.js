import { expect } from "chai"
import { ListNode, mergeTwoLists } from "../src/merge_two_lists.mjs"

/**
 * Helper function to create a linked list from an array of values.
 * @param {number[]} values - The values to create nodes for.
 * @returns {ListNode} - The head node of the linked list.
 */
function createList(values) {
	let dummy = new ListNode()
	let current = dummy
	for (const value of values) {
		current.next = new ListNode(value)
		current = current.next
	}
	return dummy.next
}

/**
 * Helper function to convert a linked list to an array of values.
 * @param {ListNode} head - The head node of the linked list.
 * @returns {number[]} - The array of values from the linked list.
 */
function toArray(head) {
	let result = []
	while (head !== null) {
		result.push(head.val)
		head = head.next
	}
	return result
}

describe("Check the merge two lists", function () {
	it("should merge two sorted lists", function () {
		let l1 = createList([1, 2, 4])
		let l2 = createList([1, 3, 4])
		let merged = mergeTwoLists(l1, l2)
		expect(toArray(merged)).to.deep.equal([1, 1, 2, 3, 4, 4])
	})

	it("should handle lists with different lengths", function () {
		let l1 = createList([1, 2, 3])
		let l2 = createList([4, 5, 6, 7, 8])
		let merged = mergeTwoLists(l1, l2)
		expect(toArray(merged)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8])
	})

	it("should handle one empty list", function () {
		let l1 = null
		let l2 = createList([1, 2, 3])
		let merged = mergeTwoLists(l1, l2)
		expect(toArray(merged)).to.deep.equal([1, 2, 3])
	})

	it("should handle both lists empty", function () {
		let l1 = null
		let l2 = null
		let merged = mergeTwoLists(l1, l2)
		expect(toArray(merged)).to.deep.equal([])
	})

	it("should handle lists with identical elements", function () {
		let l1 = createList([2, 2, 2])
		let l2 = createList([2, 2, 2])
		let merged = mergeTwoLists(l1, l2)
		expect(toArray(merged)).to.deep.equal([2, 2, 2, 2, 2, 2])
	})
})
