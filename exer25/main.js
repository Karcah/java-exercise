

const  numbers = [1, 2, 3, 4, 5];

const allnumbers = [ ...numbers, 6, 7, 8, 9, 10 ];

console.log(allnumbers);



function sum(...numbers) {
    return numbers.reduce((total, current) => total + current, 0);
}

console.log(sum(1, 2, 3, 4, 55)); 