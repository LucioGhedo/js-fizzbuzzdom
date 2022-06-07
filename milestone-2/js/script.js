const numbersContainer = document.getElementById('numbers-container');

for(let i = 0; i <= 100; i++) {
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
    const newBox = `<ul>${fizzBuzz}</ul>`;
    numbersContainer.innerHTML += newBox;
}
