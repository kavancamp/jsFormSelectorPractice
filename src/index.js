function clicked() {
  alert("Hooray");
}

let btn = document.querySelector("#special-button");
btn.addEventListener("click", clicked);
console.log(btn);

function displaying(event) {
  event.preventDefault();
  let pass = document.querySelector("#password-input");
  alert(`${pass.value}`);
}

let pass = document.querySelector("form");
pass.addEventListener("submit", displaying);

function alerting(event) {
  event.preventDefault();
  let email = document.querySelector("#email-input");
  let use = document.querySelector("#username-input");
  alert(`${use.value}  ${email.value} `);
}

let sign = document.querySelector("#signup-form");
sign.addEventListener("submit", alerting);
