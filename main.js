
// Credit card display
const cardNameDisplay = document.querySelector(".card-name");
const cardNumberDisplay = document.querySelector(".card-number");
const cardExpMonthDisplay = document.querySelector(".card-exp-month");
const cardExpYearDisplay = document.querySelector(".card-exp-year");
const cardCvcDisplay = document.querySelector(".card-cvc");

// Form and inputs
const form = document.querySelector("#form");
const cardNameInput = document.querySelector("#cardholder-name");
const cardNumberInput = document.querySelector("#card-number");
const cardExpMonthInput = document.querySelector("#exp-date-month");
const cardExpYearInput = document.querySelector("#exp-date-year");
const cardCvcInput = document.querySelector("#card-cvc");

// Alert messages
const alertCardName = document.querySelector("#alert-card-name");
const alertCardNumber = document.querySelector("#alert-card-number");
const alertCardDate = document.querySelector("#alert-card-date");
const alertCardCvc = document.querySelector("#alert-card-cvc");

// Validations
let isNameOk = false;
let isNumberOk = false;
let isMonthOk = false;
let isYearOk = false;
let isCvcOk = false;

// Continue button
const continueButton = document.querySelector("#continue");

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

form.addEventListener("submit", (e) => {
    
    resetForm();

    const cardNumber = cardNumberInput.value.replace(/\s/g, "");

    // Validate card name
    const cardName = cardNameInput.value;
    if (!cardName) {
        alert(alertCardName, cardNameInput);
    } else {
        isNameOk = true;
    }

    // Validate card number
    if (!cardNumber.match(numberRegex)) {
        alert(alertCardNumber, cardNumberInput);
    } else {
        isNumberOk = true;
    }

    // Validate Exp. month date
    const cardExpMonth = parseInt(cardExpMonthInput.value);
    const cardExpYear = parseInt(cardExpYearInput.value);
    if (!cardExpMonth) {
        alert(alertCardDate, cardExpMonthInput);
    } else if (cardExpMonth === 0 || cardExpMonth > 12) {
        alertCardDate.innerHTML = "Month must be between 1 and 12"
        alert(alertCardDate, cardExpMonthInput);
    } else {
        isMonthOk = true;
        if (!cardExpYear) {
            alert(alertCardDate, cardExpYearInput); 
        } else {
            isYearOk = true;
        }
    }

    // Validate Cvc
    const cardCvc = parseInt(cardCvcInput.value);
    if (!cardCvc) {
        alertCardCvc.innerHTML = "Must be a number"
        alert(alertCardCvc, cardCvcInput);
    } else {
        isCvcOk = true;
    }

    // Check errors or submit
    if (isNameOk && isNumberOk && isMonthOk && isYearOk && isCvcOk) {
        e.preventDefault();
        form.classList.add("hide-element");
        document.querySelector(".complete-state").classList.remove("hide-element");
    } else {
        e.preventDefault();
        console.log(isNameOk, isNumberOk, isMonthOk, isYearOk, isCvcOk);
    }
    
});

function alert(alertMessage, elementInput) {
    alertMessage.classList.add("alert-message-show");
    elementInput.classList.add("alert-input");
}

function resetForm() {
    document.querySelectorAll(".alert-message-show").forEach(element => {
        element.classList.remove("alert-message-show");
    }); 
    document.querySelectorAll(".alert-input").forEach(element => {
        element.classList.remove("alert-input");
    }); 
}

continueButton.addEventListener("click", () => {
    location.reload();
});