/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

const costPerFullDay = 35;
const costPerHalfDay = 20;
let currentRate = costPerFullDay;
let selectedDays = [];

const dayElements = document.querySelectorAll(".day-selector li");
const fullButton = document.getElementById("full");
const halfButton = document.getElementById("half");
const costDisplay = document.getElementById("calculated-cost");
const clearButton = document.getElementById("clear-button");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


dayElements.forEach(day => {
    day.addEventListener("click", () => {
        if (!day.classList.contains("clicked")) {
            day.classList.add("clicked");
            selectedDays.push(day.id);
            calculate();
        }
    });
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


clearButton.addEventListener("click", () => {
    dayElements.forEach(day => day.classList.remove("clicked"));
    selectedDays = [];
    calculate();
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


halfButton.addEventListener("click", () => {
    currentRate = costPerHalfDay;
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
    calculate();
});

fullButton.addEventListener("click", () => {
    currentRate = costPerFullDay;
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    calculate();
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    const totalCost = selectedDays.length * currentRate;
    costDisplay.innerHTML = totalCost;
}
