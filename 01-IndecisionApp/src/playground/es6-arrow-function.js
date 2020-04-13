const square = function (x){
  return x * x;
}

const squareArrow = x => x * x;

console.log(squareArrow(8));

const getFirstName = fullName => fullName.split(' ')[0];

console.log(getFirstName('Gilbert Molina'));

const getFirstNameWithBody = fullName => {
  return fullName.split(' ')[0];
}

console.log(getFirstNameWithBody('Gilbert Molina'));