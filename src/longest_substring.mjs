/**
 * Finds the length of the longest substring without repeating characters.
 *
 * @param {string} s - The input string.
 * @returns {number} - The length of the longest substring without repeating characters.
 */
export function lengthOfLongestSubstring(s) {
	let maxLength = 0 // To keep track of the maximum length of substring found
	let start = 0 // The starting index of the current window
	const charIndexMap = new Map() // To store the last index of each character

	for (let end = 0; end < s.length; end++) {
		const char = s[end]

		// If the character is already in the map and its index is within the current window
		if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
			start = charIndexMap.get(char) + 1 // Move the start to the right of the last occurrence
		}

		charIndexMap.set(char, end) // Update the last index of the character
		maxLength = Math.max(maxLength, end - start + 1) // Update the maximum length if needed
	}

	return maxLength
}
