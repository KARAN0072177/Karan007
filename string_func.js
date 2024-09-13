// string functions in java script

// 1. charAt() Returns char at a specified index in string.

let str = "Hello";
console.log(str.charAt(1));  // char is 'e'

// 2. concat() joints two or more strings
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2));  // result is 'Hello World'

// 3. includes() returns true or false in available

let str3 = "JavaScript is great";
console.log(str3.includes("bad"));  // result is false cause bad is not available in str3

// 4. indexOf()  Returns the index of the first occurrence of a substring in a string. Returns -1 if the value is not found

let str4 = "Hello World";
console.log(str4.indexOf("World"));  // index is 6

// 5. lastIndexOf() Returns the index of the last occurrence of a specified value in a string.

let str5 = "JavaScript is awesome. I love JavaScript.";
console.log(str5.lastIndexOf("JavaScript"));  // index is 30

// 6. replace() Syntax: string.replace(searchValue, newValue)
let str6 = "Hello World";
console.log(str6.replace("World", "JavaScript"));  // new string is 'Hello JavaScript'

// 7. split() Splits a string into an array of substrings based on a specified separator
// syntax:  string_name.split(seperator);
let str7 = "apple,banana,orange";
console.log(str7.split(","));  // result is ['apple', 'banana', 'orange']

// 8. Extracts a section of a string and returns it as a new string.
// syntax: slice(start,end)
let str8 = "Hello World";
console.log(str8.slice(0, 5));  // sliced String is 'Hello'

// 9.toLowerCase()   converts string into lower
let str9 = "HELLO WORLD";
console.log(str9.toLowerCase());  // result: 'hello world'

// 10. toUpperCase() converts string into UPPER
let str10 = "hello world"
console.log(str10.toUpperCase());  // result: HELLO WORLD

// 11. trim() removes whitespace from both end
let str11 = "  Hello World  ";
console.log(str11.trim());  // result is 'Hello World'





