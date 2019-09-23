const Doctor = require(`./Doctor`);
const Nurse = require(`./Nurse`);
const Surgeon = require(`./Surgeon`);
const Receptionist = require(`./Receptionist`);
const Janitor = require(`./Receptionist`);
const input = require("readline-sync");

let inputCommand;
while (inputCommand !== "q"){
    console.clear();
    console.log("Welcome to High Street Hospital!");
    console.log("--------------------------------");
    console.log("Please make a number selection from the following options:");
    console.log("1. List all current employees and their attributes");
    console.log("2. List all current (type of) employees and their attributes");
    console.log("3. List patients waiting to be treated (in Reception)");
    console.log("4. List all patients being treated currently (");
    console.log("Q. Quit the application.")
    console.log("--------------------------------");
    inputCommand = "";
    inputCommand = input.question("Selection #: ");
    
    switch (inputCommand) {
        case "1": 
            
            break;
        case "2": 

            break;
        case "3": 
            console.log(`The current patients are ${patients}`);
            break;
        case "4":

            break;
        case "q":
            console.log("Exiting to console...");
            break;
        default:
            break;
    }
}