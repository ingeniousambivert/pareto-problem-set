/**
 * Finds all unique triplets in the array that sum up to zero.
 * @param {number[]} nums - An array of integers.
 * @return {number[][]} - A list of unique triplets that sum up to zero.
 */
export function threeSum(nums) {
	// Sort the array to use two pointers technique
	nums.sort((a, b) => a - b)
	const result = []

	for (let i = 0; i < nums.length - 2; i++) {
		// Skip duplicate elements to avoid duplicate triplets
		if (i > 0 && nums[i] === nums[i - 1]) continue

		let left = i + 1
		let right = nums.length - 1

		while (left < right) {
			const sum = nums[i] + nums[left] + nums[right]

			if (sum === 0) {
				result.push([nums[i], nums[left], nums[right]])

				// Skip duplicates for second element
				while (left < right && nums[left] === nums[left + 1]) left++
				left++

				// Skip duplicates for third element
				while (left < right && nums[right] === nums[right - 1]) right--
				right--
			} else if (sum < 0) {
				left++
			} else {
				right--
			}
		}
	}

	return result
}
