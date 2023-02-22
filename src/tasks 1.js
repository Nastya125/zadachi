// task 1
function vowelCounter (str) {
    let counter = 0;

    for (let value of str) {

        if (value.includes("e")) {
            counter++;
        } 
        if (value.includes("E")) {
            counter++;
        }

        if (value.includes("a")) {
            counter++;
        } 
        if (value.includes("A")) {
            counter++;
        } 

        if (value.includes("i")) {
            counter++;
        } 
        if (value.includes("I")) {
            counter++;
        } 

        if (value.includes("o")) {
            counter++;
        }
        if (value.includes("O")) {
            counter++;
        }

        if (value.includes("y")) {
            counter++;
        } 
        if (value.includes("Y")) {
            counter++;
        } 
    }
    return counter
}

console.log(vowelCounter ("hello"))
console.log(vowelCounter ("Hi, how are you?"))
console.log(vowelCounter ("javascript"))


// task 2

function changeA (str) {

    let newStr = str.replace(/a/gi, "#")

    return newStr
}

console.log(changeA ("apple"))
console.log(changeA ("Hi, how are you?"))
console.log(changeA ("javascript"))


// task 3

function upperCase (str){
    let newStr = str.replace(str[0], str[0].toUpperCase())

    for(let i = 0; i < newStr.length; i++) {
        if (newStr[i] === " ") {
            newStr = newStr.replace(newStr[i+1], newStr[i+1].toUpperCase())
        }
    } 
    return newStr

}

console.log(upperCase ("hello world"))
console.log(upperCase ("hi, how are you?"))
console.log(upperCase ("javascript is fun"))