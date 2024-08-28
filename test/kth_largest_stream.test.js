import { expect } from "chai"
import { KthLargest } from "../src/kth_largest_stream.mjs"

describe("Check kth largest element in a stream", () => {
	it("should return the correct Kth largest element after adding elements", () => {
		const kthLargest = new KthLargest(3, [4, 5, 8, 2])
		expect(kthLargest.add(3)).to.equal(4)
		expect(kthLargest.add(5)).to.equal(5)
		expect(kthLargest.add(10)).to.equal(5)
		expect(kthLargest.add(9)).to.equal(8)
		expect(kthLargest.add(4)).to.equal(8)
	})

	it("should handle a stream with fewer elements than K", () => {
		const kthLargest = new KthLargest(2, [5])
		expect(kthLargest.add(1)).to.equal(1)
		expect(kthLargest.add(10)).to.equal(5)
	})

	it("should handle when the initial stream is empty", () => {
		const kthLargest = new KthLargest(1, [])
		expect(kthLargest.add(-1)).to.equal(-1)
		expect(kthLargest.add(1)).to.equal(1)
		expect(kthLargest.add(-2)).to.equal(1)
	})
})
