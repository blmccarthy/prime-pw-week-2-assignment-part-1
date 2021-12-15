// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name

let firstName = "Brant";
  console.log("First Name:", firstName);

// 2 - Create a second variable called `lastName` and assign it the value of your last name

let lastName = "McCarthy";
  console.log("Last Name:", lastName);

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)

let fullName = `${firstName} ${lastName}`

// 4 - Console log the value of `fullName`

console.log("Full Name:", fullName);

// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.

let luckyNumber = 17;
  console.log("Lucky Number:", luckyNumber);

// 6 - Console log this sentence, adding in the variables you created above:
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.

console.log(`My name is ${fullName} and I think ${luckyNumber} is a winner!`);

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)

let adventurous = true;

// 8 - Create a variable named `food`, and set its value to a string of your favorite food

let food = "Pad Thai";
  console.log("Favorite Food:", food);

// 9 - Create a variable called `pets` and set it to the value of the number of pets you have

let pets = 1;
  console.log("How many pets I own:", pets);

// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has

let friendsPets = 3;
  console.log("How many pets my friends own:", friendsPets);

// 11 - Add two pets to your `pets` variable

pets += 2;
  console.log("How many pets I own:", );

// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice

const allowedPets = 3;
  console.log("How many pets are allowed:", allowedPets);

// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
// if it's not true, console log "How about we stay home?"

if ( adventurous ){
  console.log("Adventures are great!");
}
else {
  console.log("How about we stay home?");
}

// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"
if (luckyNumber == 2 && adventurous){
  console.log("Roll the dice!");
}

// 15 - Write a conditional that console logs "I can have more pets!"
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.

if (allowedPets > pets){
  console.log("I can have more pets!");
}
else if (allowedPets == pets){
  console.log("I have enough pets");
}
else {
  console.log("Oh no, I have too many pets!");
}

//////////// STRETCH GOALS: ////////////

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios.
// console.log `mostPets` after the conditional has run.

if (pets > friendsPets){
  let mostPets = pets;
  console.log("I have more pets than my friend xP");
}
else if (pets < friendsPets){
  let mostPets = friendsPets;
  console.log("Dagnabbit, my friend has more pets than me >:C");
}
else {
  console.log("You have the same amount of pets as your friend");
}

// 17 - Rewrite question 16 with a `switch` statement. You'll need to do research!

let mostPets;
switch (true){
  case (pets > friendsPets):
    mostPets = pets;
    console.log("You have", pets, "pets, that is", pets - friendsPets, "more than your friend!");
    break;
  case (pets < friendsPets):
    mostPets = friendsPets;
    console.log("Your friend has", friendsPets, "pets, that is", friendsPets - pets, "more than you!");
    break;
  default:
    console.log("You and your friend both have", pets, "pets!");
}

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!

let result =
  (adventurous) ? "Adventures are great!" : "How about we stay home?";
console.log(result);
