
//Loop foward using a for loop
const arr1 = [1, 2, 3];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

//Loop forward using a for...of loop
const arr2 = [1, 2, 3];
for (const element of arr2) {
  console.log(element);
}

//Forward using the forEach() method
const arr3 = [1, 2, 3];
arr.forEach((element) => {
  console.log(element);
});


//Backward using a for loop:
const arr4 = [1, 2, 3];
for (let i = arr4.length - 1; i >= 0; i--) {
  console.log(arr4[i]);
}


//Backwards using the reverse() method and a for..of loop:
const arr5 = [1, 2, 3];
const reversedArr1 = arr5.reverse();
for (const element of reversedArr1) {
  console.log(element);
}

//Backward using the reverse() method and the forEach() method:

const arr6 = [1, 2, 3];
const reversedArr2 = arr6.reverse();
reversedArr2.forEach((element) => {
  console.log(element);
});

//Note that options 4-6 require reversing the original array before looping through it backwards. 
//If you don't want to modify the original array, you can create a copy using 
//the slice() method before reversing it:

const arr7 = [1, 2, 3];
const reversedArr3 = arr7.slice().reverse();
for (const element of reversedArr3) {
  console.log(element);
}
