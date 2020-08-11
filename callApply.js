const normalPerson = {
  firstName: "The",
  lastName: "Godfather",
  salary: 15000,
  getFullName: function () {
    console.log(this.firstName, this.lastName);
  },

  chargeBill: function (amount, tips, tax) {
    this.salary = this.salary - amount - tips - tax;
    return this.salary;
  },
};
// normalPerson.chargeBill(150);
// normalPerson.chargeBill(3000);
// console.log(normalPerson.salary);

const heroPerson = {
  firstName: "Hero",
  lastName: "AlPacino",
  salary: 25000,
};

const goldenPerson = {
  firstName: "Hero",
  lastName: "Robert De Nir",
  salary: 35000,
};

// normalPerson.chargeBill();

//For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters.

// const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
// heroBillCharge(2000);
// const goldenBillCharge = normalPerson.chargeBill.bind(goldenPerson);
// goldenBillCharge(3000);
// console.log(heroPerson.salary);
// console.log(goldenPerson.salary);

// Call Calls a method of an object, substituting another object for the current object.

normalPerson.chargeBill.call(heroPerson, 900, 200, 2000);
// console.log(heroPerson.salary);

normalPerson.chargeBill.call(goldenPerson, 300, 200, 3000);
// console.log(goldenPerson.salary);

//Apply A set of arguments to be passed to the function.
normalPerson.chargeBill.apply(heroPerson, [2000, 30, 300]);
console.log(heroPerson.salary);
