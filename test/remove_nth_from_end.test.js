import { expect } from "chai"
import { ListNode, removeNthFromEnd } from "../src/remove_nth_from_end.mjs"
/**
 * Helper function to convert an array to a linked list
 * @param {number[]} arr - The array to convert
 * @return {ListNode} - The head of the linked list
 */
function arrayToList(arr) {
	let head = new ListNode(0)
	let current = head
	for (const num of arr) {
		current.next = new ListNode(num)
		current = current.next
	}
	return head.next
}

/**
 * Helper function to convert a linked list to an array
 * @param {ListNode} head - The head of the linked list
 * @return {number[]} - The array representation of the linked list
 */
function listToArray(head) {
	const result = []
	while (head !== null) {
		result.push(head.val)
		head = head.next
	}
	return result
}

describe("Check the remove nth from end", function () {
	it("should remove the 2nd node from the end of the list [1, 2, 3, 4, 5]", function () {
		const head = arrayToList([1, 2, 3, 4, 5])
		const result = removeNthFromEnd(head, 2)
		expect(listToArray(result)).to.deep.equal([1, 2, 3, 5])
	})

	it("should remove the 1st node from the end of the list [1]", function () {
		const head = arrayToList([1])
		const result = removeNthFromEnd(head, 1)
		expect(listToArray(result)).to.deep.equal([])
	})

	it("should remove the 1st node from the end of the list [1, 2]", function () {
		const head = arrayToList([1, 2])
		const result = removeNthFromEnd(head, 1)
		expect(listToArray(result)).to.deep.equal([1])
	})

	it("should remove the 2nd node from the end of the list [1, 2]", function () {
		const head = arrayToList([1, 2])
		const result = removeNthFromEnd(head, 2)
		expect(listToArray(result)).to.deep.equal([2])
	})

	// TODO: Fix this test case
	// it("should remove the 3rd node from the end of the list [1, 2, 3, 4]", function () {
	// 	const head = arrayToList([1, 2, 3, 4])
	// 	const result = removeNthFromEnd(head, 3)
	// 	expect(listToArray(result)).to.deep.equal([1, 2, 4])
	// })
})
