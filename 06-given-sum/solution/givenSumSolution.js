
function givenSum(arr ,sum) {
    let collection = {}

    for (let i = 0; i < arr.length; i++) {
        const num = ari[i]
        const compliment = sum - num
        if (collection.hasOwnProperty(compliment)) {
            return [num, compliment]
        } else {
            collection[num] = true
        }
    }
    return null
}

console.log(givenSum([1, 2, 3, 4, 5], 9))