/**
 * Finds the minimum element in a rotated sorted array.
 *
 * @param {number[]} nums - The rotated sorted array.
 * @returns {number} The minimum element in the array.
 */
export function findMin(nums) {
	let left = 0
	let right = nums.length - 1

	while (left < right) {
		const mid = Math.floor((left + right) / 2)

		// If the middle element is greater than the rightmost element,
		// the minimum element is in the right half.
		if (nums[mid] > nums[right]) {
			left = mid + 1
		} else if (nums[mid] < nums[right]) {
			// If the middle element is less than the rightmost element,
			// the minimum is in the left half including mid.
			right = mid
		} else {
			// If nums[mid] is equal to nums[right], reduce the search space by moving the right pointer
			right--
		}
	}

	return nums[left]
}
