// Write an arrow function that checks to see if a user is older than 18.

const isOlderThan18 = age => age == 18 ? "You are good to go!" : "Sorry!You must be 18 or older"

console.log(isOlderThan18(16))

//Write an arrow function that checks to see if it is currently raining.

const israining = rain => rain== "rain" ? "Get your rain jacket!" : "No rain on today's forecast!"

console.log(israining("Sunny"))

//Write an arrow function that checks to see if a number is even.
const isEven = num => num %2 ==0 ? "That's an even number!" : "That's an odd number!"
console.log(isEven(7))

//Write an arrow function that takes in two parameters and checks whether one number is greater than another.

const greaterNum =(num1,num2)=> (num1!=num2 && num1 > num2 )? `${num1}  is more than ${num2}` : `${num1}  is less than ${num2}`

console.log(greaterNum(9,8))
console.log(greaterNum(5,8))
