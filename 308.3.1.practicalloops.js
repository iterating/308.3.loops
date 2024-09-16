function fizzBuzz(range, match1, match2){
    for (i = 1; i <=range; i++) {
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