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
