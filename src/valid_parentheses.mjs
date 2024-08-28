/**
 * Checks if the input string has valid parentheses.
 *
 * @param {string} s - The input string containing parentheses.
 * @return {boolean} - Returns true if the parentheses are valid, otherwise false.
 */
export function validParentheses(s) {
	// Stack to keep track of opening parentheses
	const stack = []
	// Map to store the matching closing parentheses for each opening parenthesis
	const map = {
		"(": ")",
		"{": "}",
		"[": "]",
	}

	// Iterate over each character in the string
	for (const char of s) {
		// If the character is one of the opening parentheses, push it onto the stack
		if (map[char]) {
			stack.push(char)
		} else if (Object.values(map).includes(char)) {
			// If the character is a closing parenthesis, check if it matches the top of the stack
			const topElement = stack.pop()
			if (map[topElement] !== char) {
				return false // Invalid if the closing parenthesis does not match
			}
		}
	}

	// If the stack is empty, all opening parentheses had matching closing parentheses
	return stack.length === 0
}
