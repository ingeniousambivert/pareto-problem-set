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
 * Reorders the list as per the problem statement.
 * @param {ListNode} head - The head of the linked list.
 * @returns {void}
 */

export function reorderList(head) {
	if (!head || !head.next || !head.next.next) {
		return
	}

	// Step 1: Find the middle of the linked list using the slow and fast pointers approach.
	let slow = head
	let fast = head

	while (fast && fast.next) {
		slow = slow.next
		fast = fast.next.next
	}

	// Step 2: Split the list into two halves.
	let second = slow.next
	slow.next = null // End of the first half

	// Step 3: Reverse the second half of the list.
	second = reverse(second)

	// Step 4: Merge the two halves.
	let first = head
	while (second) {
		let tmp1 = first.next
		let tmp2 = second.next

		first.next = second
		second.next = tmp1

		first = tmp1
		second = tmp2
	}
}

/**
 * Reverses a linked list.
 * @param {ListNode} head - The head of the linked list.
 * @returns {ListNode} - The new head of the reversed list.
 */
function reverse(head) {
	let prev = null
	let curr = head

	while (curr) {
		let next = curr.next
		curr.next = prev
		prev = curr
		curr = next
	}

	return prev
}
