import { expect } from "chai"
import { ListNode, reverseList } from "../src/reverse_linked_list.mjs"

/**
 * Converts an array to a linked list.
 * @param {number[]} array - The array to convert.
 * @return {ListNode|null} - The head of the linked list.
 */
function arrayToList(array) {
	let head = null
	let tail = null

	for (const value of array) {
		const newNode = new ListNode(value)
		if (head === null) {
			head = newNode
			tail = head
		} else {
			tail.next = newNode
			tail = newNode
		}
	}

	return head
}

/**
 * Converts a linked list to an array.
 * @param {ListNode|null} head - The head of the linked list.
 * @return {number[]} - The array representation of the linked list.
 */
function listToArray(head) {
	const array = []
	let current = head

	while (current !== null) {
		array.push(current.val)
		current = current.next
	}

	return array
}

describe("Check reverse linked list", () => {
	it("should reverse a linked list with multiple elements", () => {
		const list = arrayToList([1, 2, 3, 4, 5])
		const reversedList = reverseList(list)
		expect(listToArray(reversedList)).to.deep.equal([5, 4, 3, 2, 1])
	})

	it("should handle an empty linked list", () => {
		const list = arrayToList([])
		const reversedList = reverseList(list)
		expect(listToArray(reversedList)).to.deep.equal([])
	})

	it("should handle a linked list with a single element", () => {
		const list = arrayToList([1])
		const reversedList = reverseList(list)
		expect(listToArray(reversedList)).to.deep.equal([1])
	})

	it("should handle a linked list with two elements", () => {
		const list = arrayToList([1, 2])
		const reversedList = reverseList(list)
		expect(listToArray(reversedList)).to.deep.equal([2, 1])
	})
})
