const isPermutationBrute = require("../code/isPermutation")
const isPermutation = require('../code/isPermutation')


test('returns true for valid permutations', () => {
    expect(isPermutationBrute('abc', 'cba')).toBe(true);
    expect(isPermutationBrute('abcd', 'dcba')).toBe(true);
    expect(isPermutationBrute('dog', 'god')).toBe(true);
  });
  
  test('returns false for invalid permutations', () => {
    expect(isPermutationBrute('abc', 'def')).toBe(false);
    expect(isPermutationBrute('abcd', 'dcbe')).toBe(false);
    expect(isPermutationBrute('dog', 'cat')).toBe(false);
  });
  
  test('returns false if the input strings have different lengths', () => {
    expect(isPermutationBrute('abc', 'abcd')).toBe(false);
    expect(isPermutationBrute('abc', 'ab')).toBe(false);
  });
  
  test('returns true for valid permutations', () => {
    expect(isPermutation('abc', 'cba')).toBe(true);
    expect(isPermutation('abcd', 'dcba')).toBe(true);
    expect(isPermutation('dog', 'god')).toBe(true);
  });
  
  test('returns false for invalid permutations', () => {
    expect(isPermutation('abc', 'def')).toBe(false);
    expect(isPermutation('abcd', 'dcbe')).toBe(false);
    expect(isPermutation('dog', 'cat')).toBe(false);
  });
  
  test('returns false if the input strings have different lengths', () => {
    expect(isPermutation('abc', 'abcd')).toBe(false);
    expect(isPermutation('abc', 'ab')).toBe(false);
  });
  