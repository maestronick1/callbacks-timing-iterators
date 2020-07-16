function greeting(name, callback) {
    let sentence = 'hello my name is ' + name + ".";

    let otherSentence = callback();
}

function anotherGreeting(){
    let sentence = " i forgot, my last name"

    return sentence;

}

let myName = 'Rome';
console.log(greeting(myName, anotherGreeting))

function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        let number = array[i];

        console.log(number);
    }
}
const numbersArray = [1,2,3,4,5,9,8,7,6];
printArray(numbersArray, printArrayAgain);

function calculator = (num1, num2, callbackOne, callbackTwo) => {
    let result = callbackOne(num1, num2) + callbackTwo(num1, num2)

    return result;
}

addNumbers = (num1, num2) => {
    let result = num1 + num2
git
    return result;
}

subtractNumbers = (num1, num2) => {
    let result = num1 - num2

    return result;
}

console.log(calculator(5, 77, addNumbers, subtractNumbers))