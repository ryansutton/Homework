//1. Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = [
  "Sausage",
  "Pepperoni",
  "Bacon",
  "Mushrooms",
  "Peppers",
  "Pineapple"
];
let toppingsList = "";
function listToppings(toppingsList) {
  pizzaToppings.splice(pizzaToppings.length - 1, 0, "and");
  let lastItem = pizzaToppings.pop();
  pizzaToppings.push(lastItem);
  return pizzaToppings;
}
listToppings();
console.log(pizzaToppings);
// 2. Create a greetCustomer function that prints a message that welcomes a guest,
// then informs them of the available toppings by looping over pizzaToppings
// (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
function greetCustomer() {
  for (let topping of pizzaToppings) {
    toppingsList += topping + ", ";
  }
  listToppings(toppingsList);
  console.log(`Welcome to Pizza House, our toppings are ${pizzaToppings}.`);
  return toppingsList;
}

// function greetCustomer() {
//   const toppings = pizzaToppings.toString();
//   console.log(`Welcome to Pizza House, our toppings are ${toppings}.`);
// }

// 3. Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings
let pizzaSize = "";
let pizzaCrust = "";
let customerToppings = "";

function getPizzaOrder(size, crust, toppings) {
  pizzaSize = size;
  pizzaCrust = crust;
  customerToppings = [toppings];
  customerToppings = listToppings(customerToppings);
  console.log(
    `One ${pizzaSize} ${pizzaCrust} crust pizza with ${customerToppings} coming up!`
  );
  return [pizzaSize, pizzaCrust, customerToppings];
}

// 4. Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
let pizzaObject = {};
function preparePizza([size, crust, [toppings]]) {
  console.log(`...Your pizza is coming up...`);
  pizzaObject = {
    size: size,
    crust: crust,
    toppings: [toppings]
  };
  return pizzaObject;
}

// 5. Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in
function servePizza(pizzaObject) {
  console.log(
    `Order up! Here's your ${pizzaObject.size} ${pizzaObject.crust} crust pizza with ${pizzaObject.toppings}. Enjoy!`
  );
}

// 6. Call each function and (starting with preparePizza) use the returned value from the previous function as its input
greetCustomer();
getPizzaOrder("large", "thick", ["sausage", "pepperoni", "bacon"]);
preparePizza([pizzaSize, pizzaCrust, customerToppings]);
servePizza(pizzaObject);

//Bonus
// 9. Figure out how to add "and" before the last topping in a list of toppings so when we list toppings it is more grammatically correct.
// You could create a listToppings function that stores the functionality, and call the function each time we list toppings in a function.
// i.e. "Our toppings are a, b, and c." instead of "Our toppings are a, b, c"
// let updatedToppingsList = [];
// function listToppings() {
//   updatedToppingsList = pizzaToppings.splice(
//     pizzaToppings.length - 1,
//     0,
//     "and"
//   );
//   return updatedToppingsList;
// }
// console.log(updatedToppingsList);

// 10. In getPizzaOrder, if an order is placed with no toppings, print a slightly different message,
// like "One large thick crust cheese pizza coming up!" (Instead of "One large thick crust pizza with coming up!").
// Alter servePizza in a similar way to fix its grammar when serving a "plain" cheese pizza.

// 11. In getPizzaOrder, check the toppings the customer ordered against your list of available toppings.
// If they order a topping you don't offer, print a message that informs them you don't offer that topping and to order again.
