
# forEach(): 

This method is used to loop over an array and execute a provided function for each element. It takes a callback function as an argument which has three parameters: the current element, its index, and the array itself.

- Example:

const arr = [1, 2, 3, 4, 5];
arr.forEach(function(element, index) {
  console.log(`Element at index ${index} is: ${element}`);
});

// Output:
// Element at index 0 is: 1
// Element at index 1 is: 2
// Element at index 2 is: 3
// Element at index 3 is: 4
// Element at index 4 is: 5


# map():

This method is used to loop over an array and return a new array with the same number of elements but with each element modified by the callback function. It takes a callback function as an argument which has three parameters: the current element, its index, and the array itself.

- Example:


const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(function(element, index) {
  return element * 2;
});
console.log(newArr); // Output: [2, 4, 6, 8, 10]


# filter(): 

This method is used to loop over an array and return a new array with only the elements that pass a certain condition specified in the callback function. It takes a callback function as an argument which has three parameters: the current element, its index, and the array itself.

- Example:

const arr = [1, 2, 3, 4, 5];
const newArr = arr.filter(function(element) {
  return element % 2 === 0;
});
console.log(newArr); // Output: [2, 4]

# reduce():

This method is used to loop over an array and reduce it to a single value. It takes a callback function as an argument which has two parameters: an accumulator (which stores the accumulated value) and the current element. The callback function also has an optional third parameter which is the initial value of the accumulator.

- Example:

const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce(function(accumulator, element) {
  return accumulator + element;
});
console.log(sum); // Output: 15

# some():

This method is used to loop over an array and return a boolean value indicating whether at least one element passes a certain condition specified in the callback function. It takes a callback function as an argument which has three parameters: the current element, its index, and the array itself.

- Example:

const arr = [1, 2, 3, 4, 5];
const hasEvenNumber = arr.some(function(element) {
  return element % 2 === 0;
});

console.log(hasEvenNumber); // Output: true

# every():

This method is used to loop over an array and return a boolean value indicating whether all elements pass a certain condition specified in the callback function. It takes a callback function as an argument which has three parameters: the current element, its index, and the array itself.

- Example:


const arr = [1, 2, 3, 4, 5];
const allEvenNumbers = arr.every(function(element) {
  return element % 2 === 0;
});
console.log(allEvenNumbers); //


# find():

This method is used to loop over an array and return the first element that passes a certain condition specified in the callback function. It takes a callback function as an argument which has three parameters: the current element, its index, and the array itself.

- Example:


const arr = [1, 2, 3, 4, 5];
const firstEvenNumber = arr.find(function(element) {
  return element % 2 === 0;
});
console.log(firstEvenNumber); // Output: 2

# findIndex():

This method is used to loop over an array and return the index of the first element that passes a certain condition specified in the callback function. It takes a callback function as an argument which has three parameters: the current element, its index, and the array itself.

- Example:

const arr = [1, 2, 3, 4, 5];
const firstEvenNumberIndex = arr.findIndex(function(element) {
  return element % 2 === 0;
});
console.log(firstEvenNumberIndex); // Output: 1

# keys():

This method is used to loop over an array and return an array iterator that contains the keys (indexes) of each element.

- Example:

const arr = ['a', 'b', 'c'];
const iterator = arr.keys();
for (let key of iterator) {
  console.log(key);
}
// Output:
// 0
// 1
// 2

# values():

This method is used to loop over an array and return an array iterator that contains the values of each element.

- Example:

const arr = ['a', 'b', 'c'];
const iterator = arr.values();
for (let value of iterator) {
  console.log(value);
}
// Output:
// 'a'
// 'b'
// 'c'

# entries():

This method is used to loop over an array and return an array iterator that contains the key-value pairs (index-value) of each element.

- Example:

const arr = ['a', 'b', 'c'];
const iterator = arr.entries();
for (let entry of iterator) {
  console.log(entry);
}
// Output:
// [0, 'a']
// [1, 'b']
// [2, 'c']


# flatMap():

This method is used to loop over an array and apply a callback function that returns a new array, which is then flattened into a single array. It takes a callback function as an argument which has three parameters: the current element, its index, and the array itself.

- Example:

const arr = [1, 2, 3];
const newArr = arr.flatMap(function(element) {
  return [element, element * 2];
});
console.log(newArr); // Output: [1, 2, 2, 4, 3, 6]

# from():

This method is used to create a new array from an array-like or iterable object. It takes an iterable object as an argument.

- Example:

const str = 'hello';
const arr = Array.from(str);
console.log(arr); // Output: ['h', 'e', 'l', 'l', 'o']


# slice():

This method is used to create a new array that contains a portion of the original array. It takes two arguments: the starting index and the ending index (optional, defaults to the end of the array).

- Example:

const arr = [1, 2, 3, 4, 5];
const slicedArr = arr.slice(1, 4);
console.log(slicedArr); // Output: [2, 3, 4]

# sort():

This method is used to sort the elements of an array. It takes an optional callback function as an argument which specifies the sort order. If no callback function is provided, the elements are sorted in ascending order by default.

- Example:

const arr = [3, 2, 1, 4, 5];
arr.sort();
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr.sort(function(a, b) {
  return b - a;
});
console.log(arr); // Output: [5, 4, 3, 2, 1]

# reverse():

This method is used to reverse the order of the elements in an array.

- Example:

const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // Output: [5, 4, 3, 2, 1]

# reduceRight():

This method is similar to the reduce() method, but it starts with the last element of the array and works its way towards the first element. It takes a callback function as an argument which has two parameters: an accumulator (which stores the accumulated value) and the current element. The callback function also has an optional third parameter which is the initial value of the accumulator.

- Example:

const arr = [1, 2, 3, 4, 5];
const sum = arr.reduceRight(function(accumulator, element) {
  return accumulator + element;
});
console.log(sum); // Output: 15

# indexOf():

This method is used to find the first occurrence of a specified element in an array. It takes an element as an argument and returns the index of the first occurrence of that element in the array.

- Example:

const arr = [1, 2, 3, 4, 5];
const index = arr.indexOf(3);
console.log(index); // Output: 2

# lastIndexOf():

This method is similar to the indexOf() method, but it finds the last occurrence of a specified element in an array. It takes an element as an argument and returns the index of the last occurrence of that element in the array.

- Example:

const arr = [1, 2, 3, 4, 3, 5];
const index = arr.lastIndexOf(3);
console.log(index); // Output: 4

# includes():

This method is used to determine whether an array includes a certain element. It takes an element as an argument and returns a boolean value indicating whether the array includes that element.

- Example:

const arr = [1, 2, 3, 4, 5];
const includesThree = arr.includes(3);
console.log(includesThree); // Output: true

# toString():

This method is used to convert an array to a string. It returns a string representation of the array, with the elements separated by commas.

- Example:

const arr = [1, 2, 3, 4, 5];
const str = arr.toString();
console.log(str); // Output: '1,2,3,4,5'