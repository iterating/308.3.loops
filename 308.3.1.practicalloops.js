function fizzBuzz(range, match1, match2){
    function validateParams(param){
        if (typeof param !== 'number' || isNaN(param) || param <= 0 || !Number.isInteger(param)) {
        throw new Error("Select positive integers for the parameters")
        }
    }
    try {
        validateParams(range);
        validateParams(match1);
        validateParams(match2);

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
    } catch (err){
        console.error(err.message)
    }
}   

fizzBuzz(100, 3, 5)

