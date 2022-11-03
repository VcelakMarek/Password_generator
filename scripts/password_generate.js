const rangeValue = document.getElementById("password-length-range");
const characterLength = document.getElementsByClassName("number-of-characters")[0];

rangeValue.addEventListener("mousemove", () => {
    characterLength.textContent = rangeValue.value;
})

rangeValue.addEventListener("click", () => {
    characterLength.textContent = rangeValue.value;
})


const checkboxlist = document.getElementById("checkbox-list");
const strengthStates = document.getElementsByClassName("strength-states")[0];
const strengthLevel = document.getElementsByClassName("strength-level")[0];

checkboxlist.addEventListener("change", () => {
    const numberOfChecked = document.querySelectorAll('input[type="checkbox"]:checked').length

    switch (numberOfChecked) {
        case 1:
            strengthLevel.textContent = "TOO WEAK!";
            strengthStates.className = "strength-states strength-red";
        break;
        case 2:
            strengthLevel.textContent = "WEAK";
            strengthStates.className = "strength-states strength-orange";
            break;
        case 3:
            strengthLevel.textContent = "MEDIUM";
            strengthStates.className = "strength-states strength-yellow";
            break;
        case 4:
            strengthLevel.textContent = "STRONG";
            strengthStates.className = "strength-states strength-green";
        break;
        default:
            strengthLevel.textContent = "";
            strengthStates.className = "strength-states";
    }
})


const display = document.getElementsByClassName("generated-password")[0];

function generatePassword (length) {

    let generatedPassword = "";
    let generateFrom = "";


   // const uppercaseCheck = document.getElementById("uppercase").checked
   // const lowercaseCheck = document.getElementById("lowercase").checked
   // const numberCheck = document.getElementById("numbers").checked
   // const symbolsCheck = document.getElementById("symbols").checked
    
    const checkboxCheck = {uppercaseCheck: document.getElementById("uppercase").checked,
        lowercaseCheck:document.getElementById("lowercase").checked,
        numberCheck: document.getElementById("numbers").checked,
        symbolsCheck: document.getElementById("symbols").checked}

    const characters = {uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", lowercase: "abcdefghijklmnopqrstuvwxy", numbers: "0123456789", symbols: "!@#$%^&*()"};

    if (checkboxCheck.uppercaseCheck) {
        generateFrom += characters.uppercase;
    }
    if (checkboxCheck.lowercaseCheck) {
        generateFrom += characters.lowercase;
    }
    if (checkboxCheck.numberCheck) {
        generateFrom += characters.numbers;
    }
    if (checkboxCheck.symbolsCheck) {
        generateFrom += characters.symbols;
    }

    for ( let i = 0; i < length; i++ ) {
        generatedPassword += generateFrom.charAt(Math.floor(Math.random() * generateFrom.length));
    }


    function dynamicDisplayTextSize (length) {
        if (length > 13) {
            if (window.innerWidth >= "800") {
                let substractWidth = (32 - (length/5));
                display.style.fontSize = substractWidth + "px";
            } else {
                let substractWidth = (24 - (length/3));
                display.style.fontSize = substractWidth + "px";
            }
        }
        else {
            if (window.innerWidth >= "800") {
                display.style.fontSize = "32px";
            } else {
                display.style.fontSize = "24px";
            }    
        }
    }

    dynamicDisplayTextSize(length);

    window.addEventListener('resize', () => { 
        dynamicDisplayTextSize(length);
    })

    display.textContent = generatedPassword;
    display.className = "color-white";
}


const copyIcon = document.getElementsByClassName("copy-icon")[0]; 
const copied = document.getElementsByClassName("copied")[0];

copyIcon.addEventListener("click", () => {
    copied.className = "copied copied-visible";
    navigator.clipboard.writeText(display.textContent).then(() => {
    });
})


const generateButton = document.getElementsByTagName("button")[0];

generateButton.addEventListener("click", () => {
    generatePassword(characterLength.textContent);
    copied.className = "copied";
})