let dayInput = document.getElementById("day");
let monthInput = document.getElementById("month");
let yearInput = document.getElementById("year");

let dayLabel = document.getElementById("dayLabel");
let dayDiv = document.getElementById("dayDiv");

let monthLabel =document.getElementById("monthLabel");
let monthDiv = document.getElementById("monthDiv");






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
    let month = monthInput.value;
    if (month<1 || month>12) {
        monthLabel.classList.add('error');
        monthInput.classList.add('errorInput');
        monthDiv.innerHTML += `<p class="error">Must be a valid month</p>`
        console.log('error');
    }
}

const getYear = () => {
    let year = yearInput.value;
    let currentYear = new Date().getFullYear();
    console.log(year)
    if (year > currentYear) {
        yearLabel.classList.add('error');
        yearInput.classList.add('errorInput');
        yearDiv.innerHTML += `<p class="error">Must be a valid year</p>`
        console.log('error');
    }
}


dayInput.addEventListener('input', getDay)
monthInput.addEventListener('input', getMonth)
yearInput.addEventListener('input', getYear)