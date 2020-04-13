var nameVar = 'Gilbert';
var nameVar = 'Antonio';
console.log('nameVar', nameVar);

let nameLet = 'Joe';
nameLet = 'John';
console.log('nameLet', nameLet);

const nameConst = 'Mary';
console.log('nameConst', nameConst);

// Block scoping
var fullName = 'Gilbert Molina';

if (fullName) {
  let firstName = fullName.split(' ')[0];
  console.log('firstName', firstName);
}
