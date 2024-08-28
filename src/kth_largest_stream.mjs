/**
 * Class to find the Kth largest element in a stream
 */
export class KthLargest {
	/**
	 * @param {number} k - The order of the largest element to track
	 * @param {number[]} nums - Initial list of numbers in the stream
	 */
	constructor(k, nums) {
		this.k = k
		this.heap = []
		// Initialize the heap with the given numbers
		for (let num of nums) {
			this._add(num)
		}
	}

	/**
	 * Adds a new value to the stream and returns the Kth largest element
	 * @param {number} val - The value to add to the stream
	 * @returns {number} - The Kth largest element in the stream
	 */
	add(val) {
		this._add(val)
		return this.heap[0]
	}

	/**
	 * Helper function to add a value to the heap and maintain the size
	 * @param {number} val - The value to add
	 * @private
	 */
	_add(val) {
		if (this.heap.length < this.k) {
			this.heap.push(val)
			this._heapifyUp()
		} else if (val > this.heap[0]) {
			this.heap[0] = val
			this._heapifyDown()
		}
	}

	/**
	 * Maintains the heap property by moving the last element up
	 * @private
	 */
	_heapifyUp() {
		let index = this.heap.length - 1
		while (index > 0) {
			const parentIndex = Math.floor((index - 1) / 2)
			if (this.heap[index] >= this.heap[parentIndex]) break
			;[this.heap[index], this.heap[parentIndex]] = [
				this.heap[parentIndex],
				this.heap[index],
			]
			index = parentIndex
		}
	}

	/**
	 * Maintains the heap property by moving the root element down
	 * @private
	 */
	_heapifyDown() {
		let index = 0
		const length = this.heap.length
		while (true) {
			const leftChildIndex = 2 * index + 1
			const rightChildIndex = 2 * index + 2
			let smallest = index

			if (
				leftChildIndex < length &&
				this.heap[leftChildIndex] < this.heap[smallest]
			) {
				smallest = leftChildIndex
			}
			if (
				rightChildIndex < length &&
				this.heap[rightChildIndex] < this.heap[smallest]
			) {
				smallest = rightChildIndex
			}
			if (smallest === index) break
			;[this.heap[index], this.heap[smallest]] = [
				this.heap[smallest],
				this.heap[index],
			]
			index = smallest
		}
	}
}
