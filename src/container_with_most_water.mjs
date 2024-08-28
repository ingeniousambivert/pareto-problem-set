/**
 * Finds the maximum amount of water that can be contained between two lines.
 *
 * @param {number[]} height - Array where each element represents the height of a line.
 * @returns {number} - The maximum amount of water that can be contained.
 */
export function maxArea(height) {
	let left = 0
	let right = height.length - 1
	let maxWater = 0

	// Move pointers towards each other until they meet
	while (left < right) {
		// Calculate the width and height of the current container
		const width = right - left
		const currentHeight = Math.min(height[left], height[right])

		// Calculate the area with the current container and update maxWater if necessary
		const area = width * currentHeight
		maxWater = Math.max(maxWater, area)

		// Move the pointer pointing to the shorter line inward
		if (height[left] < height[right]) {
			left++
		} else {
			right--
		}
	}

	return maxWater
}
