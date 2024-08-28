/**
 * Definition for singly-linked list.
 * @typedef {Object} ListNode
 * @property {number} val - The value of the node.
 * @property {ListNode | null} next - The next node in the list.
 */

/**
 * Determines if there is a cycle in a linked list.
 * @param {ListNode} head - The head node of the linked list.
 * @returns {boolean} - Returns `true` if there is a cycle, otherwise `false`.
 */

export function hasCycle(head) {
	if (!head || !head.next) {
		return false // No cycle in an empty or single-node list
	}

	let slow = head // Initialize slow pointer
	let fast = head // Initialize fast pointer

	while (fast && fast.next) {
		slow = slow.next // Move slow pointer by 1 step
		fast = fast.next.next // Move fast pointer by 2 steps

		if (slow === fast) {
			return true // Cycle detected
		}
	}

	return false // No cycle detected
}
