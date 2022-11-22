// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Знайти суму та кількість позитивних елементів.

const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let numbers = 0;
const sum = arr.filter(item => item > 0).reduce((accumulator, item) => {
    accumulator += item;
    numbers++;
    return accumulator
}, 0)
console.log(`quantity = ${numbers}; sum = ${sum}`)

//     Знайти мінімальний елемент масиву та його порядковий номер.

const minNumber = arr.slice(0);
const minResult = Math.min(...minNumber)
const indexMinResult = minNumber.indexOf(minResult);
console.log(`Min number = ${minResult}; index = ${indexMinResult}.`)

//     Знайти максимальний елемент масиву та його порядковий номер.

const maxNumber = arr.slice(0);
const maxResult = Math.max(...maxNumber)
const indexMaxResult = maxNumber.indexOf(maxResult);
console.log(`Мax number = ${maxResult}; index = ${indexMaxResult }.`)

//     Визначити кількість негативних елементів.

const negativeNum = arr.reduce((acc,number) => {
    if (number < 0) {
        acc += 1;
    }
    return acc;
}, 0);
console.log(`Amount of negative items ${negativeNum}`)

//     Знайти кількість непарних позитивних елементів.

const positiveNum = arr.reduce((acc,number) => {
    if (number % 2 !== 0 && number > 0) {
        acc += 1;
    }
    return acc;
}, 0);
console.log(`Amount of positive items ${positiveNum}`);

//     Знайти кількість парних позитивних елементів.

const positiveNumbers = arr.reduce((acc,number) => {
    if (number % 2 === 0 && number > 0) {
        acc += 1;
    }
    return acc;
}, 0);
console.log(`Amount of positive items ${positiveNumbers}`);

//     Знайти суму парних позитивних елементів.

const sumNum = arr.reduce((acc,number) => {
    if (number % 2 === 0 && number > 0) {
        acc += number;
    }
    return acc;
}, 0);
console.log(`Sum of positive items ${sumNum}`);

//     Знайти суму непарних позитивних елементів.

const sumNumbers = arr.reduce((acc,number) => {
    if (number % 2 !== 0 && number > 0) {
        acc += number;
    }
    return acc;
}, 0);
console.log(`Sum of positive items ${sumNumbers}`);

//     Знайти добуток позитивних елементів.

const multNum = arr.reduce((acc,number) => {
    if (number > 0) {
        acc *= number;
    }
    return acc;
}, 1);
console.log(`Mult of positive items ${multNum}`);

//     Знайти найбільший серед елементів масиву, ост альні обнулити.

let maxArrNumber = 0;
const maxNumberArr = arr.map((number) => {
    if (number > maxArrNumber) {
        maxArrNumber = number;
    }
    return number;
}).map((number) => {
    if (number < maxArrNumber) {
        number = 0;
    }
    return number;
})
console.log(maxNumberArr);



