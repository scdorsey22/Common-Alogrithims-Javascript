//Brute force

function isPermutationBrute(str1, str2) {
    // If the two strings have different lengths, they cannot be permutations of each other
    if (str1.length !== str2.length) {
        return false
    }
    //Loop through each character in the first string
    for (let i = 0; i < str1.length; i++) {
        //Look for the character in the second string
        let foundMatch = false;
        for (let j = 0; j < str2.length; j++) {
            //If we find a match, mark it as found and break out of the inner loop
            if (str1[i] === str2[j]) {
                foundMatch = true;
                break;
            }
        }
        //If we didn't find a match, the string are not permuations
        if(!foundMatch) {
            return false;
        }
    }
    //If we check every character and found a match for each one, return true
    return true  
}


function isPermutation(str1, str2) {
    // If the two strings have different lengths, they can't be permutations
    if (str1.length !== str2.length) {
      return false;
    }
    
    // Create a hash table to store the frequency of characters in str1
    const charFreq = {};
    for (let i = 0; i < str1.length; i++) {
      const char = str1[i];
      charFreq[char] = charFreq[char] ? charFreq[char] + 1 : 1;
    }
    
    // Check if every character in str2 has the same frequency as in str1
    for (let i = 0; i < str2.length; i++) {
      const char = str2[i];
      if (!charFreq[char]) {
        // If the character doesn't exist in str1, the strings can't be permutations
        return false;
      } else {
        charFreq[char]--;
        if (charFreq[char] < 0) {
          // If the frequency of the character is negative, it means str2 has more occurrences of the character than str1
          return false;
        }
      }
    }
    
    // If we reached this point, all characters in str2 have the same frequency as in str1
    return true;
  }
  

if (require.main === module) {

    console.log("Expecting: true")
    console.log('=>', isPermutationBrute('abc', 'cba'))
}

//Benchmark

const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    isPermutationBrute('asdfghjklzxcvbnm', 'lkjhgfdsamnbvcxz');
  }

  const avgTime = (Date.now() - startTime) / 1000;
  console.log(avgTime);

  const startTime1 = Date.now();

  for (let i = 0; i < 1000; ++i) {
    isPermutation('asdfghjklzxcvbnmqwertyuiop', 'lkjhgfdsamnbvcxzpoiuytrewq');
  }

  const avgTime1 = (Date.now() - startTime1) / 1000;
  console.log(avgTime1);

