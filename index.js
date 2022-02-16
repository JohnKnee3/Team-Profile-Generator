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