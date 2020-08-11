const student = [
  { id: 11, name: "Don" },
  { id: 21, name: "John" },
  { id: 31, name: "Ron" },
  { id: 41, name: "Von" },
];

const names = student.map((s) => s.name);
const ids = student.map((s) => s.id);

const bigger = student.filter((s) => s.id > 40);
const biggerOne = student.find((s) => s.id > 30);

console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerOne);
