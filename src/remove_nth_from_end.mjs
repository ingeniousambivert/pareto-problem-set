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
 * Removes the Nth node from the end of a linked list and returns the head of the modified list.
 * @param {ListNode} head - The head of the linked list
 * @param {number} n - The position of the node to remove from the end (1-based index)
 * @return {ListNode} - The head of the modified linked list
 */
export function removeNthFromEnd(head, n) {
	// Create a dummy node that points to the head of the list
	const dummy = new ListNode(0)
	dummy.next = head

	// Initialize two pointers: both start at the dummy node
	let first = dummy
	let second = dummy

	// Move the first pointer n+1 steps ahead
	for (let i = 0; i <= n; i++) {
		first = first.next
	}

	// Move both pointers until the first pointer reaches the end of the list
	while (first !== null) {
		first = first.next
		second = second.next
	}

	// Remove the nth node from the end
	second.next = second.next.next

	// Return the new head of the list (skipping the dummy node)
	return dummy.next
}
