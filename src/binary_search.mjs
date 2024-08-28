/**
 * Performs a binary search on a sorted array to find the target value.
 *
 * @param {number[]} nums - The sorted array in which to search.
 * @param {number} target - The value to search for.
 * @returns {number} - The index of the target value if found, otherwise -1.
 */
export function binarySearch(nums, target) {
	let left = 0 // Starting index of the array
	let right = nums.length - 1 // Ending index of the array

	while (left <= right) {
		const mid = Math.floor((left + right) / 2) // Middle index of the current range

		if (nums[mid] === target) {
			return mid // Target found, return its index
		} else if (nums[mid] < target) {
			left = mid + 1 // Target is in the right half, move left index to mid + 1
		} else {
			right = mid - 1 // Target is in the left half, move right index to mid - 1
		}
	}

	return -1 // Target not found, return -1
}
