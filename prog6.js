/* Program to print fibnacco series upto N terms. */
let num1=0;
let N = prompt("Input the number of terms of fibnacco series:- ");
let num2=1;
console.log(num1);
console.log(num2);
let num3=0;
let i=2;
while (i<=N) {
    num3=num1+num2;
    console.log(num3);
    num1=num2;
    num2=num3;
    i=i+1;
}