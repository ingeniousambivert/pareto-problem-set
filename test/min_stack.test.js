import { expect } from "chai"
import { MinStack } from "../src/min_stack.mjs"

describe("Check the minimum stack", function () {
	it("should handle basic operations correctly", function () {
		const minStack = new MinStack()
		minStack.push(5)
		minStack.push(3)
		minStack.push(7)
		expect(minStack.top()).to.equal(7)
		expect(minStack.getMin()).to.equal(3)
		minStack.pop()
		expect(minStack.top()).to.equal(3)
		expect(minStack.getMin()).to.equal(3)
		minStack.pop()
		expect(minStack.top()).to.equal(5)
		expect(minStack.getMin()).to.equal(5)
	})

	it("should handle negative numbers correctly", function () {
		const minStack = new MinStack()
		minStack.push(-1)
		minStack.push(-2)
		minStack.push(0)
		expect(minStack.getMin()).to.equal(-2)
		minStack.pop()
		expect(minStack.getMin()).to.equal(-2)
		minStack.pop()
		expect(minStack.getMin()).to.equal(-1)
	})

	it("should handle multiple identical minimum values", function () {
		const minStack = new MinStack()
		minStack.push(3)
		minStack.push(3)
		minStack.push(3)
		expect(minStack.getMin()).to.equal(3)
		minStack.pop()
		expect(minStack.getMin()).to.equal(3)
		minStack.pop()
		expect(minStack.getMin()).to.equal(3)
		minStack.pop()
		expect(() => minStack.getMin()).to.throw("Stack is empty") // Min stack should be empty
	})

	it("should handle an empty stack correctly", function () {
		const minStack = new MinStack()
		expect(() => minStack.top()).to.throw("Stack is empty")
		expect(() => minStack.getMin()).to.throw("Stack is empty")
	})

	it("should handle pushing and popping in sequence correctly", function () {
		const minStack = new MinStack()
		minStack.push(2)
		expect(minStack.getMin()).to.equal(2)
		minStack.push(1)
		expect(minStack.getMin()).to.equal(1)
		minStack.pop()
		expect(minStack.getMin()).to.equal(2)
		minStack.pop()
		expect(() => minStack.getMin()).to.throw("Stack is empty") // Min stack should be empty
	})
})
