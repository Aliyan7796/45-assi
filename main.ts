//QUESTION 2

//let personName = "Aliyan"
//console.log("Hello",personName,"would you like to leaarn some phthon today?")



//Question 3

// let personName = "Aliyan"
// console.log(personName.toLocaleLowerCase())
// console.log(personName.toLocaleUpperCase())

// console.log(personName.replace(/\b\w/g, (xyz) => xyz.toUpperCase()))



//Question 4

//console.log("Albert Enistion once said,\"A person who never mode a mistake tried anythink new.\"");


//Question 5

// let famous_person ="Hazrat Ali";

// let message ="Once Said, Accept The Apology, Even If It Is Not Sincer";

// console.log(famous_person,  message);



//Question #6

// let whitespace ="\t\n Aliyan \t\n";

//  console.log(whitespace);

//  let withoutwhitespace = whitespace.trim();

//  console.log(withoutwhitespace);



//Question #7 and 8

// console.log("Addition:"+(5+3));

// console.log("Subtraction:"+(10-2));

// console.log("Multiplication"+(4*2));

// console.log("Division"+(16/2));



//Question #9

// let favoriteNum =7;
// let message = "My favorite number is";
// console.log(message, favoriteNum);



//Question #10

//This program will write Hello World

//console.log("Hello World");



//Question #11

//let names = ["Aliyan","Saim","Wania"];
    
// for(let i=0; i < names.length; i++){

//     console.log(names[i]);
// }



//Question #12

// let names =["Aliyan","Ahmed","Qazi"];

// for(let i=0;i < names.length; i++){

//     console.log(`Hello ${names[i]} how are you`);
// }


//Question #13

// let transportation:string[]=["Motorcycle","Car","Train","Cycle"];

//  for(let i=0; i<transportation.length; i++){
//      console.log(`I would like to own a ${transportation[i]}.`)
//  }


//Question #14

// let guestList:string[]=["Mariyam","iqba","wania"];

// for(let i=0; i<guestList.length; i++ ){

//     console.log(`Dear ${guestList[i]} It is our pleasure to invite you in our party.\nThank You!\n`);
// }


//Question # 15

// let absentGuest ="Mariyam";
// let newGuest ="Ali";
// let guestList =["Ali", "Iqba", "Wania"]

// console.log(`${absentGuest} is not coming to the party.`);

// guestList.forEach(guest => console.log(`Dear ${guest} It is our pleasure to invite you in our party.\nThank You!\n`))


//Question #16


//     let absentGuest ="Mariyam";
//    let newGuest ="Ali";
//   let guestList =["Ali", "Iqba", "Wania"]

//  console.log(`${absentGuest} is not coming to the party.`);

//  console.log(`Good News! we find big table so we are inviting 3 more guests.\n`);

//  guestList.unshift("Saim");
//  guestList.splice(2,0,"Moshi");
//  guestList.push("Rafey");

//  console.log("updated list of our guest");

//  guestList.forEach(guest => console.log(`Dear ${guest} It is our pleasure to invite you in our party.\nThank You!\n`))


// //Question #17

// console.log("Sorry we can not arrange big table, only two peoples will be invited.");

// while(guestList.length > 2){

//     let remove_guest=guestList.pop();
//     console.log(`Sorry ${remove_guest}, You are not invited for Dinner.\n`);
// }
// for(let i=0; i < guestList.length; i++ ){

//     console.log(`Dear ${guestList[i]} ,You are still invited.\nThank You!\n`);
// }

// guestList.splice(0,2);
// console.log(guestList);


// Question #18

// let placesToVisit:string[]=["China","Denmark","Brazil","Eiffel Tower","Argentina"];
// console.log("\nOriginal order: ",placesToVisit);

// console.log("\nAlphabetical order: ",[...placesToVisit].sort())

// console.log("\nStill in original order: ",placesToVisit)

// console.log("\nReverse Order: ",[...placesToVisit].reverse())

// console.log("\nStill in original order: ",placesToVisit)

