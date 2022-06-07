const numbersContainer = document.getElementById('numbers-container');

for(let i = 1; i <= 100; i++) {
    let fizzBuzz;
    let fizzBuzzClass;
    if(i % 3 === 0 && i % 5 === 0) {
        fizzBuzz = 'fizzbuzz';
        fizzBuzzClass = 'fizz-buzz'
    } else if (i % 5 === 0) {
        fizzBuzz = 'buzz';
        fizzBuzzClass = 'buzz'
    } else if (i % 3 === 0) {
        fizzBuzz = 'fizz';
        fizzBuzzClass = 'fizz'
    } else {
        fizzBuzz = i;
    }
    const newBox = `<ul class="box ${fizzBuzzClass}">${fizzBuzz}</ul>`;
    numbersContainer.innerHTML += newBox;
}
