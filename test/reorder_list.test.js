import { expect } from "chai"
import { ListNode, reorderList } from "../src/reorder_list.mjs"

/**
 * Helper function to create a linked list from an array.
 * @param {number[]} values - Array of values to create the linked list.
 * @returns {ListNode} - The head of the linked list.
 */

function createLinkedList(values) {
	let head = null
	let current = null
	for (const value of values) {
		if (!head) {
			head = new ListNode(value)
			current = head
		} else {
			current.next = new ListNode(value)
			current = current.next
		}
	}
	return head
}

/**
 * Helper function to convert a linked list to an array.
 * @param {ListNode} head - The head of the linked list.
 * @returns {number[]} - Array of values from the linked list.
 */

function linkedListToArray(head) {
	const result = []
	let current = head
	while (current) {
		result.push(current.val)
		current = current.next
	}
	return result
}

describe("Check the reorder list", function () {
	it("should reorder list [1, 2, 3, 4] to [1, 4, 2, 3]", function () {
		let head = createLinkedList([1, 2, 3, 4])
		reorderList(head)
		expect(linkedListToArray(head)).to.deep.equal([1, 4, 2, 3])
	})

	it("should handle single node list [1]", function () {
		let head = createLinkedList([1])
		reorderList(head)
		expect(linkedListToArray(head)).to.deep.equal([1])
	})

	it("should handle two node list [1, 2]", function () {
		let head = createLinkedList([1, 2])
		reorderList(head)
		expect(linkedListToArray(head)).to.deep.equal([1, 2])
	})

	it("should reorder list [1, 2, 3, 4, 5] to [1, 5, 2, 4, 3]", function () {
		let head = createLinkedList([1, 2, 3, 4, 5])
		reorderList(head)
		expect(linkedListToArray(head)).to.deep.equal([1, 5, 2, 4, 3])
	})

	it("should handle list with duplicate values [1, 1, 1, 1, 1] to [1, 1, 1, 1, 1]", function () {
		let head = createLinkedList([1, 1, 1, 1, 1])
		reorderList(head)
		expect(linkedListToArray(head)).to.deep.equal([1, 1, 1, 1, 1])
	})

	it("should handle longer list [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] to [1, 10, 2, 9, 3, 8, 4, 7, 5, 6]", function () {
		let head = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
		reorderList(head)
		expect(linkedListToArray(head)).to.deep.equal([
			1, 10, 2, 9, 3, 8, 4, 7, 5, 6,
		])
	})
})
