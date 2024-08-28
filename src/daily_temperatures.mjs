/**
 * Given a list of daily temperatures, returns a list of days until a warmer temperature.
 *
 * @param {number[]} temperatures - An array of daily temperatures.
 * @return {number[]} - An array where the i-th element is the number of days until a warmer temperature.
 */
export function dailyTemperatures(temperatures) {
	const n = temperatures.length
	const result = new Array(n).fill(0)
	const stack = [] // Stack to store indices of temperatures array

	for (let i = 0; i < n; i++) {
		// Check if current temperature is greater than temperature at index stored in the stack
		while (
			stack.length > 0 &&
			temperatures[i] > temperatures[stack[stack.length - 1]]
		) {
			const index = stack.pop()
			result[index] = i - index // Calculate number of days until a warmer temperature
		}
		stack.push(i) // Push current index to stack
	}

	return result
}
