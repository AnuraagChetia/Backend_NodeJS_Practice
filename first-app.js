const product = (i, j) => {
  return i * j;
};
console.log(product(2, 3));
const student = {
  name: "Anuraag",
  age: "21",
  greet() {
    return "Hello" + this.name;
  },
};
console.log(student.greet());
