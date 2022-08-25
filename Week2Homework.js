let pizzaPlace;
let numberOfToppings;

pizzaPlace = "Imo's";
numberOfToppings = 12;

console.log(pizzaPlace);
console.log(typeof pizzaPlace);
console.log(numberOfToppings);
console.log(typeof numberOfToppings);
console.log(`At ${pizzaPlace}, we have ${numberOfToppings} toppings.`);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

//Bonus
for (let i = 2; i <= numberOfToppings; i += 2) {
  console.log(i);
}
