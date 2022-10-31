let rangeValue = document.getElementById("password-length-range");
const characterLength = document.getElementsByClassName("number-of-characters")[0];


rangeValue.addEventListener("change", () => {
    characterLength.textContent = rangeValue.value;
})

let checkboxlist = document.getElementById("checkbox-list");




let uppercase = document.getElementById("uppercase")
let lovercase = document.getElementById("lowercase")
let number = document.getElementById("numbers")
let symbols = document.getElementById("symbols")


let strength = document.getElementsByTagName("progress")[0];


let progressBar = document.querySelectorAll('input[type="progress"]::-webkit-progress-value'); //repair

let strengthLevel = document.getElementsByClassName("strength-level")[0];

checkboxlist.addEventListener("change", (event) => {
    let realTimeChecked = document.querySelectorAll('input[type="checkbox"]:checked').length
    strength.value = realTimeChecked;

    console.log("realtime", typeof realTimeChecked, realTimeChecked)

    if (realTimeChecked === 1) {
        strengthLevel.textContent = "TOO WEAK!"
        progressBar.style.backgroundColor = "red"; //repair

   } else if (realTimeChecked === 2) {
    strengthLevel.textContent = "WEAK"

   } else if (realTimeChecked === 3) {
    strengthLevel.textContent = "MEDIUM"

   } else if (realTimeChecked === 4) {
    strengthLevel.textContent = "STRONG"

   } else {
    strengthLevel.textContent = ""
   }



    console.log(event.target.id);
    console.log(event.target.checked);
let checked = event.target.id;
console.log("checked:",checked);
})


