const fruits = ["apple", "oranges", " ", "mango", " ", "lemon"];
const newFruits = fruits.map((fruit) => {
  if (fruit === " ") {
    fruit = "empty string";
  }
  return fruit;
});
console.log(newFruits);
