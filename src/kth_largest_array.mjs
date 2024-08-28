/**
 * Finds the kth largest element in an array using a min-heap.
 *
 * @param {number[]} nums - An array of integers.
 * @param {number} k - The k-th position to find the largest element for.
 * @returns {number} - The k-th largest element in the array.
 */
export function findKthLargest(nums, k) {
	if (k <= 0 || k > nums.length) throw new Error("Invalid value for k.")

	// Min-heap implementation using an array
	const minHeap = []

	// Helper function to maintain the heap property
	const heapify = (index) => {
		let smallest = index
		const left = 2 * index + 1
		const right = 2 * index + 2

		if (left < minHeap.length && minHeap[left] < minHeap[smallest]) {
			smallest = left
		}

		if (right < minHeap.length && minHeap[right] < minHeap[smallest]) {
			smallest = right
		}

		if (smallest !== index) {
			;[minHeap[index], minHeap[smallest]] = [minHeap[smallest], minHeap[index]]
			heapify(smallest)
		}
	}

	// Add a new element to the heap
	const add = (num) => {
		minHeap.push(num)
		let index = minHeap.length - 1
		while (index > 0) {
			const parent = Math.floor((index - 1) / 2)
			if (minHeap[parent] <= minHeap[index]) break
			;[minHeap[parent], minHeap[index]] = [minHeap[index], minHeap[parent]]
			index = parent
		}
	}

	// Remove the root element from the heap
	const remove = () => {
		if (minHeap.length === 0) return
		minHeap[0] = minHeap.pop()
		heapify(0)
	}

	// Initialize the heap with the first k elements
	for (let i = 0; i < k; i++) {
		add(nums[i])
	}

	// Process the rest of the elements
	for (let i = k; i < nums.length; i++) {
		if (nums[i] > minHeap[0]) {
			remove()
			add(nums[i])
		}
	}

	// The root of the min-heap is the kth largest element
	return minHeap[0]
}
