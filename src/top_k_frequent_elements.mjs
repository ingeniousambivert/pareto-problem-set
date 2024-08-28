/**
 * Finds the top K most frequent elements in an array.
 * @param {number[]} nums - An array of integers.
 * @param {number} k - The number of top frequent elements to return.
 * @return {number[]} - An array containing the top K most frequent elements.
 */
export function topKFrequent(nums, k) {
	const frequencyMap = new Map()

	// Build a frequency map of each number
	nums.forEach((num) => {
		frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
	})

	// Create an array of buckets where index represents frequency
	const buckets = Array(nums.length + 1)
		.fill(null)
		.map(() => [])

	// Fill the buckets with numbers based on their frequency
	frequencyMap.forEach((freq, num) => {
		buckets[freq].push(num)
	})

	// Collect the top K frequent elements from the buckets
	const result = []
	for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
		if (buckets[i].length > 0) {
			result.push(...buckets[i])
		}
	}

	return result.slice(0, k)
}
