// function fizzBuzz(range, match1, match2){
//     function validateParams(param){
//         if (typeof param !== 'number' || isNaN(param) || param <= 0 || !Number.isInteger(param)) {
//         throw new Error("Select positive integers for the parameters")
//         }
//     }
//     try {
//         validateParams(range);
//         validateParams(match1);
//         validateParams(match2);

//     for (let i = 1; i <=range; i++) {
//         if (i % match1 == 0 && i % match2 == 0){
//             console.log(`FizzBuzz`)
//         } else if (i % match1 == 0){
//             console.log(`Fizz`)
//         } else if (i % match2 == 0){
//             console.log(`Buzz`)
//         } else {console.log(i); 
//             }
//         }
//     } catch (err){
//         console.error(err.message)
//     }
// }   

// fizzBuzz(100, 3, 5)




// prime time

function findNextPrime(n) {
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
}
findNextPrime(15);

// Part 3: Feeling Loopy

function parseCSV(input) {
// Each row will be an array of strings. The table will be an array of rows (2d array)
    let selectCell = '';
    let selectRow = [];
    let csvRows = [];

// Loop through each character and put it into the row array, delimited by ","
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
            i++;
        default: 
            // add each character to the selected cell 
            selectCell += selected;
            break;
        }
    }
// Render the table
    console.log(csvRows)
}

// Example CSV string
input = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
parseCSV(input);
