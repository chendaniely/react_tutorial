// extract array elements or object properties and store them in variables
// spread takes out *all* elements
// similary to tuple unpacking and multiple assignment in python

// array destructuring
const numbers = [1, 2, 3];

[num1, num2] = numbers;
console.log(num1, num2);

// 1
// 2

[num1, , num3] = numbers;
console.log(num1, num3);

// 1
// 3

// object destructuring
// does not work on jsbin
{name} = {name: 'Dan', age:29};
console.log(name);
console.log(age); // undefined
