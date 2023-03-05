
function isPalindrome(str) {

    str = str.toLowerCase().replace(' ', '')

    const freq = {}
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        freq[char] = freq[char] ? freq[char] + 1 : 1;
    }
    
    let oddCount = 0
    for (const char in freq) {
        if (freq[char] % 2 === 1) {
            oddCount++;
        }
        if (oddCount > 1) {
            return false
        }
    }
 return true
}

/**
 * 
 */

console.log(isPalindrome('taco cat'))