import { expect } from "chai"
import { LRUCache } from "../src/lru_cache.mjs"

describe("Check the LRU cache", function () {
	it("should return -1 for an empty cache", function () {
		const cache = new LRUCache(2)
		expect(cache.get(1)).to.equal(-1)
	})

	it("should return the value for an existing key", function () {
		const cache = new LRUCache(2)
		cache.put(1, 10)
		expect(cache.get(1)).to.equal(10)
	})

	it("should update the value for an existing key", function () {
		const cache = new LRUCache(2)
		cache.put(1, 10)
		cache.put(1, 20)
		expect(cache.get(1)).to.equal(20)
	})

	it("should evict the least recently used item", function () {
		const cache = new LRUCache(2)
		cache.put(1, 10)
		cache.put(2, 20)
		cache.put(3, 30) // Evicts key 1
		expect(cache.get(1)).to.equal(-1)
		expect(cache.get(2)).to.equal(20)
		expect(cache.get(3)).to.equal(30)
	})

	it("should handle cache with capacity 1", function () {
		const cache = new LRUCache(1)
		cache.put(1, 10)
		expect(cache.get(1)).to.equal(10)
		cache.put(2, 20) // Evicts key 1
		expect(cache.get(1)).to.equal(-1)
		expect(cache.get(2)).to.equal(20)
	})

	it("should maintain the order of recently used items", function () {
		const cache = new LRUCache(3)
		cache.put(1, 10)
		cache.put(2, 20)
		cache.put(3, 30)
		cache.get(1) // Access 1
		cache.put(4, 40) // Evicts key 2
		expect(cache.get(2)).to.equal(-1)
		expect(cache.get(1)).to.equal(10)
		expect(cache.get(3)).to.equal(30)
		expect(cache.get(4)).to.equal(40)
	})
})
