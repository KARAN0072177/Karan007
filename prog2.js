/* Program to give the grade to the student according the marks earned*/
let marks = prompt("Enter marks: ");
let grade;
if (marks>=90 && marks<=100) {
    grade='A+';
}
else if (marks>=80 && marks<90) {
    grade='A';
}
else if (marks>=60 && marks<80) {
    grade='B';
}
else if (marks>=40 && marks<60) {
    grade='C';
}
else if (marks>=30 && marks<40) {
    grade='D';
}
else if (marks>=0 && marks<30) {
    grade='F';
}
else
{
    grade='0';
}
console.log("");
console.log("The Grade obtained by student at "+marks+" is "+grade+".");