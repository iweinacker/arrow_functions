/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers (a, b) {
// //Code block
// return a + b;
// }
// let sum = addTwoNumbers(3, 5)
// console.log(sum)

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    //Code block
    return a + b;
    }
    let sum = addTwoNumbers(3, 5)
    console.log(sum)

    // Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(6, 4);
console.log(sum2);

// Implicit Returns

const saySomething = message => console.log(message);
saySomething('Hello there');

const sayHello = () => console.log('Hello');
sayHello();
// Returning Multiple Lines

const retunrMultipleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
)
console.log(retunrMultipleLines());


//No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("second array:", arr2);
console.log("second array:", arr2);


//Copying an Array

let arr3 = [4, 5, 6];
let arr4 = [...arr3];

arr4.push(7);
console.log("Thirth array:", arr3);
console.log("Fourth array:", arr4);

//copying an object

let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d: 4};
let obj3 = {...obj1, b: 5};
console.log('First Object:', obj1);
console.log('Second Object:', obj2);
console.log('Thirth Object:', obj3);

//Copyin only part of an array/object
let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"];
console.log(arr5);

//Regular function call
const sumAll = (a, b ,c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log("sum:", sum);

// Function using...rest 
const sumRest = (a, b ,c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }

    return sum;
}
let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log("sum3", sum3);


//Destructuring arrays
let ages = [30, 26, 27];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

//Destructuring objects
let jobs = {
    mike: "desinger",
    jill: "developer",
    alicia: "accountant", 
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

//Destructuring subsets

let languages = [ "english", "french", "spanish", "germa", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

console.log(, , maryNative, marSecondary);
console.log(maryNative, marSecondary); 
//each ",""," for the first parameters

let languages2 = {
    firstLanguage: "english",
    secondanguage: "french",
    thirthLanguage: "spanish",
    fourthLanguage: "german",
};
let {firstLanguage, thirthLanguage} = languages2;
console.log(firstLanguage, thirthLanguage)

//using rest parameter syntax

let fruits = ["apple", "onratechange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak"
};
let {brian, anna, ...rest} = favoriteFoods;

