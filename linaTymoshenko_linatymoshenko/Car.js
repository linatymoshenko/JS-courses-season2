function Car(brand, fuelTank, ownerFullName) {
  this.brand = brand;
  this.fuelTank = fuelTank;
  this.ownerFullName = ownerFullName;

  this.getBrand = () => this.brand;
  this.getFuelTank = () => this.fuelTank;
  this.getOwnerFullName = () => this.ownerFullName;
}

let car = new Car("BMW", 2, "Harry Potter");

console.log(car.getBrand());
console.log(car.getFuelTank());
console.log(car.getOwnerFullName());
