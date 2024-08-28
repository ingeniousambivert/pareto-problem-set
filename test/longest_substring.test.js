import { expect } from "chai"
import { lengthOfLongestSubstring } from "../src/longest_substring.mjs"

describe("Check the length of the longest substring without repeating characters", function () {
	it('should return 3 for the input "abcabcbb"', () => {
		expect(lengthOfLongestSubstring("abcabcbb")).to.equal(3)
	})

	it('should return 1 for the input "bbbbb"', () => {
		expect(lengthOfLongestSubstring("bbbbb")).to.equal(1)
	})

	it('should return 3 for the input "pwwkew"', () => {
		expect(lengthOfLongestSubstring("pwwkew")).to.equal(3)
	})

	it('should return 0 for the input ""', () => {
		expect(lengthOfLongestSubstring("")).to.equal(0)
	})

	it('should return 3 for the input "aab"', () => {
		expect(lengthOfLongestSubstring("aab")).to.equal(2)
	})

	it('should return 5 for the input "dvdf"', () => {
		expect(lengthOfLongestSubstring("dvdf")).to.equal(3)
	})

	it('should return 6 for the input "abcdef"', () => {
		expect(lengthOfLongestSubstring("abcdef")).to.equal(6)
	})

	it('should return 3 for the input "abba"', () => {
		expect(lengthOfLongestSubstring("abba")).to.equal(2)
	})

	it('should return 4 for the input "abbaabcd"', () => {
		expect(lengthOfLongestSubstring("abbaabcd")).to.equal(4)
	})
})
