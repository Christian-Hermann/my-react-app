// Attributes in JSX
const p1 = <p id="large">foo</p>;
const p2 = <p id="small">bar</p>;

// Nexted JSX
const myDiv = (
  <div>
    <h1>Hello world</h1>
  </div>
);

// JSX Outer Elements
const blog = (
  <div>
    <img src="pics/192940u73.jpg" />
    <h1>Welcome to Dan's Blog!</h1>
    <article>
      Wow I had the tastiest sandwich today. I <strong>literally</strong> almost
      freaked out.
    </article>
  </div>
);

// passing a Variable to render

import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

// Write code here:

const myList = (
  <ul>
    <li>Learn React</li>
    <li>Become a developer</li>
  </ul>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(myList);

// class vs className

const myDiv = <div className="big">I AM A BIG DIV</div>;
root.render(myDiv);

// Variables in JSX

const theBestString = "This text was accessed through a javascript variable";
root.render(<h1>{theBestString}</h1>);

// Variable attriubtes in JSX

const goose =
  "https://content.codecademy.com/courses/React/react_photo-goose.jpg";
const gooseImg = <img src={goose} />;
root.render(gooseImg);

// Event Listeners in JSX

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute(
    "src",
    "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg"
  );
  e.target.setAttribute("alt", "doggy");
}

const kitty = (
  <img
    src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg"
    alt="kitty"
    onClick={makeDoggy}
  />
);

// JSX CONDITIONALS: IF STATEMENTS THAT DO WORK
function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? "heads" : "tails";
}

const pics = {
  kitty: "https://content.codecademy.com/courses/React/react_photo-kitty.jpg",
  doggy: "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg",
};
let img;

// if/else statement begins here:
if (coinToss() === "heads") {
  img = <img src={pics.kitty} />;
} else {
  img = <img src={pics.doggy} />;
}

root.render(img);

// Ternary
function coinToss() {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? "heads" : "tails";
}

const pics = {
  kitty: "https://content.codecademy.com/courses/React/react_photo-kitty.jpg",
  doggy: "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg",
};

const img = <img src={pics[coinToss() === "heads" ? "kitty" : "doggy"]} />;

root.render(img);

// .map in JSX

const people = ["Rowe", "Prevost", "Gare"];

const peopleList = people.map((person, i) => (
  // expression goes here:
  <li>{person}</li>
));

// root.render goes here:
root.render(<ul>{peopleList}</ul>);

//

const people = ["Rowe", "Prevost", "Gare"];

const peopleList = people.map((person, i) => (
  // expression goes here:
  <li key={"person_" + i}>{person}</li>
));

// root.render goes here:
root.render(<ol>{peopleList}</ol>);
