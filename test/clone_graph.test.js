import { expect } from "chai"
import { Node, cloneGraph } from "../src/clone_graph.mjs"

describe("Check clone graph", () => {
	it("should correctly clone a graph with multiple nodes", function () {
		const node1 = new Node(1)
		const node2 = new Node(2)
		const node3 = new Node(3)
		const node4 = new Node(4)

		node1.neighbors = [node2, node4]
		node2.neighbors = [node1, node3]
		node3.neighbors = [node2, node4]
		node4.neighbors = [node1, node3]

		const clonedGraph = cloneGraph(node1)

		// Test if the graph was cloned correctly
		expect(clonedGraph.val).to.equal(1)
		expect(clonedGraph.neighbors.map((n) => n.val)).to.have.members([2, 4])

		const node2Clone = clonedGraph.neighbors.find((n) => n.val === 2)
		expect(node2Clone.neighbors.map((n) => n.val)).to.have.members([1, 3])

		const node3Clone = node2Clone.neighbors.find((n) => n.val === 3)
		expect(node3Clone.neighbors.map((n) => n.val)).to.have.members([2, 4])

		const node4Clone = node3Clone.neighbors.find((n) => n.val === 4)
		expect(node4Clone.neighbors.map((n) => n.val)).to.have.members([1, 3])
	})

	it("should return null for an empty graph", function () {
		const clonedGraph = cloneGraph(null)
		expect(clonedGraph).to.be.null
	})

	it("should correctly clone a single node graph", function () {
		const node1 = new Node(1)
		const clonedGraph = cloneGraph(node1)

		expect(clonedGraph.val).to.equal(1)
		expect(clonedGraph.neighbors).to.be.empty
	})

	it("should handle a graph with a single node with a self-loop", function () {
		const node1 = new Node(1)
		node1.neighbors = [node1]

		const clonedGraph = cloneGraph(node1)

		expect(clonedGraph.val).to.equal(1)
		expect(clonedGraph.neighbors.map((n) => n.val)).to.include(1)
	})
})
