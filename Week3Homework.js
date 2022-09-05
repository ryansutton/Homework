//1. Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = [
  "sausage",
  "pepperoni",
  "bacon",
  "mushrooms",
  "peppers",
  "pineapple"
];

function listToppings(array) {
  let lastItem = array.pop();
  array.push("and " + lastItem);
  return array;
}

// 2. Create a greetCustomer function that prints a message that welcomes a guest,
// then informs them of the available toppings by looping over pizzaToppings
// (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
let toppingsList = [];
function greetCustomer() {
  let newList = listToppings(pizzaToppings);
  let greeting = "";
  for (let topping of newList) {
    greeting += topping + ", ";
  }
  greeting = greeting.substr(0, greeting.length - 2);
  // listToppings(toppingsList);
  console.log(`Welcome to Pizza House, our toppings are ${greeting}.`);
  return greeting;
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
  toppings = toppings;
  for (let topping of toppings) {
    if (pizzaToppings.indexOf(topping) < 0) {
      console.log("We don't offer that topping. Please order again.");
      return false;
    }
  }
  let customerOrder = "";
  if (toppings.length === 0) {
    console.log(`One ${pizzaSize} ${pizzaCrust} cheese pizza coming up!`);
  } else {
    let newList = listToppings(toppings);
    for (let topping of toppings) {
      customerOrder += topping + ", ";
    }
    customerOrder = customerOrder.substr(0, customerOrder.length - 2);
    console.log(
      `One ${pizzaSize} ${pizzaCrust} crust pizza with ${customerOrder} coming up!`
    );
  }
  return [pizzaSize, pizzaCrust, customerOrder];
}

// 4. Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

function preparePizza([size, crust, toppings]) {
  console.log(`...Your pizza is coming up...`);
  let pizzaObject = {
    size: size,
    crust: crust,
    toppings: toppings
  };
  return pizzaObject;
}

// 5. Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in
function servePizza(pizzaObject) {
  if (pizzaObject.toppings.length === 0) {
    console.log(
      `Order up! Here's your ${pizzaObject.size} ${pizzaObject.crust} cheese pizza!`
    );
  } else {
    console.log(
      `Order up! Here's your ${pizzaObject.size} ${pizzaObject.crust} crust pizza with ${pizzaObject.toppings}. Enjoy!`
    );
  }
}

// 6. Call each function and (starting with preparePizza) use the returned value from the previous function as its input
greetCustomer();
let pizzaOrder = getPizzaOrder("large", "thick", [
  "sausage",
  "pepperoni",
  "bacon"
]);
if (pizzaOrder) {
  let pizza = preparePizza(pizzaOrder);
  servePizza(pizza);
}

//Bonus
// 9. Figure out how to add "and" before the last topping in a list of toppings so when we list toppings it is more grammatically correct.
// You could create a listToppings function that stores the functionality, and call the function each time we list toppings in a function.
// i.e. "Our toppings are a, b, and c." instead of "Our toppings are a, b, c"

// 10. In getPizzaOrder, if an order is placed with no toppings, print a slightly different message,
// like "One large thick crust cheese pizza coming up!" (Instead of "One large thick crust pizza with coming up!").
// Alter servePizza in a similar way to fix its grammar when serving a "plain" cheese pizza.

// 11. In getPizzaOrder, check the toppings the customer ordered against your list of available toppings.
// If they order a topping you don't offer, print a message that informs them you don't offer that topping and to order again.
