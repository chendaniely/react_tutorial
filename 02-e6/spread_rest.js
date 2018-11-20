// spread rest operator use `...`

// spread:
// split up array eleemnts or object properties

// spread on a list
const numbers = [1, 2, 3];
const newNumbers = [numbers, 4];
const newNumbers_dots = [...numbers, 4];

console.log(newNumbers);
console.log(newNumbers_dots);

// [[1, 2, 3], 4]
// [1, 2, 3, 4]

// spread in an object
const person = {
  name: 'Dan'
};

const newPerson = {
  ...person,
  age:29
};

console.log(newPerson)

// [object Object] {
//   age: 29,
//   name: "Dan"
// }



// rest:
// merge a list of function arguments into an array
// like the python *args

const filter = (...args) => {
  // return only values if value is 1
  return args.filter(el => el === 1); // === checks for type and value
}

console.log(filter(1, 2, 3));

// [1]
