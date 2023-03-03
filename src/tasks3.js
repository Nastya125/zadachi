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


// task 3