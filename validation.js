// Selecciona todo formulario
const submitForm = document.getElementById("form")

submitForm.addEventListener("submit", function (event) {

    // Previene enviar el formulario sin hacer validacion
    event.preventDefault()

    // Inputs
    let card = document.getElementById("card");
    let cvc = document.getElementById("cvc");
    let amount = document.getElementById("amount");
    let fristName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let city = document.getElementById("cityInput");
    let state = document.getElementById("stateInput");
    let postal = document.getElementById("postalCode");

    // Credit Card
    // Regular expression for credit cards
    const creditPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
    let result = creditPattern.test(card.value)
    if (!result) {

        card.classList.add("is-invalid");

    } else {

        card.classList.remove("is-invalid");
        card.classList.add("is-valid");

    }

    if (cvc.value.length <= 2 || cvc.value.length >= 4) {

        cvc.classList.add("is-invalid");

    } else {

        cvc.classList.remove("is-invalid");
        cvc.classList.add("is-valid");
    }

    const number = /^[0-9]+$/;
    let resultAmount = number.test(amount.value);
    if (!resultAmount)  {

        amount.classList.add("is-invalid");

     } else {

        amount.classList.remove("is-invalid");
        amount.classList.add("is-valid");

    }

    if (firstName.value === "" || firstName.value === null)  {

        firstName.classList.add("is-invalid");

     } else {

        firstName.classList.remove("is-invalid");
        firstName.classList.add("is-valid");

    }

    if (lastName.value === "" || lastName.value === null)  {

        lastName.classList.add("is-invalid");
        
     } else {
        lastName.classList.remove("is-invalid");
        lastName.classList.add("is-valid");
    }

    if (city.value === "" || city.value === null) {

        city.classList.add("is-invalid");


    } else {

        city.classList.remove("is-invalid");
        city.classList.add("is-valid");
        
    }

    if (state.value == "Choose...") {

        state.classList.add("is-invalid");

    } else {

        state.classList.remove("is-invalid");
        state.classList.add("is-valid");

    }

    if (postal.value.length == 0 || postal.value.length == 6 || postal.value.length == 10) {

        postal.classList.add("is-invalid");

    } else {

        postal.classList.remove("is-invalid");
        postal.classList.add("is-valid");
        
    }
    
});
