const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const topSection = document.querySelector(".top-section");
const middleSection = document.querySelector(".middle-section");
const lowerSection = document.querySelector(".lower-section");
const footerSection = document.querySelector(".footer");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
  topSection.classList.toggle("hide");
  middleSection.classList.toggle("hide");
  lowerSection.classList.toggle("hide");
  footerSection.classList.toggle("hide");
 if (hamburger.getAttribute('src') ==="./images/icon-hamburger.svg") {
   hamburger.setAttribute('src', "./images/icon-close.svg");
 }
 else {
   hamburger.setAttribute('src', "./images/icon-hamburger.svg");
 }
});
