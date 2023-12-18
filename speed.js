//import prompt-sync to allow user input from terminal
const prompt = require("prompt-sync")();

//define a function to calculate demerit points
const calculatePoints = () => {
  //prompt user input and store it in a variable
  const speed = prompt("Enter speed : ");

  //conditionally assign points depending on speed
  if (speed < 70) {
    console.log("Ok");
  } else {
    //calculate demerit points and store them in a variable
    const points = Math.floor((speed - 70) / 5);
    //display demerit points
    console.log(points);

    //check if demerit points are greater than 12
    if (points > 12) {
      console.log("License Suspended");
    }
  }
};

//call function
calculatePoints();
