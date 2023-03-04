
function mostFrequent(str) {
    let freq = {}
    let maxChar = ""
    let maxCount = 0

    for (i = 0; i <= str.length; i++) {
        const char = str[i]
        freq[char] = (freq[char] || 0) + 1
    }
  
    for (const char in freq) {
        if (freq[char] > maxCount) {
        maxCount = freq[char]
        maxChar = char
        }
    }
    return maxChar
}

console.log(mostFrequent('apple'))