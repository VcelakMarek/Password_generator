const rangeValue = document.getElementById("password-length-range");
const characterLength = document.getElementsByClassName("number-of-characters")[0];

rangeValue.addEventListener("mousemove", () => {
    characterLength.textContent = rangeValue.value;
})


const checkboxlist = document.getElementById("checkbox-list");
const strengthStates = document.getElementsByClassName("strength-states")[0];
const strengthLevel = document.getElementsByClassName("strength-level")[0];

checkboxlist.addEventListener("change", () => {
    const numberOfChecked = document.querySelectorAll('input[type="checkbox"]:checked').length

    if (numberOfChecked === 1) {
        strengthLevel.textContent = "TOO WEAK!";
        strengthStates.className = "strength-states strength-red";

    } else if (numberOfChecked === 2) {
        strengthLevel.textContent = "WEAK";
        strengthStates.className = "strength-states strength-orange";

    } else if (numberOfChecked === 3) {
        strengthLevel.textContent = "MEDIUM";
        strengthStates.className = "strength-states strength-yellow";

    } else if (numberOfChecked === 4) {
        strengthLevel.textContent = "STRONG";
        strengthStates.className = "strength-states strength-green";

    } else {
        strengthLevel.textContent = "";
        strengthStates.className = "strength-states";
    }
})


const display = document.getElementsByClassName("generated-password")[0];

function generatePassword (length) {

    let generatedPassword = "";
    let generateFrom = "";

    const uppercaseCheck = document.getElementById("uppercase").checked
    const lowercaseCheck = document.getElementById("lowercase").checked
    const numberCheck = document.getElementById("numbers").checked
    const symbolsCheck = document.getElementById("symbols").checked

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxy";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()";
    
    if (uppercaseCheck) {
        generateFrom += uppercase;
    }
    if (lowercaseCheck) {
        generateFrom += lowercase;
    }
    if (numberCheck) {
        generateFrom += numbers;
    }
    if (symbolsCheck) {
        generateFrom += symbols;
    }

    for ( let i = 0; i < length; i++ ) {
        generatedPassword += generateFrom.charAt(Math.floor(Math.random() * generateFrom.length));
    }

    display.textContent = generatedPassword;
    display.className = "color-white";
}


const generateButton = document.getElementsByTagName("button")[0];

generateButton.addEventListener("click", () => {
    generatePassword(characterLength.textContent);
})


const copyIcon = document.getElementsByClassName("copy-icon")[0]; 

copyIcon.addEventListener("click", () => {
    document.getElementsByClassName("copied")[0].className = "copied copied-visible";
    navigator.clipboard.read(display.textContent);
})