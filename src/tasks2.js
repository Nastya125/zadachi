// task 1 
function numbers (array) {
    const arr = array
    const newArr = []
    for (let i=0; i < arr.length; i++){

        if (arr[i] === arr[i+1] - 1 || arr[i] === arr[i-1] + 1) { 
            newArr.push(arr[i])
        }

    }
    return newArr
}

console.log(numbers([1,2,3,4,7]))


// task 2

function countFibo(num) {
    if(num == 0){
      return 0
    }
    i1 = 0 // 0
    i2 = 1 // 1 
    function mult(num1,num2){
      i1 = i2 
      console.log(i1)
      return num1 + num2
    }
    for(let count = 0; count < num-1;count++){
      i2 = mult(i1,i2) //1 , 1 
    }
    return i2
  }
  const result = countFibo(10)
  
  console.log(result)


  // task 3

function reverse (array) {
    const newArr = array.reverse()
    return newArr
}

console.log(reverse([1,2,3,3,4]))
