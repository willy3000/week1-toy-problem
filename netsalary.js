//import prompt-syncnto enable user input from terminal
const prompt = require("prompt-sync")();

//declare function to calculate net salary
function calculateNetSalary() {
  //accept user input and store it in a variable
  const taxablePay = parseInt(prompt("Enter basic salary:"));

  //define variable for pensionable pay
  let pensionablePay = 0;

  //accept user input until user enters correct value
  while (true) {
    pensionablePay = parseInt(prompt("Enter pensionable pay:"));

    //check if pensionable pay is between 0 and 18000
    if (pensionablePay <= 18000) {
      break;
    } else {
      console.log("Value must be from 0 to 18000");
      continue;
    }
  }

  //function to calculate payee depending on taxable income
  const calculatePayee = () => {
    if (taxablePay <= 24000) {
      return taxablePay * 0.1;
    } else if (taxablePay >= 24001 && taxablePay <= 32333) {
      return taxablePay * 0.25;
    } else if (taxablePay >= 32334 && taxablePay <= 500000) {
      return taxablePay * 0.3;
    } else if (taxablePay >= 500001 && taxablePay <= 800000) {
      return taxablePay * 0.325;
    } else if (taxablePay > 800000) {
      return taxablePay * 0.35;
    }
  };

  //function to calculate nhif deduction depending on taxable income
  const calculateNHIF = () => {
    if (taxablePay <= 5999) {
      return 150;
    } else if (taxablePay >= 6000 && taxablePay <= 7999) {
      return 300;
    } else if (taxablePay >= 8000 && taxablePay <= 11999) {
      return 400;
    } else if (taxablePay >= 12000 && taxablePay <= 14999) {
      return 500;
    } else if (taxablePay >= 15000 && taxablePay <= 19999) {
      return 600;
    } else if (taxablePay >= 20000 && taxablePay <= 24999) {
      return 750;
    } else if (taxablePay >= 25000 && taxablePay <= 29999) {
      return 850;
    } else if (taxablePay >= 30000 && taxablePay <= 34999) {
      return 900;
    } else if (taxablePay >= 35000 && taxablePay <= 39999) {
      return 950;
    } else if (taxablePay >= 40000 && taxablePay <= 44999) {
      return 1000;
    } else if (taxablePay >= 45000 && taxablePay <= 49999) {
      return 1100;
    } else if (taxablePay >= 50000 && taxablePay <= 59999) {
      return 1200;
    } else if (taxablePay >= 60000 && taxablePay <= 69999) {
      return 1300;
    } else if (taxablePay >= 70000 && taxablePay <= 79999) {
      return 1400;
    } else if (taxablePay >= 80000 && taxablePay <= 89999) {
      return 1500;
    } else if (taxablePay >= 90000 && taxablePay <= 99999) {
      return 1600;
    } else if (taxablePay >= 100000) {
      return 1700;
    }
  };

  //function to calculate nssf deduction depending on taxable income
  const calculateNSSF = () => {
    if (pensionablePay <= 6000) {
      return pensionablePay * 0.6;
    } else if (pensionablePay >= 6001 && pensionablePay <= 18000) {
      const firstDeduction = 6000 * 0.6;
      const secondDeduction = pensionablePay * 0.6;
      return firstDeduction + secondDeduction;
    }
  };

  const calculateHousingLevy = () => {
    return taxablePay * 0.015;
  };

  //call functions and store results in variables
  const payee = calculatePayee();
  const nhifDeduction = calculateNHIF();
  const nssfDeduction = calculateNSSF();
  const housingLevy = calculateHousingLevy();
  const netPay =
    taxablePay - payee - nhifDeduction - nssfDeduction - housingLevy;

  //display results
  console.log(
    `Taxable Income:  KES. ${parseFloat(taxablePay).toLocaleString("en-US")}`
  );
  console.log(`PAYEE:  KES. ${parseFloat(taxablePay).toLocaleString("en-US")}`);
  console.log(
    `NHIF deduction:  KES. ${parseFloat(nhifDeduction).toLocaleString("en-US")}`
  );

  console.log(
    `NSSF deduction:  KES. ${parseFloat(nssfDeduction).toLocaleString("en-US")}`
  );

  console.log(`Net pay:  KES. ${parseFloat(netPay).toLocaleString("en-US")}`);
}

//call function
calculateNetSalary();
