#! /usr/bin/env node
// import { differenceInSeconds } from "date-fns";
// import inquirer from "inquirer";
// // prompt the user the amount of seconds.....
// const res = await inquirer.prompt({
//   type: "number",
//   name: "userInput",
//   message: "please enter the amount of seconds",
//   validate: (input) => {
//     if (isNaN(input)) {
//       return "please enter a valid number";
//     } else if (input > 60) {
//       return "seconds must be less than or equal to 60";
//     } else {
//       return true;
//     }
//   }
// });
// // get the user input from the prompt result
// let input = res.userInput;

// // Defining a function to start the countdown
// function startTime(val: number) {
//   const intTime = new Date().setSeconds(new Date().getSeconds() + val);
//   const intervalTime = new Date(intTime);
//   console.log(`Countdown started for ${val} seconds`);
//   setInterval(() => {
//     const currentTime = new Date();
//     const timeDiff = differenceInSeconds(intervalTime, currentTime);
//     if (timeDiff <= 0) {
//       console.log(`Time has expired`);
//       process.exit();
//     }
//         // Calculate the minutes and seconds from the time difference
//     const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
//     const sec = Math.floor(timeDiff % 60);
//      // Log the countdown time in mm:ss format
//     console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
//   }, 1000);
// }
// startTime(input);

            ////////////////  ************ 2ND METHOD ***********  \\\\\\\\\\\\


// Add Seconds , Minuts, and Hours with user input..

import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const res = await inquirer.prompt([
  {
    type: "list",
    name: "unit",
    message: "What unit would you like to enter?",
    choices: ["seconds", "minutes", "hours"]
  },
  {
    type: "number",
    name: "userInput",
    message: "please enter the amount",
    validate: (input) => {
      if (isNaN(input)) {
        return "please enter a valid number";
      } else {
        return true;
      }
    }
  }
]);

// Get the user-selected unit and input amount
let unit = res.unit;
let input = res.userInput;
let seconds;
switch (unit) {
  case "seconds":
    seconds = input;
    break;
  case "minutes":
    seconds = input * 60;
    break;
  case "hours":
    seconds = input * 3600;
    break;
}

// Define a function to start the countdown
function startTime(val: number) {
  const intTime = new Date().setSeconds(new Date().getSeconds() + val);
  const intervalTime = new Date(intTime);
  console.log(`Countdown started for ${val} seconds`);

    // Set an interval to update the countdown every second
  setInterval(() => {
    const currentTime = new Date();
    const timeDiff = differenceInSeconds(intervalTime, currentTime);
    if (timeDiff <= 0) {
      console.log(`Time has expired`);
      process.exit();
    }
     // Calculate the hours, minutes, and seconds from the time difference
    const hours = Math.floor(timeDiff / 3600);
    const minutes = Math.floor((timeDiff % 3600) / 60);
    const seconds = timeDiff % 60;
    
    // Log the countdown time in hh:mm:ss format
    console.log(`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
  }, 1000);
}

startTime(seconds);