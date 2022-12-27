import React from "react";
import ReactDOM from "react-dom";
import Animals, { useAnimals } from "../src/data";
import Cars from "../src/practice";

const [cat, found] = Animals;

const [honda, tesla] = Cars;
console.log(tesla);

const { model, speedStats } = tesla;
console.log(speedStats);

// console.log(cat);

//const {name, sound} = cat;
//console.log(sound);

// const {
//   feedingRequirments: { food, water }
// } = cat;
// console.log(water);

function App() {
  // const [animal, makeSound] = useAnimals(cat);
  // console.log(animal);
  // makeSound();

  return <h1>HI</h1>;
}

export default App;
