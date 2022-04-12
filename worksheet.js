// dayOfWeek = 'Monday';

// console.log(dayOfWeek);

// dayOfWeek = 'Friday';

// console.log(`I can't wait until ${dayOfWeek}!`)

// animalInput = prompt('What is your favorite animal?');

// colorInput = prompt('What is your favorite color?');

// console.log(`I've never seen a ${colorInput} ${animalInput}!`)

// favorite breakfast is a breakfast burrito
// favorite lunch is my wife's sandwiches
// favorite dinner is korean barbecue

// timeOfDay = "fdas";

// if(timeOfDay < 1200) 
//     mealByTime = 'Breakfast Burrito';

// if(timeOfDay > 1200 && timeOfDay < 1700) 
//     mealByTime = "Wife's sandwiches";

// if(timeOfDay > 1700) 
//     mealByTime = "Korean Barbecue";

// console.log(mealByTime);

// ranNum = Math.floor(Math.random() * 11);

// if(ranNum >= 0 && ranNum <= 2) console.log("Beatles");

// if(ranNum >= 3 && ranNum <= 5) console.log("Stones");

// if(ranNum >= 6 && ranNum <= 8) console.log("Floyd");

// if(ranNum >= 9 && ranNum <= 10) console.log("Hendrix");

// for(let i = 0; i < 7; i++){
//     console.log("JavaScript is cool!");
// }

// for(let i = 0; i < 11; i++){
//     console.log(i);
// }

// for(let i = 1; i < 9; i++){
//     if(i%2>0) console.log("hello");
//     if(i%2 == 0) console.log("goodbye");
// }


// function printMovieName(){
//     favoriteMovie = "Sanic 2";
//     return favoriteMovie;
// }
// asdf = printMovieName();
// console.log(asdf);

// let favBand = prompt("What is your favorite band?");
// console.log(favBand);

// function concertDisplay(musicalAct){
//     myStreet = prompt("What street do you live on?");
//     return (`It would be great if ${musicalAct} played a show on ${myStreet}!`);
// }

// let favConcert = concertDisplay(favBand);
// console.log(favConcert);

// deskTopItems = ["Mouse", "Laptop", "Pencil"];

// console.log(deskTopItems[1]);

// deskTopItems.push('Infinity Gauntlet');

// for (each in deskTopItems){
//     console.log(deskTopItems[each]);
// }

let magicNumber = Math.floor(Math.random() * 101);

let guess = 0;

while(guess != magicNumber){
    guess = prompt("What is the magicNumber?");
    if(guess < magicNumber) console.log("You are too low!");
    if(guess > magicNumber) console.log("You are too high!");
    if((guess >= magicNumber - 10 && guess <= magicNumber-1)||(guess <= magicNumber + 10 && guess >= magicNumber+1)) console.log("Getting warmer!");
    if(guess == magicNumber) console.log(`You got it! The magic number was ${magicNumber}!`);
}