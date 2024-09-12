<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        /* Program to calculate the sum of the digits of a number input by the user. */
        let number = prompt("Input the number: ");
        let temp = number;
        let sum = 0;
        
        while (temp > 0) {
            let n = temp % 10; 
            sum += n;  
            temp = Math.floor(temp / 10);  // Remove the last digit using math.floor function
        }
        
        console.log(" ");
        console.log("The sum of the digits of " + number + " is " + sum);
    </script>
</body>
</html>
