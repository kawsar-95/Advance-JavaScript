class Person {
  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.LastName = lastName;
    this.salary = salary;
  }
}
const heroPerson = new Person("The", "Godfather", 30000);
console.log(heroPerson);

function Person1(firstName, lastName, salary) {
  this.firstName = firstName;
  this.LastName = lastName;
  this.salary = salary;
}
const oldPerson = new Person1("Anwar", "Uddin", 7000);
console.log(oldPerson);
