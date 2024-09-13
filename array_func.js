// 1. push() adds element at the end

let arr1 = [1, 2, 3];
arr1.push(4);  // arr becomes [1, 2, 3, 4]
console.log(arr1);

// 2. pop() removes last element
let arr2 = [1, 2, 3];
let lastElement = arr2.pop();  // arr becomes [1, 2]
console.log(arr2);

// 3. shift() removes first element
let arr3 = [1, 2, 3];
let firstElement = arr3.shift();  // arr becomes [2, 3]
console.log(arr3);

// 4. unshift() adds element at start
let arr4 = [2, 3];
arr4.unshift(1);  // arr becomes [1, 2, 3]
console.log(arr4);

// 5. includes() returns true if element is present otherwise false
let arr5 = [1, 2, 3];
console.log(arr5.includes(2));  // returns true

// 6. slice()
let arr6 = [1, 2, 3, 4];
let slicedArr = arr6.slice(1, 3);  // slicedArr is [2, 3]
console.log(slicedArr);

// 7. Changes the contents of an array by removing, replacing, or adding elements.
let arr7 = [1, 2, 3, 4];
arr7.splice(1, 2);  // arr becomes [1, 4]
console.log(arr7);

// 8. concat() merge two arrays and returns new array
let arr8 = [1, 2];
let arr9 = [3, 4];
let newArr = arr8.concat(arr9);  // newArr is [1, 2, 3, 4]
console.log(newArr);

// 9. sort() sorts elements of array
let arr10 = [3, 1, 4, 2];
arr10.sort();  // arr becomes [1, 2, 3, 4]
console.log(arr10);

// 10. filter()  Creates a new array with all elements that pass the test implemented by the provided function.
let arr = [1, 2, 3, 4];
let evenNumbers = arr.filter(x => x % 2 === 0);  // evenNumbers is [2, 4]
console.log(evenNumbers);