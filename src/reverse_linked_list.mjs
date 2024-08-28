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
 * Reverses a singly linked list.
 * @param {ListNode|null} head - The head of the singly linked list.
 * @return {ListNode|null} - The new head of the reversed linked list.
 */

export function reverseList(head) {
	let prev = null
	let curr = head

	while (curr !== null) {
		const next = curr.next // Store the next node
		curr.next = prev // Reverse the link
		prev = curr // Move prev to the current node
		curr = next // Move to the next node
	}

	return prev // New head of the reversed list
}
