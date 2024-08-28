/**
 * Search in Rotated Sorted Array
 * @param {number[]} nums - An array of integers sorted in ascending order, rotated at an unknown pivot.
 * @param {number} target - The target integer to search for.
 * @returns {number} - The index of the target if found, otherwise -1.
 */

export function search(nums, target) {
	let left = 0
	let right = nums.length - 1

	while (left <= right) {
		const mid = Math.floor((left + right) / 2)

		if (nums[mid] === target) {
			return mid
		}

		// Handle duplicates
		if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
			left++
			right--
		} else if (nums[left] <= nums[mid]) {
			// Left half is sorted
			if (nums[left] <= target && target < nums[mid]) {
				right = mid - 1
			} else {
				left = mid + 1
			}
		} else {
			// Right half is sorted
			if (nums[mid] < target && target <= nums[right]) {
				left = mid + 1
			} else {
				right = mid - 1
			}
		}
	}

	return -1 // Target not found
}
