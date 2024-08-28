/**
 * Definition for singly-linked list.
 * @param {number} val - Node value.
 * @param {ListNode} next - Next node.
 */

export class ListNode {
	constructor(val = 0, next = null) {
		this.val = val
		this.next = next
	}
}

/**
 * Merges two sorted linked lists into one sorted linked list.
 * @param {ListNode} l1 - The head node of the first sorted linked list.
 * @param {ListNode} l2 - The head node of the second sorted linked list.
 * @returns {ListNode} - The head node of the merged sorted linked list.
 */

export function mergeTwoLists(l1, l2) {
	// Create a dummy node to act as the start of the merged list
	let dummy = new ListNode()
	let current = dummy

	// Traverse through both lists
	while (l1 !== null && l2 !== null) {
		if (l1.val <= l2.val) {
			current.next = l1
			l1 = l1.next
		} else {
			current.next = l2
			l2 = l2.next
		}
		current = current.next
	}

	// If there are remaining nodes in l1 or l2, append them
	if (l1 !== null) {
		current.next = l1
	} else {
		current.next = l2
	}

	// Return the next node of dummy, which is the head of the merged list
	return dummy.next
}
