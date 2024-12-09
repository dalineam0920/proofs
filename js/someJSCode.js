let myAge = 20; //my age
let earlyYears = 2; //changeable

earlyYears *= 10.5; //multiply the value
let laterYears = myAge - 2;

laterYears *= 4;
console.log(myAge, earlyYears, laterYears);

let myAgeInDogYears = myAge + laterYears;

let myName = 'Daria'.toLowerCase(); // returns a string with all lowercase letters.

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);


//another one

const kelvin = 0; //The forecast today is 293 Kelvin.
const celsius = kelvin - 273; //celsius 273 degrees less than kelvin
let fahrenheit = celsius * (9/5) + 32; //Fahrenheit = Celsius * (9/5) + 32
fahrenheit = Math.floor(fahrenheit);//round down the Fahrenheit temperature.

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`); //the temperature in newton
