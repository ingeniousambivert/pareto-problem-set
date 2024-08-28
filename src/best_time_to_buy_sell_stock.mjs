/**
 * Function to find the maximum profit from buying and selling stock.
 *
 * @param {number[]} prices - An array where prices[i] is the price of the stock on the i-th day.
 * @return {number} - The maximum profit possible from one transaction.
 */
export function maxProfit(prices) {
	let minPrice = Infinity // Initialize the minimum price to a very large number
	let maxProfit = 0 // Initialize the maximum profit to 0

	for (const price of prices) {
		// Update the minimum price if the current price is lower
		if (price < minPrice) {
			minPrice = price
		}
		// Calculate profit if sold on the current day and update max profit if this is higher
		const profit = price - minPrice
		if (profit > maxProfit) {
			maxProfit = profit
		}
	}

	return maxProfit
}
