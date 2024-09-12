//  ------------- user input in node.js -------------


const readline = require('readline');

// Create an interface for I/O
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for input
rl.question('Enter the first number: ', (input1) => {
   
    // Convert the input to a number
    let num1 = parseFloat(input1);

    // Ask the user for input
    rl.question('Enter the second number: ', (input2) => {
        
        // Convert the input to a number
        let num2 = parseFloat(input2);

        let sum = num1 + num2;
        
        console.log('The sum of the two numbers is: ' + sum);

        // Close the readline interface
        rl.close();
    });
});
