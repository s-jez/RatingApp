const btnsRating = document.querySelectorAll(".btn__rating");
const btnSubmit = document.querySelector(".btn__submit");
const modal = document.querySelector(".modal");
let ratingValue;

btnsRating.forEach((btn) => {
  btn.addEventListener("click", (ev) => {
    btn.style.background = "hsl(25, 97%, 53%)";
    ratingValue = ev.target.innerText;
  });
});

const submitFn = () => {
  alert(`Your submitted form, with ${ratingValue} stars.`);
  modal.style.display = "block";
  isClicked = true;
  setTimeout(() => {
    modal.style.display = "none";
  }, 5000);
};

btnSubmit.addEventListener("click", submitFn);
