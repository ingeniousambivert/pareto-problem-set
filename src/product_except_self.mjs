/**
 * Computes an array where each element is the product of all the numbers in the input array except the one at the current index.
 * @param {number[]} nums - An array of integers.
 * @return {number[]} - An array where each element is the product of all other elements in the input array.
 */
export function productExceptSelf(nums) {
	const n = nums.length
	const output = new Array(n).fill(1) // Initialize output array with 1s

	// Calculate the prefix products
	let prefix = 1
	for (let i = 0; i < n; i++) {
		output[i] = prefix // Set the prefix product for the current index
		prefix *= nums[i] // Update the prefix product
	}

	// Calculate the suffix products and combine with prefix products
	let suffix = 1
	for (let i = n - 1; i >= 0; i--) {
		output[i] *= suffix // Multiply the current index's product with suffix product
		suffix *= nums[i] // Update the suffix product
	}

	return output
}
