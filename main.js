// APP: Tip Calculator

const { log } = console;

const billInput = document.getElementById("billTotalInput");

const tipInput = document.getElementById("tipInput");

const numberOfPeopleDiv = document.getElementById("numberOfPeople");

const perPersonTotal = document.getElementById("perPersonTotal");

// get The number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

/*  Calculate the total bill per person */
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bill = Number(billInput.value);

  // get the tip from user & conver it into a percentage (divide by 100 )
  const tipPercentage = Number(tipInput.value / 100);

  // get the total tip amount
  const tipAmount = bill * tipPercentage;

  //   calculate the total (tip amount + bill)
  const total = tipAmount + bill;

  // calculate the per person taotal (total divided by numbers of people)

  const payPerPerson = total / numberOfPeople;
  // calculate Bill
  // update per person total div and show the user
  perPersonTotal.innerText = payPerPerson.toFixed(2);
};

// increase  people

const increasePeople = () => {
  numberOfPeople += 1;
  numberOfPeopleDiv.innerText = numberOfPeople;

  //  execute the calculate bill function
  // recalculate the number of people
  calculateBill();
};

// decrease people

const decreasePeople = () => {
  // Guard Clause
  if (numberOfPeople <= 1) {
    return;
    // this will stop the numberfrom reducing less than one
  }
  numberOfPeople -= 1;
  numberOfPeopleDiv.innerText = numberOfPeople;

  //  execute the calculate bill function
  // recalculate the number of people
  calculateBill();
};


