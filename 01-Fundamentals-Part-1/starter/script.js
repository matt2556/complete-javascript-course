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