// Object destructuring

// const person = {
//   name: 'Gilbert',
//   age: 29,
//   location: {
//     city: 'Cartago',
//     temp: 14
//   }
// };

// const {name = "Anonynous", age: edad} = person;
// const {location: {city, temp}} = person;

// console.log(`${name} is ${edad}`)
// console.log(`It's ${temp} in ${city}`)

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { publisher: {name: publisherName = 'Self-Published'} } = book;

// console.log(publisherName)

// Array destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

// const [, city = 'New York', state, zip] = address;

// console.log(`You are in ${city}`);

// const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

// const [itemName, , mediumPrice] = item;

// console.log(`A medium ${itemName} costs ${mediumPrice}`);