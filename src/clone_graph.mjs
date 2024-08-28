// Definition for a Node.
export class Node {
	constructor(val, neighbors = []) {
		this.val = val
		this.neighbors = neighbors
	}
}

/**
 * Clone an undirected graph.
 *
 * @param {Node} node - The node to start cloning from.
 * @return {Node} - The cloned graph.
 */
export function cloneGraph(node) {
	if (!node) return null

	// Map to keep track of the cloned nodes.
	const map = new Map()

	/**
	 * Perform a DFS to clone nodes and their neighbors.
	 *
	 * @param {Node} node - The node to clone.
	 * @return {Node} - The cloned node.
	 */
	function dfs(node) {
		if (map.has(node.val)) return map.get(node.val)

		// Create a new node for the current node.
		const clone = new Node(node.val)
		map.set(node.val, clone)

		// Clone all the neighbors.
		for (const neighbor of node.neighbors) {
			clone.neighbors.push(dfs(neighbor))
		}

		return clone
	}

	// Start cloning from the given node.
	return dfs(node)
}
