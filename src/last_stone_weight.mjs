/**
 * Solves the "Last Stone Weight" problem using a Max-Heap (Priority Queue).
 * @param {number[]} stones - An array of positive integers representing stone weights.
 * @returns {number} - The weight of the last remaining stone, or 0 if no stones remain.
 */
export function lastStoneWeight(stones) {
	// Convert stones array into a max-heap
	function heapifyUp(heap, index) {
		while (index > 0) {
			const parentIndex = Math.floor((index - 1) / 2)
			if (heap[parentIndex] >= heap[index]) break
			;[heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]]
			index = parentIndex
		}
	}

	function heapifyDown(heap, index) {
		let largest = index
		const leftChild = 2 * index + 1
		const rightChild = 2 * index + 2

		if (leftChild < heap.length && heap[leftChild] > heap[largest]) {
			largest = leftChild
		}
		if (rightChild < heap.length && heap[rightChild] > heap[largest]) {
			largest = rightChild
		}
		if (largest !== index) {
			;[heap[index], heap[largest]] = [heap[largest], heap[index]]
			heapifyDown(heap, largest)
		}
	}

	let heap = []
	for (const stone of stones) {
		heap.push(stone)
		heapifyUp(heap, heap.length - 1)
	}

	while (heap.length > 1) {
		const stone1 = heap[0]
		heap[0] = heap.pop()
		heapifyDown(heap, 0)

		const stone2 = heap[0]
		heap[0] = heap.pop()
		heapifyDown(heap, 0)

		if (stone1 !== stone2) {
			const remainingStone = Math.abs(stone1 - stone2)
			heap.push(remainingStone)
			heapifyUp(heap, heap.length - 1)
		}
	}

	return heap.length === 0 ? 0 : heap[0]
}
