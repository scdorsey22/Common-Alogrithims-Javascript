//Brute force (no reverse method)

function reverseString(str) {
    //Write your code here
    let reversedStr = ""

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]
    }
    return reversedStr
}

/**
 * This function takes a string str as input and initializes an empty string reversedStr. 
 * It then iterates over the characters of the input string from the end to the beginning, 
 * appending each character to the reversedStr variable. Finally, it returns the reversed string.
 */


//Make it more efficient 

function reverseStr(str) {
    return str.split('').reverse().join('')
}

/**
 * This function takes a string str as input, splits it into an array of individual characters using the split() method, 
 * reverses the order of the characters using the reverse() method, and then joins the reversed characters back together 
 * into a string using the join() method.

This algorithm is more efficient than the previous one because it uses built-in methods that are optimized for performance, 
rather than manually iterating over each character of the string.
 */
