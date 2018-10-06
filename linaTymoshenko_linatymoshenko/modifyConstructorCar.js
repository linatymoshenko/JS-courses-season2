const DEFAULT_OWNER_FULL_NAME = "John Doe";

function Car(brand, fuelTank, ownerFullName = DEFAULT_OWNER_FULL_NAME) {
  this.brand = brand;
  this.fuelTank = fuelTank;
  this.ownerFullName = DEFAULT_OWNER_FULL_NAME;

  if (ownerFullName.indexOf(" ") > -1) {
    this.ownerFullName = ownerFullName;
  }

  let [firstName, lastName] = this.ownerFullName.split(" ");
  this.getFirstNamePart = () => firstName;
  this.getSecondNamePart = () => lastName;
}

let car = new Car("BMW", 2);

console.log(car.getFirstNamePart());
console.log(car.getSecondNamePart());
