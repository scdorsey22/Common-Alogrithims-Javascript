
function URLify(str, len) {
    const arr = str.split('')
    console.log(arr)

    for (let i = 0; i < len; i++) {
        if (arr[i] === ' ') {
            arr[i] = '%20'
        }
    }
    return arr.join('')
 }

console.log(URLify('Mr John Smith      ', 13))