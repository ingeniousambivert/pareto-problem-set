import { expect } from "chai"
import { validAnagram } from "../src/valid_anagram.mjs"

describe("Check if two strings are anagrams", function () {
	it('should return true for "anagram" and "nagaram"', function () {
		expect(validAnagram("anagram", "nagaram")).to.be.true
	})

	it('should return false for "rat" and "car"', function () {
		expect(validAnagram("rat", "car")).to.be.false
	})

	it("should return true for empty strings", function () {
		expect(validAnagram("", "")).to.be.true
	})

	it("should return false for different lengths", function () {
		expect(validAnagram("abc", "ab")).to.be.false
	})

	it("should return true for same characters with different order", function () {
		expect(validAnagram("listen", "silent")).to.be.true
	})

	it("should return false for single character strings that are different", function () {
		expect(validAnagram("a", "b")).to.be.false
	})
})
