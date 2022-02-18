const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//asks questions
const promptManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your Manager? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the Manager's Name!");
          return false;
        }
      },
    },
    {
      type: "number",
      name: "id",
      message: "What is the Manager's id number? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            " is not a number.  Please enter the Manager's id number!  Press up then down to clear NaN error message and try again."
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the Manager's email address? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the Manager's email address!");
          return false;
        }
      },
    },
    {
      type: "number",
      name: "office",
      message: "What is the Manager's office number? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            " is not a number.  Please enter the Manager's office number!  Press up then down to clear NaN error message and try again."
          );
          return false;
        }
      },
    },
  ]);
};

//Question to see what employee you want to add next.
const promptQuestion = () => {
  inquirer
    .prompt({
      type: "list",
      message: "Would you like to add a(n)?",
      name: "choice",
      choices: ["Engineer", "Intern", "All Done"],
    })
    .then((answer) => {
      if (answer.choice === "Engineer") {
        promptEngineer().then((answers) => {
          teamForceFive.push(new Engineer(answers));
          console.log(teamForceFive);
          promptQuestion();
        });
      } else if (answer.choice === "Intern") {
        promptIntern().then((answers) => {
          teamForceFive.push(new Intern(answers));
          console.log(teamForceFive);
          promptQuestion();
        });
      } else if (answer.choice === "All Done") {
        console.log("You did it!!!  Go check out your generated page.");
      }
    });
};

//questions for the engineer
const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your Engineer? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the Engineer's Name!");
          return false;
        }
      },
    },
    {
      type: "number",
      name: "id",
      message: "What is the Engineer's id number? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            " is not a number.  Please enter the Engineer's id number!  Press up then down to clear NaN error message and try again."
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the Engineer's email address? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the Engineer's email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "gitHub",
      message: "What is the Engineer's gitHub? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the Engineer's gitHub!");
          return false;
        }
      },
    },
  ]);
};

//Asks the questions for the intern
const promptIntern = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your Intern? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the Intern's Name!");
          return false;
        }
      },
    },
    {
      type: "number",
      name: "id",
      message: "What is the Intern's id number? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            " is not a number.  Please enter the Intern's id number!  Press up then down to clear NaN error message and try again."
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the Intern's email address? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the Intern's email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "What school did the Intern attend? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the Intern's school!");
          return false;
        }
      },
    },
  ]);
};

//array to hold team for now put in the global scope
teamForceFive = [];

//the call to start the questions
promptManager().then((answers) => {
  teamForceFive.push(new Manager(answers));
  console.log(teamForceFive);
  promptQuestion();
});

//Notes

// Build an entire application using object-oriented programming (OOP), separating data and functionality into different constructor functions.

// Use modern ES6 class syntax to implement inheritance between classes.

// Verify that your code works as intended through automated tests using the Jest framework.

// Take user input and use template literals to dynamically generate an entire HTML page directly from the command line.

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

//10.1.4 Ran our first test using the command npm run test.  Had to change to "test": "jest" in the package.json file.  Made the __test__ folder and our first file using the naming structure name.test.js and then structured our first test.
//10.1.5 Potion.test.js created.  Set up code that looks at the Potion.js file and then makes a test function that creates a "new" potion and expects potion.name and potion.value to match.  This FAILS because Potion.js jas no code yet.
//10.1.6 Good info on constructors worth a read.  We made a function that creates an object in in Potion.js, assigns it's name to the passed in potion var, checks if it's name is "health" and if yes sets the new value line in the object to a number between 30-40 otherwise it is between 5-12.
//10.1.7 Made a new test to pass in an empty potion object from Potion.test.js.  Then in Potion.js made an array of names and then when making the this.name checked if nothing or something was passed in and handled that for us.
//10.2.3 Learned that "npm test" will test all files in the __test__ folder.  To pick one type "npm test Player" for expample.  Also added a test to Player.test.js that failed because Player.js has no code.
//10.2.4 Added an empty string to the the catch --function Player(name = "") {-- so this will create "" if nothing is passed in. The rest is pretty standard just making 4 total variables in this object instead of just 2.
//10.2.5 Made our first __mocks__ folder in the lib with the js files that are being required.  Then added a Potion.js into the mock folder and --jest.mock("../lib/Potion.js");-- into the Player.test.js code to always use the Mock file instead.  Also made an array using --this.inventory = [new Potion("health"), new Potion()];-- in the Player.js file and using --expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));-- in the Player.test.js file to be expecting it for the test.
//10.2.6 Created the FAIL tests for getStats() and getInventory().  They both fail because we have not included them yet in our Player.js or Potion.js.  We will see where we write them.
//10.2.7 Introduced Player.prototype.getStats.  This was all written in the Player.js to make the test pass.  As of write now I am now really clear on how this works but they claim they will explain this more.  Best I can tell is these look at the constructor and pull data.
//10.3.3 Added 2 more tests and protypes to the Player constructor.  Discovered if I --console.log(new Player.getHealth());--  I can look at what these print in the Player.test.js.
//10.3.4 Added 3 more tests and prototype Methods to the Player constructor.  My console log returns undefined for these because these have more going on and I don't know the syntax to look at arrays.
//10.3.5 Added the Enemy.test.js in the __tests__ folder and added code to force the FAIL.  Then added code to the Enemy.js file to get things working.  We passed in 2 variables this time and called the Potion() method.
//10.3.6 Added all the code to set up the Enemy stuff.  This was really just a ton of copy paste.  No new ideas here.
//10.4.3 Added opening code to Game.js to get things started.  Then went into app.js and set that up so we can really get things started using node app.js.
//10.4.4 Added the startNewBattle prototype Method.  This picks who goes first and then uses this.player and this.currentEnemy to go get data from other methods.  Also intorduced the console.table() which is pretty amazing.
//10.4.5 Added the .battle method which contained 2 list prompts that fed off of eachother and even called other methods.  Could be useful in knowing how to swtich between Manager and Engineer etc.. Come back and read.
//10.4.6 Added the checkEndOfBattle Method.  This thing really goes nuts and has several  things that may be useful when it comes to building the objects for the challenge.  Especially like knowing when to stop.  May have to read later.
//10.5.3 This introduces the idea of creating a file, in this case called Character.js, to handle code that is the same for multiple objects.  Could be useful in creating the Employee boxes.
//10.5.4 Introduced to inheritance where we used code like Enemy.prototype = Object.create(Character.prototype); to grab all the info from Character.js to help build in this case the enemy.
//10.5.5 Introduced the ES6 way of doing objects called classes.  I may just need to refer to this page to walk myself through this again.  There is a good amount of info and we haven't even got the classes to talk the Character.js yet to things are still broken.
//10.5.6 Introduced extends --class Player extends Character {-- which allows us to grab data from one Class and put it into another class.  This example Player would be getting info from the Character Class. Then it introduced super() call which allows you to take from classes that have their own constructors.
