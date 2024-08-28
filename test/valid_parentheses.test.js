// validParentheses.test.mjs
import { expect } from "chai"
import { validParentheses } from "../src/valid_parentheses.mjs"

describe("Check if parentheses are valid", function () {
	it("should return true for an empty string", function () {
		expect(validParentheses("")).to.be.true
	})

	it("should return true for a string with valid parentheses", function () {
		expect(validParentheses("()")).to.be.true
		expect(validParentheses("()[]{}")).to.be.true
		expect(validParentheses("{[]}")).to.be.true
	})

	it("should return false for a string with invalid parentheses", function () {
		expect(validParentheses("(]")).to.be.false
		expect(validParentheses("([)]")).to.be.false
		expect(validParentheses("(((")).to.be.false
		expect(validParentheses(")")).to.be.false
	})

	it("should handle cases with nested parentheses", function () {
		expect(validParentheses("({[]})")).to.be.true
		expect(validParentheses("{[()]}")).to.be.true
		expect(validParentheses("(((())))")).to.be.true
	})

	it("should handle cases with mixed valid and invalid parentheses", function () {
		expect(validParentheses("({[a]})")).to.be.true
		expect(validParentheses("{[a]b}")).to.be.true
		expect(validParentheses("[(a+b)]")).to.be.true
		expect(validParentheses("((()))(()))")).to.be.false
		expect(validParentheses("(((()))(()")).to.be.false
		expect(validParentheses("{a[b(c)d]e}")).to.be.true
	})

	it("should handle cases with additional characters", function () {
		expect(validParentheses("a(b)c[d]e{f}")).to.be.true
		expect(validParentheses("a(b)c[d]e{f]")).to.be.false
		expect(validParentheses("{a[b(c]d}")).to.be.false
		expect(validParentheses("{t{lo}]")).to.be.false
	})
})
