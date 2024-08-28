/**
 * Checks if two strings are anagrams of each other.
 * @param {string} s - The first string.
 * @param {string} t - The second string.
 * @return {boolean} - Returns `true` if `t` is an anagram of `s`, otherwise `false`.
 */
export function validAnagram(s, t) {
	// If lengths are different, they cannot be anagrams
	if (s.length !== t.length) return false

	// Create a frequency map for characters in string s
	const charCount = {}

	// Count characters in the first string
	for (const char of s) {
		charCount[char] = (charCount[char] || 0) + 1
	}

	// Subtract counts using characters from the second string
	for (const char of t) {
		if (!charCount[char]) return false // Character not found or count mismatched
		charCount[char] -= 1
	}

	// Ensure all counts are zero
	return Object.values(charCount).every((count) => count === 0)
}
