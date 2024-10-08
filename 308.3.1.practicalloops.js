// Part 1: Fizz Buzz
console.group(`Part 1: Fizz Buzz`)

function fizzBuzz(range, match1, match2){
    //limit n to positive integers
    function validateArgs(param){
        if (typeof param !== 'number' || isNaN(param) || param <= 0 || !Number.isInteger(param)) {
        throw new Error("Select positive integers for the range, divisible by match1, and divisible by match2 parameters")
        }
    }
    try {
        validateArgs(range);
        validateArgs(match1);
        validateArgs(match2);

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
    } catch (error){
        console.error(error.message)
    }
}   
fizzBuzz(100, 3, 5)

console.groupEnd()

// Pt 2: Prime time
console.group(`Pt 2: Prime Time`)

function findNextPrime(n) {
    // Limit n to integers from 0 to 1,000,000 for performance
    function validateArgs(n) {
        if (typeof n !== 'number' || isNaN(n) || !Number.isInteger(n) || n >= 1000000 || n < 0) {
            throw new Error("Select an integer from 0 to 1,000,000 for the parameter");
        }
    }

    // Function to check if a number is prime
    function isPrime(num) {
        if (num < 2) return false; // 0 and 1 are not prime
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    try {
        validateArgs(n);
        let nextCandidate = n + 1;
        // Look ahead to next number while isPrime isn't true
        while (!isPrime(nextCandidate)) {
            nextCandidate++;
        }
        console.log(`The next prime number is: ${nextCandidate}`);
        return nextCandidate;
    } catch (error) {
            console.error(error.message);
        }
}
// Test the function
findNextPrime(0);  // Output: The next prime number is: 2
findNextPrime(2);  // Output: The next prime number is: 3
findNextPrime(15);  // Output: The next prime number is: 17
findNextPrime(33515);  // Output: The next prime number is: 33521



console.groupEnd()
// Part 3: Feeling Loopy
console.group(`Pt 3: Feeling Loopy`)

function parseCSV(input) {
    function validateArgs(input){
        if (typeof input !== 'string') {
            throw new Error('Malformed data. Is it in CSV format?')}
        }
    // Each row will be an array of strings. The table will be an array of rows (2d array)
    validateArgs(input);
    let selectCell = [];
    let selectRow = [];
    let csvRows = [];
    // Loop through each character and put it into the row array, delimited by ","
    try {
        for (let i = 0; i < input.length; i++) {
            let selected = input[i];
            switch (selected){
                // "," delimits a cell, push cell into row and start a new one
                case ',':
                    // push character to row array
                    selectRow.push(selectCell);
                    // reset the cell select
                    selectCell = '';
                    // push last cell that isn't delimited
                    if (selectCell.length > 0 ) {
                        selectRow.push(selectCell);
                    }
                    break;
                case '\n':
                    // \n delimits a new row
                    if (input[i] == '\n') {
                    // push cell into row array
                    selectRow.push(selectCell);
                    // push rows into array of all rows
                    csvRows.push(selectRow);
                    // reset the cell and row select
                    selectCell = '';
                    selectRow = [];
                    // push last row that isn't delimited
                    if (selectRow.length > 0 ) {
                        csvRows.push(selectRow);
                    }
                }
                break;
            default: 
                // add each character to the selected cell 
                selectCell += selected;
                break;
            }
        }
    // Render the table
        console.log(csvRows)

    } catch (error) {
        console.error(error.message);
    }
}

// Example CSV string
input = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
parseCSV(input);

console.groupEnd()