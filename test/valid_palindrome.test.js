import { expect } from "chai"
import { validPalindrome } from "../src/valid_palindrome.mjs"

describe("Check if a string is a palindrome", () => {
	it('should return true for "A man, a plan, a canal: Panama"', () => {
		expect(validPalindrome("A man, a plan, a canal: Panama")).to.be.true
	})

	it('should return false for "race a car"', () => {
		expect(validPalindrome("race a car")).to.be.false
	})

	it('should return true for " " (single space)', () => {
		expect(validPalindrome(" ")).to.be.true
	})

	it('should return true for "abccba"', () => {
		expect(validPalindrome("abccba")).to.be.true
	})

	it('should return false for "abcd"', () => {
		expect(validPalindrome("abcd")).to.be.false
	})
})
