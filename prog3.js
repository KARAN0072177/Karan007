/* Program to calculate the sum of the digits of a number inputed by the user.*/
let number=prompt("Input the number: ");
let temp=number;
let sum=0;
while (temp>0) {
    let n=temp%10;
    sum=sum+n;
    temp=temp/10;
}
console.log(" ");
console.log("The sum of the digits of "+number+" is "+sum);