
const signup_btn = document.querySelector("#signup_btn")
const signin_btn = document.querySelector("#signin_btn");
const container = document.querySelectorAll(".container");


// signup_btn.addEventListener('click', () => container.classList.add('right_panel_active'));
// signin_btn.addEventListener('click', () => container.classList.remove('right_panel_active'));




// ================= SEARCH BAR ================= //

const icon = document.querySelector('.icon')
const search = document.querySelector('.search');
const clear = document.querySelector('.clear')
let new_input = document.querySelector('#new_input');

// icon.addEventListener("click", () => search.classList.toggle('active'));
clear.addEventListener("click", () => new_input.value = '');


// setInterval(() => {
//     search.classList.remove('active')
// }, 7000);


//  Add Event => enter button => search data