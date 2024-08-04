function App() {
  const nums = [13, 87, 2, 89, 12, 4, 90, 63];
  // Create a new array where each value is multiplied by 2 and log the new array.
  const numsMultBy2 = nums.map((currentElement) => {
    return currentElement * 2;
  });
  console.log(numsMultBy2);

  // Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.
  const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];
  console.log(pizzaToppings[0]);
  console.log(pizzaToppings[1]);

  // Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.
  const car = {
    make: "Audi",
    model: "q5",
  };
  console.log(car.make);
  console.log(car.model);

  // Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.
  const controversialPizzaToppings = [...pizzaToppings];
  console.log(controversialPizzaToppings);

  // Duplicate the following object and spread its values into a new variable `myCar`.
  const myCar = { ...car };
  myCar.model = "q7";

  console.log("Original: ", car);
  console.log("Clone: ", myCar);

  // Create an object named userProfile.
  // Define a variable named propertyName and assign a string to it (like a username, age, or email).
  // Use propertyName as a dynamic key in userProfile, assigning a relevant value.
  const propertyName = "Ahmed";
  const userProfile = {
    name: "Ahmed",
    [propertyName]: 5,
  };

  console.log(userProfile);

  // Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:
  // The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.
  function catColor(noun = `cat`, adjective = `white`) {
    return `The ${noun} is ${adjective}.`;
  }
  console.log(catColor());

  // Convert the following `if...else` statement in to a ternary:

  let pizza = "tasty";

  // if (pizza === "tasty") {
  //   console.log("yum");
  // } else {
  //   console.log("yuck");
  // }

  let access = pizza === "tasty" ? console.log("yum") : console.log("yuck");

  // 1. SET LANGUAGE
  // Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement:
  // "LANG is equal to localLangConfig or the default value of English."
  const localLangConfig = "es";

  // a. Create a variable called LANG
  // b. Assign LANG the value of localLangConfig or 'en' as a default
  const LANG = localLangConfig || "en";

  console.log("Language setting:", LANG);

  // 2. SET WEBSITE THEME

  const userSavedTheme = "dark";

  // a. Create a variable called USER_THEME
  // b. Assign USER_THEME the value of userSavedTheme or 'light' as a default
  const USER_THEME = userSavedTheme || "light";

  console.log("User theme setting:", USER_THEME);

  // Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.
  const adventurer = {
    name: "Alice",
  };
  let cat = adventurer.cat?.age;

  console.log(cat);

  return (
    <>
      <h1>Hello!!</h1>
    </>
  );
}

export default App;
