// 10.    Create a function that displays a pattern like this:
// * * * * *
// * * * * *
// * * * * *
// * * * * *


// let string = "";

// function displayPattern(n) {
//     for (let i = 1; i <= n; i++) {
//         for (let j = 0; j < n +1; j++) {
//             string += "*";
//         }
//         string += "\n"; 
//     }
//     return string;
// }

// displayPattern(4);
// console.log(string);


// 11.    Create a function that displays a pattern like this:
// 1 1 1 1 
// 1 1 1
// 1 1 
// 1

// let emptyString = ''
// function displayPatternOfNumber(n){
//     for (let i = 0; i <= n; i++) {
//         for (let j = 0; j < n-i; j++) {
//             emptyString += "1";
//         }
//         emptyString += "\n"; 
//     }
//     return emptyString;
// }


// displayPatternOfNumber(4)
// console.log(emptyString)


// 12.    Create a function that displays a pattern like this:
// 1 1 1 1 
// 1 1 1 0  
// 1 1 0 0  
// 1 0 0 0

// function displayPattern() {
//     for (let i = 4; i >= 1; i--) {
//         let row = "";
//         for (let j = 1; j <= 4; j++) {
//             if (j <= i) {
//                 row += "1 ";
//             } else {
//                 row += "0 ";
//             }
//         }
//         console.log(row);
//     }
// }
// displayPattern();

let emptyString = '';

function displayPatternOfBinaryNumber(n) {
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            emptyString += "1";
        }
        for (let x = 0; x <= i-1; x++) {
            emptyString += "0";
        }
        emptyString += "\n";
    } 
    return emptyString;
}

displayPatternOfBinaryNumber(4);
console.log(emptyString);

// 13.    Create a function that displays a pattern like this:
// 1 1 1 1 1
// 1 0 0 0 1
// 1 0 0 0 1
// 1 0 0 0 1
// 1 1 1 1 1


// let emptyString = '';

// function displayPatternOfBinaryNumber(n) {
//     for (let i = 0; i <= n; i++) {
//         // for (let j = 0; j < n - i; j++) {
//             emptyString += "1";
//         // }
//         // for (let x = 0; x <= i; x++) {
//         //     emptyString += "0";
//         // }
//         emptyString += "\n";
//     } 
//     return emptyString;
// }

// displayPatternOfBinaryNumber(4);
// console.log(emptyString);
// 14.    Create a function that displays a pattern like this:
//       1 
//     1
//   1 
// 1

// 15.    Given an array like this:
// var array = [1,3,4,3,7,8,0,12,19];    
// Create a function to reverse the order of the elements inside the given array.

// 16.    Given an array like this: 
// var some numbers = [3,4,8,2,1,2,2,6,3,4];
// a.    Create a function to sort and arrange these elements of the array in ascending order.
// b.    Modify the first array to make sure that it will also display the last 3 numbers and the first 3 numbers in front of the sorted array
// c.    From the same sorted array, also display the first 3 numbers.
// 17.    Create a function that determines the age classification of people:
// Bellow are classifications according to specific conditions:
 
//     MIMICRY:             0 - 12
//     SELF-DISCOVERY:     13 - 19
//     COMMITMENT:         20 - 45
//     LEGACY:            46 - Above

// 18.    Create a function that calculates the BMI of a person and returns the specific classification of a person according to the height and weight provided by a user.
//     How to calculate Body Mass Index:
//     BMI = weight(kg) / (height(m) x height(m))