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
