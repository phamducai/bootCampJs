function Dog(name, breed, color, sex) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.sex = sex;
}

const theDog = new Dog("Gabby", "Lab", "chocolate", "female");
console.log(theDog.toString());
