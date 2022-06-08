for(let i = 1; i <= 100; i++) {
    let fizzBuzz;
    if(i % 3 === 0 && i % 5 === 0) {
        fizzBuzz = 'FizzBuzz';
    } else if (i % 5 === 0) {
        fizzBuzz = 'Buzz';
    } else if (i % 3 === 0) {
        fizzBuzz = 'Fizz';
    } else {
        fizzBuzz = i;
    }

    console.log(fizzBuzz);
}
