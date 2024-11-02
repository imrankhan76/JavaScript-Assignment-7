// ************************************************CH # DATE METHODS*************************************************


// ************************************************Ques# 1*************************************************
var today_date=new Date();
document.write(`<h3>Current Date and Time:</h3>${today_date}<br>`)
var currentMonth = new Date().getMonth()
// ************************************************Ques# 2*************************************************

var month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

alert("Current Month: "+ month[currentMonth])

// ************************************************Ques# 3*************************************************

var currentDay = new Date().getDay()

var days = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

alert("Current Day: "+ days[currentDay])
// ************************************************Ques# 4*************************************************

if(days[currentDay]==="Sat"||days[currentDay]==="Sun"){
    alert("“It’s Fun day”")
}

// ************************************************Ques# 5*************************************************

var currentdate=new Date().getDate()

if(currentdate<16){
    alert("“First fifteen days of the month”")
}
else{
        alert("“Last days of the month”.")
    
}
// ************************************************Ques# 6*************************************************


var currentDate = new Date();

var milliseconds = currentDate.getTime();

var minutes = Math.floor(milliseconds / (1000 * 60));

var totalMinutes = minutes;


document.write(`<h3>Current Date and Time:</h3>${today_date}<br>`)
document.write(`<h3>Elapsed milliseconds since January 1,1970:</h3>${milliseconds}<br>`)
document.write(`<h3>Elapsed minutes since January 1,1970:</h3>${totalMinutes}<br>`)

// ************************************************Ques# 7*************************************************

var hours=new Date().getHours()
if(hours<12){
    alert("“Its AM”")
}
else{
    alert("“Its PM”")

}

// ************************************************Ques# 8*************************************************

var laterDate = new Date(2021, 0, 1); 

laterDate.setDate(laterDate.getDate() - 1);

console.log(laterDate); 
document.write(`Later date: ${laterDate}<br>`)
// ************************************************Ques# 9*************************************************

var ramadanStartDate = new Date(2015, 5, 18); 

var currentDate = new Date();

var timeDifference = currentDate - ramadanStartDate;

var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

alert(`${daysPassed} days have  passed since 1st Ramadan, 2015`);

// ************************************************Ques# 10*************************************************

var referenceDate = new Date(2025, 9, 31); 

var startOf2015 = new Date(2015, 0, 1); 

var timeDifference = referenceDate - startOf2015;

var secondsElapsed = Math.floor(timeDifference / 1000);
document.write(`On reference date ${referenceDate}, ${secondsElapsed} seconds had passed since beginning of 2015<br>`)

// ************************************************Ques# 11*************************************************

var oneHourAgo = new Date(currentDate);
oneHourAgo.setHours(currentDate.getHours() - 1);

var currentDateString = currentDate.toString();
var oneHourAgoString = oneHourAgo.toString();

document.write(`Current Date and Time: ${currentDateString}<br> 1 Hour Ago: ${oneHourAgoString}<br>`);
// ************************************************Ques# 12*************************************************

var hundredYearsBack = new Date(currentDate);
hundredYearsBack.setFullYear(currentDate.getFullYear() - 100);


document.write(`Current Date : ${currentDate}<br>100 years back,it was ${hundredYearsBack}<br>`);
// ************************************************Ques# 13*************************************************

var inputAge=+prompt("Enter your age")

var currentYear = new Date().getFullYear();

var birthYear = currentYear-inputAge;

document.write(`Your age is: ${inputAge} <br>Your birth year is: ${birthYear}<br>`)
// ************************************************Ques# 14*************************************************


var customerName = prompt("Enter your name:");
var currentMonth = prompt("Enter the current month:");
var numberOfUnits = parseFloat(prompt("Enter the number of units consumed:"));
var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));

var netAmountPayable = numberOfUnits * chargesPerUnit;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

netAmountPayable = Math.round(netAmountPayable * 100) / 100;
grossAmountPayable = Math.round(grossAmountPayable * 100) / 100;

document.write("<h1>K-Electric Bill</h1>");
document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
document.write("<p><strong>Current Month:</strong> " + currentMonth + "</p>");
document.write("<p><strong>Number of Units:</strong> " + numberOfUnits + "</p>");
document.write("<p><strong>Charges per Unit:</strong> " + chargesPerUnit + "</p>");
document.write("<p><strong>Net Amount Payable (within Due Date):</strong> " + netAmountPayable + "</p>");
document.write("<p><strong>Late Payment Surcharge:</strong> " + latePaymentSurcharge + "</p>");
document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> " + grossAmountPayable + "</p>");
