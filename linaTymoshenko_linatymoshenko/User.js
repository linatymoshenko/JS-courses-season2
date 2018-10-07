let user = {};

Object.defineProperties(user, {
  name: {
    value: "John Doe"
  },

  age: {
    value: 30
  },

  profession: {
    value: "doctor"
  },

  userInfo: {
    get: () => `My name is ${user.name}. I am ${user.age} years old. I am a ${user.profession}.`
  },

  businessCard: {
    get: () => (new BusinessCard(user.name, user.profession))
  }
});

function BusinessCard(name, profession) {
  this.name = name;
  this.profession = profession;
}

user.getUserInfo = function (property) {
  return this[property];
};

console.log(user.userInfo);
console.log(user.businessCard);
console.log(user.name);
console.log(user.age);
console.log(user.profession);
console.log(user.getUserInfo("name"));