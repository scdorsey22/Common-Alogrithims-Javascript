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
    // Create an empty object to keep track of characters
    const charMap = {};
    
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      // Get the current character
      const char = str[i];
      
      // If the character is already in the object, the string does not have unique characters
      if (charMap[char]) {
        return false;
      } else {
        // Otherwise, add the character to the object
        charMap[char] = true;
      }
    }
    
    // If we have checked every character and not found a duplicate, the string has unique characters
    return true;
  }

  /****
   * In this algorithm, we create an empty object to keep track of each character in the string. 
   * We then loop through each character in the string exactly once, which takes O(n) time. 
   * For each character, we perform a constant-time lookup in the object and possibly 
   * add a new key-value pair to the object. The time complexity of a constant-time lookup in an object is O(1). 
   * Therefore, the overall time complexity of the algorithm is O(n) for the loop plus O(1) for each constant-time 
   * lookup and insertion, which simplifies to O(n).

    This makes the first algorithm very efficient for determining if a string has all unique characters, 
    especially for long strings, and is generally preferred over the nested loop algorithm that has a time complexity 
    of O(n^2).
   * 
   */
  
  





  