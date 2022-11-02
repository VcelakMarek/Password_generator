let rangeValue = document.getElementById("password-length-range");
let characterLength = document.getElementsByClassName("number-of-characters")[0];

//rangeValue.addEventListener("change", () => {
    rangeValue.addEventListener("mousemove", () => {
        characterLength.textContent = rangeValue.value;
    })
//})

let checkboxlist = document.getElementById("checkbox-list");
let strengthStates = document.getElementsByClassName("strength-states")[0];
let strengthLevel = document.getElementsByClassName("strength-level")[0];

console.log(strengthStates);

checkboxlist.addEventListener("change", (event) => {
    let realTimeChecked = document.querySelectorAll('input[type="checkbox"]:checked').length


    if (realTimeChecked === 1) {
        strengthLevel.textContent = "TOO WEAK!";
        strengthStates.className = "strength-states strength-red";

    } else if (realTimeChecked === 2) {
        strengthLevel.textContent = "WEAK";
        strengthStates.className = "strength-states strength-orange";

    } else if (realTimeChecked === 3) {
        strengthLevel.textContent = "MEDIUM";
        strengthStates.className = "strength-states strength-yellow";

    } else if (realTimeChecked === 4) {
        strengthLevel.textContent = "STRONG";
        strengthStates.className = "strength-states strength-green";

    } else {
        strengthLevel.textContent = "";
        strengthStates.className = "strength-states";
    }
})

let generatedPassword = "";
let generateFrom = "";

function generatePassword (length) {
    
    
//    if (generatedPassword) {
//        let generatedPassword = "";
//       return generatedPassword;
//    }

    let generatedPassword = "";
    let generateFrom = "";

    console.log("type of generatedPassword:", typeof generatedPassword)


//
//    let generateFrom = "";


    let uppercaseCheck = document.getElementById("uppercase").checked
    let lowercaseCheck = document.getElementById("lowercase").checked
    let numberCheck = document.getElementById("numbers").checked
    let symbolsCheck = document.getElementById("symbols").checked

    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxy";
    var numbers = "0123456789";
    var symbols = "!@#$%^&*()";
  
    if (uppercaseCheck) {
        generateFrom += uppercase;
    }
    if (lowercaseCheck) {       //add must generate at least 1 lowercase
        generateFrom += lowercase;
    }
    if (numberCheck) {
        generateFrom += numbers;
    }
    if (symbolsCheck) {
        generateFrom += symbols;
    }


// add error when nothing is checked or 0 length


for ( let i = 0; i < length; i++ ) {
    generatedPassword += generateFrom.charAt(Math.floor(Math.random() * generateFrom.length));
 }

let display = document.getElementsByClassName("generated-password")[0];
display.textContent = "";

console.log (generatedPassword);

//if (generatedPassword) {
//    display.innerHTML = generatedPassword;
//}
display.innerHTML = generatedPassword;

//if (display.className != "color-white") {
    display.className = "color-white";
//}

generateFrom = "";
}

const generateButton = document.getElementsByTagName("button")[0];
generateButton.addEventListener("click", () => {
    generatePassword(characterLength.textContent);
})







  //not working
  document.getElementsByClassName("copied")[0].addEventListener("click", () => {
    document.getElementsByClassName("copy-icon")[0].className = "copied copied-visible";
  });



// range bar
  document.getElementById("password-length-range").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #A4FFAF 0% ' + value + '%,  ' + value + '%, #18171F 100%)'
  };