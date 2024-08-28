/**
 * Finds two indices in a sorted array such that the numbers at these indices add up to a specific target.
 * @param {number[]} numbers - A sorted array of integers.
 * @param {number} target - The target sum of two numbers.
 * @return {number[]} - An array containing the 1-based indices of the two numbers that add up to the target.
 */
export function twoSum(numbers, target) {
	let left = 0 // Initialize left pointer at the start of the array
	let right = numbers.length - 1 // Initialize right pointer at the end of the array

	while (left < right) {
		const sum = numbers[left] + numbers[right] // Calculate the sum of the two numbers pointed to by left and right

		if (sum === target) {
			return [left + 1, right + 1] // Return 1-based indices if sum matches target
		} else if (sum < target) {
			left++ // Move left pointer to the right to increase the sum
		} else {
			right-- // Move right pointer to the left to decrease the sum
		}
	}

	return [] // Return an empty array if no solution is found
}
