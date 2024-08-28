/**
 * Finds the length of the longest consecutive sequence in an unsorted array of integers.
 * @param {number[]} nums - An array of integers.
 * @return {number} - The length of the longest consecutive sequence.
 */
export function longestConsecutive(nums) {
	// Create a Set for O(1) lookups
	const numSet = new Set(nums)
	let longest = 0

	// Iterate through each number in the Set
	for (const num of numSet) {
		// Check if it's the start of a sequence
		if (!numSet.has(num - 1)) {
			let currentNum = num
			let currentLength = 1

			// Expand the sequence
			while (numSet.has(currentNum + 1)) {
				currentNum += 1
				currentLength += 1
			}

			// Update the longest sequence length
			longest = Math.max(longest, currentLength)
		}
	}
	return longest
}
