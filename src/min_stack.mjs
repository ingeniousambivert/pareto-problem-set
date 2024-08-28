/**
 * A class representing a stack with a minimum value tracker.
 */
export class MinStack {
	/**
	 * Initializes an empty stack.
	 */
	constructor() {
		this.stack = []
		this.minStack = []
	}

	/**
	 * Pushes a new value onto the stack.
	 * @param {number} x - The value to push onto the stack.
	 */
	push(x) {
		this.stack.push(x)
		// If minStack is empty or the current value is less than or equal to the current minimum
		if (
			this.minStack.length === 0 ||
			x <= this.minStack[this.minStack.length - 1]
		) {
			this.minStack.push(x)
		}
	}

	/**
	 * Removes the top value from the stack.
	 */
	pop() {
		if (this.stack.length === 0) {
			throw new Error("Stack is empty")
		}
		const value = this.stack.pop()
		// If the value being removed is the same as the top of the minStack, also remove it from minStack
		if (value === this.minStack[this.minStack.length - 1]) {
			this.minStack.pop()
		}
	}

	/**
	 * Gets the top value from the stack.
	 * @return {number} - The top value of the stack.
	 * @throws {Error} - Throws an error if the stack is empty.
	 */
	top() {
		if (this.stack.length === 0) {
			throw new Error("Stack is empty")
		}
		return this.stack[this.stack.length - 1]
	}

	/**
	 * Retrieves the minimum value in the stack.
	 * @return {number} - The minimum value in the stack.
	 * @throws {Error} - Throws an error if the stack is empty.
	 */
	getMin() {
		if (this.minStack.length === 0) {
			throw new Error("Stack is empty")
		}
		return this.minStack[this.minStack.length - 1]
	}
}
