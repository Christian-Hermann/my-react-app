import { animals } from "./animals";
import react from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const title = "";
const background = (
  <img className="background" src="/images/ocean.jpg" alt="ocean" />
);
const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

function displayFact(e) {
  const animal = e.target.alt;
  const selectedAnimal = animals[animal];
  const optionIndex = Math.floor(Math.random() * selectedAnimal.facts.length);
  const funFact = selectedAnimal.facts[optionIndex];

  const factP = document.getElementById("fact");
  if (factP) {
    factP.innerHTML = funFact;
  }
}

const animalFacts = (
  <div>
    {background}
    <div className="animals">{images}</div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    <p id="fact"></p>
  </div>
);

root.render(animalFacts);
