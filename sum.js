// 1.    Create a function that returns the sum of 2 numbers

function sum(a, b) {
   let sum = a + b;
   console.log(sum);
}
sum(1, 2);
 

// 2.    Create a function that returns the product of 2 numbers

function product(a, b) {
    let product = a * b;
    console.log(product);
}
product(4, 2);

// 3.    Create a function that returns the difference of 2 numbers

function difference(a, b) {
    let difference = a - b;
    console.log(difference);
}
difference(7, 2);

// 4.    Create a function that returns the division of 2 numbers. 

function division(a, b) {
    let division = a / b;
    console.log(division);
}
division(8, 2);

// 5.    Create a function that receives an array and returns the sum of all the elements inside that array.

let arr = [1,2,3,5]
let sumArr = 0;
function sumArrayy(arr){
    for (let i = 0; i < arr.length;i++){
         sumArr += arr[i]
        }
}
sumArrayy(arr)
console.log(sumArr);


// 6.    Create a function that receives an array and returns the greatest value inside that array

let greatestValue = arr[0]
function greaterNumber(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > greatestValue) {
            greatestValue = arr[i];
        }
        
    }
    console.log(greatestValue);
}

greaterNumber(arr)


// 7.    Create a function that receives an array and returns the smallest number from that array

let smallNumber = arr[0]    
function smallestNumber(arr){
    for (let i = 0; i< arr.length; i++) {
        if (arr[i] < smallestNumber){
            smallNumber = arr[i];
        }
    }
    console.log(smallNumber);
}
smallestNumber(arr)


// 8.    Create a function that receives an array of numbers and returns the average of the numbers
let sumAv = 0;
let avrg ;
function averageNumber(arr){
    for (let i = 0; i < arr.length; i++){
        sumAv = sumAv + arr[i]
    }
    return avrg = sumAv / arr.length
}
averageNumber(arr)
console.log(avrg)

// 9.    Create a function that combines two arrays into one single array. 
//     Use the following arrays:
   let arrange = ['a','b','c','d']
    let array  = ['e','f','g'];
    let newArray;

    function addTwoArray(arr1,arr2) {
        newArray = arr1.concat(arr2);
        return newArray;
    }

    addTwoArray(arrange,array)
    console.log(newArray)