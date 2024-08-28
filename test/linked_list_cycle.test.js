import { expect } from "chai"
import { hasCycle } from "../src/linked_list_cycle.mjs"

// Helper function to create a linked list from an array
function createLinkedList(arr, pos) {
	if (arr.length === 0) return null

	let head = { val: arr[0], next: null }
	let current = head
	let nodes = [head] // Array to keep track of nodes

	for (let i = 1; i < arr.length; i++) {
		current.next = { val: arr[i], next: null }
		current = current.next
		nodes.push(current) // Add node to the array
	}

	if (pos >= 0 && pos < nodes.length) {
		current.next = nodes[pos] // Create cycle
	}

	return head
}

describe("Check the linked list cycle", function () {
	it("should return false for an empty list", () => {
		const head = null
		expect(hasCycle(head)).to.be.false
	})

	it("should return false for a single node without a cycle", () => {
		const head = { val: 1, next: null }
		expect(hasCycle(head)).to.be.false
	})

	it("should return true for a single node with a cycle", () => {
		const head = { val: 1, next: null }
		head.next = head // Creating a cycle
		expect(hasCycle(head)).to.be.true
	})

	it("should return false for a list without a cycle", () => {
		const head = createLinkedList([1, 2, 3, 4, 5], -1)
		expect(hasCycle(head)).to.be.false
	})

	it("should return true for a list with a cycle", () => {
		const head = createLinkedList([1, 2, 3, 4, 5], 2) // Cycle starts at node with value 3
		expect(hasCycle(head)).to.be.true
	})

	it("should return true for a list where cycle includes all nodes", () => {
		const head = createLinkedList([1, 2, 3, 4, 5], 0) // Cycle starts at node with value 1
		expect(hasCycle(head)).to.be.true
	})
})