// console.log("\nOriginal Array Reversed: ",placesToVisit.reverse())

// console.log("\nBack to Original Order: ",placesToVisit.reverse())

// console.log("\nSorted in Alphabetical order: ",placesToVisit.sort())

// console.log("\nOriginal Array Reversed: ",placesToVisit.reverse())


//Question #19 

// let guestList:string[]=["Mariyam","iqba","wania"];

// let lengthguest: number = guestList.length;

// console.log(`we are inviting total ${lengthguest} guest.`)


//Question #20


// let programmingLanguages:string[]=["TypeScript","JavaScript","Python","PHP"];

// console.log("list of programming languages:")

// programmingLanguages.forEach(language => console.log(language))


//Question #21

// interface itCourse{
//     courseName:string;
//     location:string;
//     onSiteStudent:number;
// }

// let itCourse={

//     courseName: "TypeScript and JavaScript",
//     location:"Governor House Sindh",
//     onSiteStudent:50000,
// };

// console.log(itCourse);


//Question #22

//let errorArray:string[]=["A","B","C","D"];

//producing Error ! by Accessing invald index of array
 //console.log(errorArray[10]);

//Error removed
//console.log(errorArray[1]);


//Question #23

//Making a variables
// let five:number = 5;
// let ten:number = 10;

// //Test 1
// console.log("Test 1: five is equal to 5?");
// console.log(five == 5);

// //Test 2
// console.log("\nTest 2: ten is equal to 10?");
// console.log(ten == 10);

// //Test 3
// console.log("\nTest 3: five is not equal to 10?");
// console.log(five != ten);

// //Test 4
// console.log("\nTest 4: 10 is greater then 5");
// console.log(ten > five);

// //Test 5
// console.log("\nTest 5: 5 is smaller than 10");
// console.log(five < ten);

// //Test 6
// console.log("\nTest 6: 10 is smaller than 5");
// console.log(ten < five);

// //Test 7
// console.log("\nTest 7: 5 is equal to 10");
// console.log(five == ten);

// //Test 8
// console.log("\nTest 8:10 is not equal to 10");
// console.log(ten != 10);

// //Test 9
// console.log("\nTest 9: 5 is greater than 10");
// console.log(5 < ten);

// //Test 10
// console.log("\nTest 10:100 is smaller than 50");
// console.log(100 < 50);


//Question #24

// let color: string = 'blue';

// Test 1
// console.log("Is color is equal to 'red'? I predict False.");
// console.log(color === 'red');
// Test 2
// console.log("Is color !== 'green'? I predict True.");
// console.log(color !== 'green');

// Tests using the lower case function

// let countryName: string = 'CANADA';
// Test 3
// console.log("Is countryName.toLowerCase() === 'canada'? I predict True.");
// console.log(countryName.toLowerCase() === 'canada');

// /* Numerical tests involving equality and inequality, greater than and less than, 
// greater than or equal to, and less than or equal to */

// let num1: number = 15;
// let num2: number = 20;
// Test 4
// console.log("Is num1 < num2? I predict True.");
// console.log(num1 < num2);
// Test 5
// console.log("Is num2 >= 20? I predict True.");
// console.log(num2 >= 20);
// Test 6
// console.log("Is num1 + num2 === 35? I predict True.");
// console.log(num1 + num2 === 35);
// Test 8
// console.log("Is num1 * num2 !== 300? I predict True.");
// console.log(num1 * num2 !== 300);

// Tests using "and" and "or" operators

// let p: boolean = true;
// let q: boolean = false;
// Test 9
// console.log("Is p && q? I predict False.");
// console.log(p && q);
// Test 10
// console.log("Is p || q? I predict True.");
// console.log(p || q);

// Test whether an item is in an array

// const fruits:string[]=['Mango','Banana','Apple'];

// Test 11

// console.log('Test "Mango" in the array: ', fruits.includes('Mango')); 

// Test whether an item is not in an array

