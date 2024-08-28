/**
 * Checks if there are any duplicate numbers in the given array.
 * @param {number[]} nums - An array of integers to check for duplicates.
 * @return {boolean} - Returns `true` if there are duplicates, otherwise `false`.
 */
export function containsDuplicate(nums) {
	const numSet = new Set() // Create a set to track unique numbers
	for (const num of nums) {
		// Iterate through the numbers
		if (numSet.has(num)) {
			// Check if the number is already in the set
			return true // Duplicate found
		}
		numSet.add(num) // Add the number to the set
	}
	return false // No duplicates found
}
