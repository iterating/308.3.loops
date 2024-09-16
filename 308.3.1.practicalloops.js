// Part 1: Fizz Buzz
console.log(`Part 1: Fizz Buzz`)

function fizzBuzz(range, match1, match2){
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




// Pt 2: Prime time
console.log(`Pt 2: Prime Time`)

function findNextPrime(n) {
    //limit n to a number from -100 t0 1,000,000
    function validateArgs(n){
        if (typeof n !== 'number' || isNaN(n) || !Number.isInteger(n) || n >= 1000000 || n < 0 ) {
        throw new Error("Select an integer from 0 to 1,000,000 for the parameters")
        }
    }

try {
    validateArgs(n);

    function checkPrime(num) {
        if (num < 2) {
            return false;
        }
        //2 and 3 are prime
          if (num === 2 || num === 3) {
            return true;
          }
          if (num % 2 === 0 || num % 3 === 0) {
            return false;
          }
          for (let i = 5; i * i <= num; i+= 6) {
            if (num % i === 0 || num % (i + 2) === 0) {
              return false;
            }
          }
          return true;
        }
        while (true) {
            if (checkPrime(n)) {
                console.log(`The next prime number is: ${n}`);
                break; 
            } n++;
        }
    } catch (error){
        console.error(error.message)
    }
}

findNextPrime(15);
findNextPrime(10.4);
findNextPrime(-200);


// Part 3: Feeling Loopy
console.log(`Pt 3: Feeling Loopy`)

function parseCSV(input) {
    function validateArgs(input){
        if (typeof input !== 'string') {
            throw new Error('Malformed data. Is it in CSV format?')}
        }
    // Each row will be an array of strings. The table will be an array of rows (2d array)
    validateArgs(input);
    let selectCell = '';
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
                    // push last cell that isnt delimited
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
                    // push last row that isnt delimited
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