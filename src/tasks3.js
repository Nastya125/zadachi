// task 1
function printHill(lines) {
    for (let i=0; i<=lines; i++){
        console.log("#".repeat(i))
    }
}

printHill(5)

// task 2
function calculate(arr) {
    const numbers = arr.filter(number => number > 0 && number % 1 == 0 && number % 2 != 0)
    
    let sum = 0;

    for (let i=0; i<numbers.length; i++){
        sum += numbers[i];
    }

    return sum
}

console.log(calculate([1, 2, 3, 4, 1, 15])) 

// task 3
function check(arr, b) {
    
}