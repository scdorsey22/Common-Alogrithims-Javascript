//Brute force method

function bruteUniqueCharactersString(str) {
  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Compare the current character to every other character in the string
    for (let j = i + 1; j < str.length; j++) {
      // If we find a duplicate, the string does not have unique characters
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  // If we have checked every pair of characters and not found a duplicate, the string has unique characters
  return true;
}

/*******
   * This algorithm works by looping through each character in the string and comparing it to every other 
   * character in the string using a nested loop. If we find a duplicate, we know that the string does not
   * have unique characters and we return false. If we have checked every pair of characters and not found 
   *a duplicate, we know that the string has unique characters and we return true.

   Note that this algorithm has a time complexity of O(n^2), where n is the length of the string. 
   This means that it can be very inefficient for long strings.
   */

   // Use a hashmap

   function uniqueCharactersString(str) {
    let charSet = new Set();
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (charSet.has(char)) {
        return false;
      }
      charSet.add(char);
    }
    return true;
  }
  
  module.exports = bruteUniqueCharactersString;
  module.exports = uniqueCharactersString;
  





  