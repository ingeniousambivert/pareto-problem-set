// lruCache.mjs

/**
 * Node class represents each node in the doubly linked list.
 */
class Node {
	/**
	 * Creates an instance of Node.
	 * @param {number} key - The key of the node.
	 * @param {number} value - The value of the node.
	 */
	constructor(key, value) {
		this.key = key // Key of the node
		this.value = value // Value of the node
		this.prev = null // Previous node in the linked list
		this.next = null // Next node in the linked list
	}
}

/**
 * LRUCache class implements the Least Recently Used (LRU) Cache.
 * Uses a doubly linked list to maintain the order of items and a hashmap for O(1) access.
 */
export class LRUCache {
	/**
	 * Creates an instance of LRUCache.
	 * @param {number} capacity - The maximum number of items the cache can hold.
	 */
	constructor(capacity) {
		this.capacity = capacity // Maximum capacity of the cache
		this.cache = new Map() // Hashmap for O(1) access to cache items
		this.head = new Node(0, 0) // Dummy head node to simplify operations
		this.tail = new Node(0, 0) // Dummy tail node to simplify operations
		this.head.next = this.tail
		this.tail.prev = this.head
	}

	/**
	 * Get the value of the key if the key exists in the cache, otherwise return -1.
	 * @param {number} key - The key of the node to retrieve.
	 * @return {number} - The value of the node or -1 if not found.
	 */
	get(key) {
		if (!this.cache.has(key)) return -1 // Return -1 if key is not found
		const node = this.cache.get(key) // Get the node from the cache
		this._remove(node) // Remove the node from its current position
		this._add(node) // Add the node to the head (most recently used)
		return node.value // Return the value of the node
	}

	/**
	 * Put a key-value pair into the cache.
	 * If the key already exists, update the value and move the node to the head.
	 * If the cache exceeds its capacity, evict the least recently used item.
	 * @param {number} key - The key of the node.
	 * @param {number} value - The value of the node.
	 */
	put(key, value) {
		if (this.cache.has(key)) {
			this._remove(this.cache.get(key)) // Remove the old node if it exists
		}
		const node = new Node(key, value) // Create a new node
		this._add(node) // Add the new node to the head (most recently used)
		this.cache.set(key, node) // Add the node to the hashmap

		if (this.cache.size > this.capacity) {
			// Check if we need to evict an item
			const lru = this.tail.prev // The least recently used item is before the tail
			this._remove(lru) // Remove the LRU node
			this.cache.delete(lru.key) // Remove the node from the hashmap
		}
	}

	/**
	 * Add a node right after the head node.
	 * @param {Node} node - The node to add.
	 */
	_add(node) {
		node.next = this.head.next // Point node's next to current first node
		node.prev = this.head // Point node's prev to head
		this.head.next.prev = node // Update the previous first node's prev to node
		this.head.next = node // Insert node right after head
	}

	/**
	 * Remove a node from the doubly linked list.
	 * @param {Node} node - The node to remove.
	 */
	_remove(node) {
		node.prev.next = node.next // Bypass the node in the linked list
		node.next.prev = node.prev // Update the previous node's next pointer
	}
}
