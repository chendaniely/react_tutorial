// using an arrow function for a method (ES7)
// means you no longer need to use the `this` keyword
// in jsbin you need to change "Javascript" to "ES6/Babel"

class Human {
  gender = 'male';
  
  printGender = () => {
    console.log(this.gender);
  }
}

class Person extends Human{
  name = 'Dan';

  printMyName = () => {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();
