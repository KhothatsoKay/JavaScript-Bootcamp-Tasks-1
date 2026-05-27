// Exercise 1: Temperature Check 

let temperature = 20;

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}

// Temperature Check using switch

switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature >= 16 && temperature <= 25):
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");
}

// Exercise 2: Divisibility Check using if else

let number = 12;

if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

// Divisibility Check using switch

switch (true) {
    case (number % 2 === 0 && number % 3 === 0):
        console.log("Divisible by both.");
        break;
    case (number % 2 === 0):
        console.log("Divisible by 2.");
        break;
    case (number % 3 === 0):
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
}

// Exercise 3

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("Sum:", sum);

const numbers1 = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}

const numbers2 = [3, 7, 2, 5, 10, 6];

let largest = numbers2[0];

for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largest) {
        largest = numbers2[i];
    }
}

console.log("Largest Number:", largest);

// Exercise 4

let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

let even = 2;

while (even <= 20) {
    console.log(even);
    even += 2;
}

let total = 0;
let j = 1;

while (j <= 100) {
    total += j;
    j++;
}

console.log("Total:", total);

let multiple = 5;

while (multiple < 50) {
    console.log(multiple);
    multiple += 5;
}

// Exercise 5

let count = 1;

do {
    console.log(count);
    count++;
} while (count <= 10);

let totalSum = 0;
let k = 1;

do {
    totalSum += k;
    k++;
} while (k <= 100);

console.log("Total Sum:", totalSum);



let userInput;

do {
    userInput = prompt("Enter a number greater than 10:");
} while (userInput <= 10);


let secretNumber = 7;
let guess;

do {
    guess = prompt("Guess a number between 1 and 10:");
} while (Number(guess) !== secretNumber);

console.log("Correct! You guessed the number.");