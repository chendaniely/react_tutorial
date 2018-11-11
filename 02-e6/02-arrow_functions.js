function printName(name) {
  console.log(name)
}

printName('Dan');


const printName2 = (name) => {
  console.log(name)
}

printName2("Dan");


const printName3 = name => {
  console.log(name)
}

printName2("Dan");


const printName4 = () => {
  console.log('Dan')
}

printName4();

const printName5 = (name, age) => {
  console.log(name, age)
}

printName5('dan', 29);

const dbl_num = (number) => {
  return number * 2;
}
console.log(dbl_num(24))

const dbl_num2 = (number) => number * 2;
console.log(dbl_num2(24))