// console.log('Testing "Apple is not in array: ', !fruits.includes('Apple'));


//Question #25

// let alien_color_pass: string = 'green';

// if (alien_color_pass === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// }

// let alien_color_fail: string = 'yellow';

// if (alien_color_fail === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// }


//Question #26

// let alien_color_if: string = 'green';

// if (alien_color_if === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the alien.");
// } else {
//     console.log("Congratulations! You just earned 10 points.");
// }

// let alien_color_else: string = 'red';

// if (alien_color_else === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the alien.");
// } else {
//     console.log("Congratulations! You just earned 10 points.");
// }


//Question #27

// let alien_color_1: string = 'green';

// if (alien_color_1 === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// }
//  else if (alien_color_1 === 'yellow') {
//     console.log("Congratulations! You just earned 10 points.");
// }
//  else if (alien_color_1 === 'red') {
//     console.log("Congratulations! You just earned 15 points.");
// }

// let alien_color_2: string = 'red';

// if(alien_color_2 === 'Green'){
//     console.log("Congratulations! You just earned 5 points.")
// }
// else if (alien_color_2 === 'yellow'){
//     console.log("Congratulations! You just earned 10 points.")
// }
// else if (alien_color_2 === 'red'){
//     console.log("Congratulations! You just earned 15 points.")
// }

// let alien_color_3: string = 'yellow';

// if (alien_color_3 === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// } else if (alien_color_3 === 'yellow') {
//     console.log("Congratulations! You just earned 10 points.");
// } else if (alien_color_3 === 'red') {
//     console.log("Congratulations! You just earned 15 points.");
// }


//Question #28

// let age: number = 25;

// if (age < 2) {
//   console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
//   console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
//   console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
//   console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
//   console.log("The person is an adult.");
// } else {
//   console.log("The person is an elder.");
// }


//Question #29

// const favorite_fruits: string[] = ["banana", "apple", "grapes"];

// // Check for banana
// if (favorite_fruits.includes("banana")) {
//     console.log("You really like bananas!");
// }

// // Check for apple
// if (favorite_fruits.includes("apple")) {
//     console.log("You really like apples!");
// }

// // Check for grapes
// if (favorite_fruits.includes("grapes")) {
//     console.log("You really like grapes!");
// }

// // Check for orange
// if (favorite_fruits.includes("orange")) {
//     console.log("You really like oranges!");
// }

// // Check for mango
// if (favorite_fruits.includes("mango")) {
//     console.log("You really like mangoes!");
// }


//Question #30

// const usernames: string[] = ["admin", "Eric", "Ali", "saim", "rafey"];

// for (const username of usernames) {
//     if (username.toLowerCase() === "admin") {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// }


//Question #31

// let users = ["admin", "Eric", "Alice", "Bob", "Charlie"];

//     users = []
// if (users.length > 0) {
    
//     for (const username of users) {
//         if (username.toLowerCase() === "admin") {
//             console.log("Hello admin, would you like to see a status report?");
//         } else {
//             console.log(`Hello ${username}, thank you for logging in again.`);
//         }
//     }
// }


//Question #32

// let current_user = ["saim","ali","rafey","moshi","aliyan"]

// let new_user = ["bilal","ahmed","ashaal","faris","john"]

// for (const newUsername of new_user) {
    
//     const isUsernameTaken = current_user.some(
//         (currentUsername) => currentUsername.toLowerCase() === newUsername.toLowerCase()
//     );
    
//     if (isUsernameTaken) {
//         console.log(`The username '${newUsername}' is already taken. Please enter a new username.`);
//     } else {
//         console.log(`The username '${newUsername}' is available.`);
//     }
// }


//Question #33

//  let numbers : number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//  for(let onenumber of numbers) {

//      let ondinalEnding : string;

//      if(onenumber === 1){
//          ondinalEnding ="st"
// }

//   else if (onenumber === 2) {
//      ondinalEnding = "nd"
// }

