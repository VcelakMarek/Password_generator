let rangeValue = document.getElementById("password-length-range");
const characterLength = document.getElementsByClassName("number-of-characters")[0];


rangeValue.addEventListener("change", () => {
    rangeValue.addEventListener("mousemove", () => {
        characterLength.textContent = rangeValue.value;
    })
})

let checkboxlist = document.getElementById("checkbox-list");





let strength = document.getElementsByTagName("progress")[0];


let progressBar = document.getElementsByTagName("progress")[0]; //repair

let strengthLevel = document.getElementsByClassName("strength-level")[0];

checkboxlist.addEventListener("change", (event) => {
    let realTimeChecked = document.querySelectorAll('input[type="checkbox"]:checked').length
    strength.value = realTimeChecked;

    if (realTimeChecked === 1) {
        strengthLevel.textContent = "TOO WEAK!";
        progressBar.className = "progress-red";

    } else if (realTimeChecked === 2) {
        strengthLevel.textContent = "WEAK";
        progressBar.className = "progress-orange";

    } else if (realTimeChecked === 3) {
        strengthLevel.textContent = "MEDIUM";
        progressBar.className = "progress-yellow";

    } else if (realTimeChecked === 4) {
        strengthLevel.textContent = "STRONG";
        progressBar.className = "progress-green";

    } else {
        strengthLevel.textContent = ""
    }


    console.log(event.target.id);
    console.log(event.target.checked);
let checked = event.target.id;
console.log("checked:",checked);
})



function generatePassword (length) {
    let password = [];
    let uppercase = document.getElementById("uppercase").checked
    let lovercase = document.getElementById("lowercase").checked
    let number = document.getElementById("numbers").checked
    let symbols = document.getElementById("symbols").checked


    console.log(uppercase)
    if (uppercase) {
        console.log("uppercase TRUE")
    }

 //   var lowercase = "abcdefghijklmnopqrstuvwxy";
 //   var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 //   var numbers = "0123456789";
 //   var symbols = "!@#$%^&*()";
    

}

const generateButton = document.getElementsByTagName("button")[0];
generateButton.addEventListener("click", () => {
    generatePassword(characterLength.textContent);
})
