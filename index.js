let dayInput = document.getElementById("day");
let monthInput = document.getElementById("month");
let yearInput = document.getElementById("year");

let dayLabel = document.getElementById("dayLabel");
let dayDiv = document.getElementById("dayDiv");

let monthLabel =document.getElementById("monthLabel");
let monthDiv = document.getElementById("monthDiv");


let month = monthInput.value;

let year = yearInput.value;

const getDay = () => {
    let day = dayInput.value;

    if (day<1 || day>31) {
        dayLabel.classList.add('error');
        dayInput.classList.add('errorInput');
        dayDiv.innerHTML += `<p class="error">Must be a valid day</p>`
        console.log('error');
    } 
}

const getMonth = () => {
    if (month<1 || month>12) {
        monthLabel.classList.add('error');
        monthInput.classList.add('errorInput');
        monthDiv.innerHTML += `<p class="error">Must be a valid month</p>`
        console.log('error');
    }
}


dayInput.addEventListener('input', getDay)
monthInput.addEventListener('input', getMonth)
yearInput.addEventListener('input', ()=>{})