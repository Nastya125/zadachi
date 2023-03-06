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

// variant 1
function check(arr, b) {
    const result = [];
    for (let i=0; i<arr.length; i++){
        for (let j = i+1; j < arr.length; j++){
            if (arr[i]+arr[j] === b){
                result.push(i);
                result.push(j);
            }

        }
    }
    if (result.length>0) {
        return true;
    } else { 
        return false;
    }
}

console.log(check([10, 15, 3, 7], 17)) // true
console.log(check([10, 15, 3, 7], 20)) // false

// variant 2
function check2(arr, b) {
    const numObj = {};
    for (let i=0; i<arr.length; i++){
        numObj[arr[i]] = i;
    }

    for (let i=0; i<arr.length; i++){
        const diff = b - arr[i];

        if (numObj[diff] && numObj[diff] !== i){
            return true
        } else { 
            return false;
        }
    }
}
console.log(check2([10, 15, 3, 7], 17)) // true
console.log(check2([10, 15, 3, 7], 30)) // false


// task 4

function sumDigits(num) {
    numToString = String(num);
    let sum = 0;
    for (let i=0; i<numToString.length; i++){
        sum += +numToString[i];
    }
    return sum
}

console.log(sumDigits(123))   // 6
console.log(sumDigits(904)) // 13


// task 5

function fulter(a, b, c) {
    const arr = [];
    for(let i=a; i<=b; i++){
        if(i % c === 0){
            arr.push(i)
        }
    }
    return arr;
}

console.log(fulter(5, 15, 3)) // [6, 9, 12, 15]

// task 6

function pal(str) {
    const reverseStr = str.split('').reverse().join('');
    if(str === reverseStr){
        return true
    } else {
        return false
    }
}

 console.log(pal('топот')) // true
 console.log(pal('Колобок')) // false

 // task 7

 function getMaxEvenElement(arr) {
    const newArr = [];
    for(let i=0; i< arr.length; i++){
        if(i % 2 === 0){
            newArr.push(arr[i]);
        }
    }
    return Math.max.apply(null, newArr);
}

console.log(getMaxEvenElement([5, -7, -1, 12, 3, 0])) // 5
console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])) // 31


 // task 8

function encode(str) {

}

function decode(str) {

}


console.log(encode('hello')) // h2ll4
console.log(decode('h2ll4')) // hello