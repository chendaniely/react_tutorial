// primitive types
// will do copies
const number = 1;
const num2 = number; //creates a copy of number

// objects and arrays are reference types
// pointers will be copied
const person = {
  name: 'Dan'
};

const secondPerson = person;
console.log(secondPerson); // Dan

person.name = 'Eric'
console.log(secondPerson); // Eric
// change person also changes second person

// use spread operator to create a copy
const copyPerson = {
  ...person
};
person.name = 'Julia'
console.log(copyPerson); // Stays "Eric", does not change to Julia
