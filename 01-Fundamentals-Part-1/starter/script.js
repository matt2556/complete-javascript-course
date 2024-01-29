/* Values and variables */

const country = "Denmark";
const continent = "Europe";
let populationDenmark = 6000000;

console.log(country, continent, populationDenmark);


/* Data types */

const isIsland = false;
let language = "Danish";

console.log(country, continent, populationDenmark, isIsland, language);


/* let const and var */

//const language = "Danish";

//country = "Norway";

console.log(country);


/* Basis operators */

let splitPopulationDenmark = populationDenmark / 2;

let increasedPopulationDenmark = populationDenmark + 1;

console.log(increasedPopulationDenmark);

let populationFinland = 6000000

higherPoplulationThanFinland = populationFinland > populationDenmark;

console.log(higherPoplulationThanFinland);

let averagePopulation = 33000000;

higherPopulationThanAverage = averagePopulation > populationDenmark

console.log(higherPopulationThanAverage);

let describtion = (country + " " + "is in" + " " + continent + " " + "and its" + " " + populationDenmark + " " + "million" + " " + "people speak" + " " + language);

console.log(describtion);


/* Strings and template literals */

const newDescribtion = `${country} is in ${continent} and its ${populationDenmark} million people speak ${language}`;

console.log(newDescribtion);


/* Taking descisions: if / else statements */

 if(populationDenmark > averagePopulation){
    console.log(`${country} is above the average`);
 } else {
    console.log(`${country} is below the average`);
 }


 /* Equality operator: == vs. === */

let numNeighbours = 1 //prompt("How many neighbour countries does your country have?");

if(numNeighbours === 1 ){
   console.log("Only 1 border");
} else if (numNeighbours > 1){
 console.log("More than 1 border ");
} else {
   console.log("No borders");
}


/* Logical operators */

let nationLanguage = "English"

let nationPopulation = 49000000

let notIsland = false 

if (nationLanguage == "English" & nationPopulation <= 50000000 & notIsland == false){
console.log("You should live in Portugal :)");
} else {
   console.log("dont move");
}


/* The switch statement */

let asianLanguage = "manderin"

switch(asianLanguage){
   case "chinese":
   case "manderin":
      console.log("MOST number sof native speakers");
   break;
   case "spanish":
      console.log("2nd place in number of native speakers");
      break;
   case "english":
      console.log("3rd place");
      break;
   case "hindi":
      console.log("Number 4");
      break;
   case "arabic":
      console.log("5th most spoken language");
      break;
   default:
      console.log("Great language too :D");
}