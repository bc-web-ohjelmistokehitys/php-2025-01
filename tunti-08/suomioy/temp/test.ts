console.log('RUNNING');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
what we want to do:

- take all even numbers
- multiply them by 10
- calculate the sum of

SUM OF THE EVEN NUMBERS * 10 IS THE FINAL RESULT
*/

// no functional style allowed

let sum1 = 0;
for (const number of numbers) {
    if (number % 2 === 0) {
        sum1 = sum1 + number * 10;
    }
}

// functional way

// functions as first class citizens

const returnsFunc = () => {
    return () => {
        return 'foo';
    };
};

const isEven = (n: number) => n % 2 === 0;

const sum2 = numbers
    .filter(isEven)
    .map((number) => number * 10)
    .reduce((previous, current) => previous + current, 0);

console.log('SUM', sum1);
console.log('SUM', sum2);
