//import prompt-sync to allow user input from terminal
const prompt = require("prompt-sync")();

//define a function to calculate the grade from the marks entered
const calculateGrade = () => {
  //prompt user to input marks and store it in a variable
  let marks = prompt("Enter marks : ");

  //convert marks to int
  marks = Number(marks);

  //define an empty variable to store grade
  let grade;

  //store the grade in the variable conditionally depending on the range of marks
  if (marks > 79) {
    grade = "A";
  } else if (marks >= 60 && marks <= 79) {
    grade = "B";
  } else if (marks >= 50 && marks <= 59) {
    grade = "C";
  } else if (marks >= 40 && marks <= 49) {
    grade = "D";
  } else if (marks < 40) {
    grade = "E";
  } else grade = "Invalid";

  //display the grade
  console.log(grade);
};

//call the function
calculateGrade();
