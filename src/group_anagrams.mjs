/**
 * Groups a list of strings into anagrams.
 * @param {string[]} strs - An array of strings to be grouped.
 * @return {string[][]} - A list of lists, where each sublist contains strings that are anagrams of each other.
 */
export function groupAnagrams(strs) {
	const map = new Map() // Create a map to track groups of anagrams

	for (const str of strs) {
		// Create a sorted version of the string as a key
		const sortedStr = str.split("").sort().join("")

		// If the key doesn't exist in the map, create an empty array
		if (!map.has(sortedStr)) {
			map.set(sortedStr, [])
		}

		// Push the original string into the array corresponding to the sorted key
		map.get(sortedStr).push(str)
	}

	// Convert map values to an array
	return Array.from(map.values())
}
