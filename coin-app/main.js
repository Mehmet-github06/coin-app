import "./scss/style.scss";
import { apiRequest } from "./src/apiRequest";

const form = document.querySelector("header form");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
  getcoinData();
  e.target.reset();
});

const getcoinData = () => {
  const input = document.querySelector("header form input").value;
  if (!input.trim()) {
    alert("Input can not be blank");
  } else {
    apiRequest(input);
  }
};
