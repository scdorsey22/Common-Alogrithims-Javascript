const bruteUniqueCharactersString = require('../code/uniqueCharactersString');
const uniqueCharactersString = require('../code/uniqueCharactersString')

test('returns true for a string with unique characters', () => {
  expect(bruteUniqueCharactersString('abcdefg')).toBe(true);
});

test('returns false for a string with duplicate characters', () => {
  expect(bruteUniqueCharactersString('hello')).toBe(false);
});

test('returns true for a string with unique characters', () => {
  expect(uniqueCharactersString('abcdefg')).toBe(true);
});

test('returns false for a string with duplicate characters', () => {
  expect(uniqueCharactersString('hello')).toBe(false);
});
