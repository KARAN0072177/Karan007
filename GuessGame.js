/* Guess the number game. */
let r = Math.random()*100;
const imposter=Math.trunc(r);
console.log("Welcome to Guess the number game.\nYou have to guess the number between 0-100.\nCounts will be recorded..!\n\n");
let guess=prompt("Number is generated..\nKindly Guess the number below:-\n: ");
let pop = false;
let count=0;
while(pop==false)
{
    guess = prompt(": ");
    if (guess<imposter && guess>=0) {
        console.log("\nNumber is Greater then this!!\nGuess Again or press -1 to quit the game..\n\n");
        pop=false;
        count=count+1;
    }
    else if (guess>imposter) {
        console.log("\nNumber is lesser then this!!\nGuess Again or press -1 to quit the game..\n\n");
        pop=false;
        count=count+1;
    }
    else if (guess==imposter) {
        count=count+1;
        console.log("Congrats!!\nYou guessed the right answer. The imposter number was "+imposter);
        console.log("Counts taken : "+count);
        pop=true;
    }
    else 
    {
        console.log("Sorry!!\nYou lost the game..\nThe imposter number was "+imposter);
        console.log("Counts taken : "+count);
        pop=true;
    }
}