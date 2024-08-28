/**
 * Finds two indices in an array such that the numbers at these indices add up to a specific target.
 * @param {number[]} nums - An array of integers.
 * @param {number} target - The target sum of two numbers.
 * @return {number[]} - An array containing the indices of the two numbers that add up to the target.
 * @throws {Error} - Throws an error if no two numbers add up to the target.
 */
export function twoSum(nums, target) {
	const map = new Map() // To store the number and its index

	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i] // The number needed to reach the target
		if (map.has(complement)) {
			return [map.get(complement), i] // Return indices if found
		}
		map.set(nums[i], i) // Store index of the current number
	}

	throw new Error("No two sum solution") // If no solution is found
}
