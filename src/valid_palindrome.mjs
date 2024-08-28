/**
 * Checks if a string is a palindrome, considering only alphanumeric characters and ignoring case.
 * @param {string} s - The input string to check.
 * @return {boolean} - Returns `true` if the string is a palindrome, otherwise `false`.
 */
export function validPalindrome(s) {
	// Function to clean the string (remove non-alphanumeric characters and convert to lowercase)
	const cleanString = (str) => str.replace(/[^a-z0-9]/gi, "").toLowerCase()

	// Clean the input string
	s = cleanString(s)

	// Initialize two pointers
	let left = 0
	let right = s.length - 1

	// Check characters from both ends
	while (left < right) {
		if (s[left] !== s[right]) {
			return false // Characters do not match, not a palindrome
		}
		left++ // Move the left pointer to the right
		right-- // Move the right pointer to the left
	}

	return true // All characters matched, it is a palindrome
}
