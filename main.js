// question 1 ----------
const greet = name => "Hi " + name + ", how are you?"
//console.log(greet("John"))

// question 2 ----------
let isEven = num => num%2 === 0
//console.log(isEven(8))

// question 3 -----------
let counterFunc = counter => {
    if (counter > 100) {
      counter = 0;
    } else {
      counter++;
    }
    
    return counter;
  }
//console.log(counterFunc(7))

// question 4 ----------
let nameAge = (name, age) => {
    console.log("Hello " + name);
    console.log("You are " + age + " years old");
  }
//nameAge("Clara", 29)

// question 5 ----------
let printOnly = () => console.log("printing")
//printOnly()

// question 6 ----------
let sum = (num1, num2) => num1 + num2
//console.log(sum(2, 4))





