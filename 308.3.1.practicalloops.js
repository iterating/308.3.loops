function fizzBuzz(range, match1, match2){
    if (typeof range !== 'number' || isNaN(range) || range <= 0 || !Number.isInteger(range)) {
        console.error("Select a positive integer for the range");
        return;
    }
    if (typeof match1 !== 'number' || isNaN(match1) || match1 <= 0 || !Number.isInteger(match1)) {
        console.error("Argument match1 must be a positive integer.");
        return;
    }
    if (typeof match2 !== 'number' || isNaN(match2) || match2 <= 0 || !Number.isInteger(match2)) {
        console.error("Argument match2 must be a positive integer.");
        return;
    }    
    for (let i = 1; i <=range; i++) {
        if (i % match1 == 0 && i % match2 == 0){
            console.log(`FizzBuzz`)
        } else if (i % match1 == 0){
            console.log(`Fizz`)
        } else if (i % match2 == 0){
            console.log(`Buzz`)
        } else {console.log(i); 
        }
    }
}
fizzBuzz(100, 3, 5)

