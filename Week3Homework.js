const pizzaToppings = ["Sausage", "Pepperoni", "Bacon", "Mushrooms", "Peppers"];

// function greetCustomer() {
//   for (let topping of pizzaToppings) {
//     console.log(`Welcome to Pizza House, our toppings are ${topping}`);
//   }
// }

function greetCustomer() {
  let toppingsList = "";
  for (let topping of pizzaToppings) {
    toppingsList += topping + ", ";
  }
  console.log(`Welcome to Pizza House, our toppings are ${toppingsList}.`);
}

// function greetCustomer() {
//   const toppings = pizzaToppings.toString();
//   console.log(`Welcome to Pizza House, our toppings are ${toppings}.`);
// }
greetCustomer();

function getPizzaOrder(size, crust, toppings) {
  console.log(`One ${size} ${crust} crust pizza with ${toppings} coming up!`);
}

getPizzaOrder("small", "thin", ["sausage", "pepperoni", "bacon"]);

function preparePizza([size, crust, [listOfToppings]]) {
  console.log(`...Your pizza is coming up...`);
  const pizzaObject = {
    size: size,
    crust: crust,
    toppings: [listOfToppings]
  };
  return pizzaObject;
}

preparePizza(["large", "thick", ["sausage", "pepperoni", "bacon"]]);
//console.log(pizzaObject);

function servePizza(pizzaObject) {
  console.log(
    `Order up! Here's your ${pizzaObject.size} ${pizzObject.crust} pizza with ${pizzaObject.toppings}. Enjoy!`
  );
}

servePizza(pizzaObject);
