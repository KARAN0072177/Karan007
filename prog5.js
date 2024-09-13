/* Program to find the sum from 1 to N numbers using loop. */
let N = prompt("Input the Value of N: ");
let sum=0;
for (let i = 1; i <=N; i++) {
    sum=sum+i;
}
console.log(" ");
console.log("The sum of 1 to "+N+" Terms is "+sum);