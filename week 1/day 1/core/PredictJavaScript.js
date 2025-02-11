const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [, otherRandomCar] = cars
//Predict the output
console.log(randomCar) //output: 'Tesla' => cars is an array and random car is the index 0
console.log(otherRandomCar) // output : 'Mercedes ' => otherRandomCar is the second item in the array 

//****************************************************

const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const {...employeeName{otherName}} = person
//Predict the output
console.log(otherName);//output : undefined 
console.log(employeeName)// output : error => we can not reassign the value of the key employeeName:otherName



