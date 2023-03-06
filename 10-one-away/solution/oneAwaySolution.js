function oneAwayBruteForce(str1, str2) {
    if (str1 === str2) {
      return true; // no edits needed
    }
  
    if (Math.abs(str1.length - str2.length) > 1) {
      return false; // if the length difference is more than 1, return false
    }
  
    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < 26; j++) {
        const c = String.fromCharCode(97 + j); // generate all lowercase letters
        const newStr = str1.slice(0, i) + c + str1.slice(i + 1); // insert a new character
        if (newStr === str2) {
          return true;
        }
        if (newStr.length === str2.length) {
          let diff = 0;
          for (let k = 0; k < newStr.length; k++) {
            if (newStr[k] !== str2[k]) {
              diff++;
            }
            if (diff > 1) {
              break;
            }
          }
          if (diff === 1) {
            return true;
          }
        }
        const newStr2 = str1.slice(0, i) + c + str1.slice(i); // replace a character
        if (newStr2 === str2) {
          return true;
        }
      }
    }
  
    if (str1.length === str2.length - 1) {
      for (let i = 0; i < str2.length; i++) {
        const newStr = str2.slice(0, i) + str2.slice(i + 1); // delete a character
        if (newStr === str1) {
          return true;
        }
      }
    }
  
    return false; // if we get here, no valid edit found
  }
  

function oneAway(str1, str2) {
    if (Math.abs(str1.length - str2.length) > 1) {
      return false; // if the length difference is more than 1, return false
    }
  
    let edits = 0;
    let i = 0;
    let j = 0;
  
    while (i < str1.length && j < str2.length) {
      if (str1[i] !== str2[j]) {
        edits++;
        if (edits > 1) {
          return false; // if there are more than one edits, return false
        }
        if (str1.length > str2.length) {
          i++; // if str1 is longer, move its pointer to the right
        } else if (str1.length < str2.length) {
          j++; // if str2 is longer, move its pointer to the right
        } else {
          i++;
          j++; // if the strings have the same length, move both pointers to the right
        }
      } else {
        i++;
        j++; // if the characters match, move both pointers to the right
      }
    }
  
    return true; // if we get here, there is at most one edit
  }
  