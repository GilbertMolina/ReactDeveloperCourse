const add = function (a, b) {
  console.log(arguments);
  return a + b;
}

// console.log(add(1, 2));

const addArrow = (a, b) => {
  // console.log(arguments);
  return a + b;
}

// console.log(add(1, 2));

const user = {
  name: 'Gilbert',
  cities: ['Cartago', 'San José', 'Heredia'],
  printPlacesLived: function () {
    const that = this;

    this.cities.forEach(function (city){
      console.log(that.name + ' has lived in ' + city);
    });
  }
};

// user.printPlacesLived();

const userUsingArrow = {
  name: 'Gilbert',
  cities: ['Cartago', 'San José', 'Heredia'],
  printPlacesLived() {
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    });
  }
};

// userUsingArrow.printPlacesLived();

const userUsingMap = {
  name: 'Gilbert',
  cities: ['Cartago', 'San José', 'Heredia'],
  printPlacesLived() {
    return this.cities.map(city => this.name + ' has lived in ' + city);
  }
};

// console.log(userUsingMap.printPlacesLived());

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply (){
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());

