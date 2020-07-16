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

//super hero function

function superHero(power1, power2) {
    let allsuperPowers = superpowerOne + 'and' + superPowerTwo();

    return allsuperPowers;

    function superSpeed(){
        let power = " run fast"

        return power;

    }
    function superspin()
    let spin = ' i can spin 1000 mph';
     return spin;

}
console.log (sonic(super-speed, superSpin));

function blastOff() {
    let num = 0;

    for(let i = 10; i >= num; i--) {
        console.log(i); // 10, 9, 8, 7, 6, 5, ..
    }
    console.log("blast off!")
} 
     setTimeout(blastOff, 5000 ;)

     function sayName(){
         let num =0;
         for(let i=10; i>= num; i--0 {
             console.log(i);         })

         }
console.log(sayName("Nick P!"))
    
setTimeout(blastOff, 7000) ;
 
//correction

function sayName(name)
    console.log(name):

let myNameTwo = 'Nick';
setTimeout(function(){
    printname(mayNameTwo);
}, 7000);