//  else if (onenumber === 3) {
//     ondinalEnding = "rd"
// }
// else{
//     ondinalEnding = "th"
// }

// console.log(`${onenumber}${ondinalEnding}`);
// }


//Question #34

// let favoritePizzas: string[] = ['beaf', 'Tikka', 'BBQ Chicken'];

// for (let pizza of favoritePizzas) {
//     console.log(`I like ${pizza} pizza.`);
// }

// console.log('I really love pizza!');


//Question #35

// let common_animal = ["cat","dog","rabbit"]

// for (let animal of common_animal){
//     console.log(`A ${animal} would make a great pet.`);
// }

// console.log('Any of these animals would make a great pet.');


//Question #36

// function make_shirt(size: string, message: string): void {
//     console.log(`The shirt is ${size} size and has the message: "${message}".`);
// }

// make_shirt("Large", "Hello, World!");


//Question #37

// function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
//     console.log(`The shirt is ${size} size and has the message: "${message}".`);
// }

// make_shirt(); 
// make_shirt("Medium"); 
// make_shirt("Small", "Different message"); 


//Question #38

//  function describe_city(city: string , country: string = "default_country"): void {
//          console.log(`City ${city} is in ${country}.`);
//  }

//  describe_city("Pakistan","Karachi"); 
//  describe_city("Paris","France"); 
//  describe_city("Tokyo"); 


//Question #39

// function city_country(city: string , country : string): string{
//     return `${city},${country}`
// }

// let location1 = city_country ("karachi","pakistan")

// let location2 = city_country ("lahore","pakistan")

// let location3 = city_country ("islamabad","pakistan")

// console.log(location1)
// console.log(location2)
// console.log(location3)


//Quetion #40

// function make_album(artist:string, title:string, track?:number) { //{artist : String, tital: String, track? :String} void {
//   let album: {artist:string, title:string, track?:number} = {
//     artist:artist,
//     title:title
// };

// if (track !== undefined) {
//     album.track = track;
// }
//   return album;
// }

// // makeAlbum function ka istemal karke teen alag-alag albums banaye
// const album1 = make_album("Artist1", "Album1", 10);
// const album2 = make_album("Artist2", "Album2");
// const album3 = make_album("Artist3", "Album3", 15);

// // Har album ki information ko print kiya
// console.log(album1);
// console.log(album2);
// console.log(album3);


//Question #41

// let magicianNames: string[] = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller"];

// console.log(magicianNames)


//Question #42

// function makeGreat(magicians: string[]): void {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = "the Great " + magicians[i];
//     }
// }
// const magicianNames: string[] = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller"];

// makeGreat(magicianNames);
// console.log(magicianNames)


//Question #43

// function showMagicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }

// function makeGreat(magicians: string[]): string[] {
//     const greatMagicians: string[] = [];

//     for (let i = 0; i < magicians.length; i++) {
//         greatMagicians[i] = "the Great " + magicians[i];
//     }

//     return greatMagicians;
// }

// const magicianNames: string[] = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller"];

// const greatMagicians: string[] = makeGreat([...magicianNames]);

// showMagicians(magicianNames);

// showMagicians(greatMagicians);


//Quesstion #44

// function makeSandwich(...items:string[]) {
//     console.log("Making a sandwich with the following items:");
//     items.forEach(item => console.log("- " + item));
// }

// makeSandwich('chicken', 'cheese', 'butter');
// makeSandwich('egg', 'butter', "ketchup", "chicken");
// makeSandwich('peanut butter', 'sauce');


//Question #45

function createCar(manufacturer:string,model:string, ...options:{[key:string]:any}[]):
{[ key: string ]: any }{

    let car :{[key:string]:any}={
    
        "manyfacturer":manufacturer,
        "model":model
    };
     
    for(let option of options){
    
        for(let key in option){
            car[key]=option[key];
        }
    }
    return car;
    }
    let carInfo=createCar('Toyota','Carmy',{"color":"blue"},{"year":2022});
    console.log(carInfo);



