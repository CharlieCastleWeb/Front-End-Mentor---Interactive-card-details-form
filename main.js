
// Credit card display
const cardNameDisplay = document.querySelector(".card-name");
const cardNumberDisplay = document.querySelector(".card-number");
const cardExpMonthDisplay = document.querySelector(".card-exp-month");
const cardExpYearDisplay = document.querySelector(".card-exp-year");
const cardCvcDisplay = document.querySelector(".card-cvc");

// Credit card inputs
const cardNameInput = document.querySelector("#cardholder-name");
const cardNumberInput = document.querySelector("#card-number");
const cardExpMonthInput = document.querySelector("#exp-date-month");
const cardExpYearInput = document.querySelector("#exp-date-year");
const cardCvcInput = document.querySelector("#card-cvc");

// Regex
const numberRegex = /([0-9]){16}/;

// Form button
const submitButton = document.querySelector("#submit");

// Display credit card information
cardNameInput.addEventListener("keyup", function() {
    displayInfo(cardNameDisplay, cardNameInput);
});

cardNumberInput.addEventListener("keyup", function(e) {
    cardNumberInput.value = cardNumberInput.value
                                .replace(/[^\dA-Z]/g, '')
                                .replace(/(.{4})/g, '$1 ')
                                .trim();
    displayInfo(cardNumberDisplay, cardNumberInput);
});

cardExpMonthInput.addEventListener("keyup", function() {
    displayInfo(cardExpMonthDisplay, cardExpMonthInput);
});

cardExpYearInput.addEventListener("keyup", function() {
    displayInfo(cardExpYearDisplay, cardExpYearInput);
});

cardCvcInput.addEventListener("keyup", function() {
    displayInfo(cardCvcDisplay, cardCvcInput);
});

function displayInfo(display, input) {
    display.innerHTML = input.value;
}

// VALIDATION

submitButton.addEventListener("click", function(e) {
    
    e.preventDefault();

    const cardNumber = cardNumberInput.value.replace(/\s/g, "");
    // const cardNumber = cardNumberInput.value.replace(/\s/g, "");

    if (cardNumber.match(numberRegex)) {
        console.log("number!!!");
    } else {
        console.log("not number");
    }


});

/*
const cardNumber = parseInt(cardNumberInput.value.replace(/\s/g, ""));
*/