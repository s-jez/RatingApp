const btnsRating = document.querySelectorAll(".btn__rating");
const btnSubmit = document.querySelector(".btn__submit");
const modal = document.querySelector(".modal");
let ratingValue;

btnsRating.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    ratingValue = event.target.innerText;
    modal.style.display = "none";
  });
});

const submitForm = () => {
  localStorage.setItem("rating", ratingValue);
  if (localStorage.getItem("rating") != 0) {
    modal.style.display = "block";
    setTimeout(() => {
      modal.style.display = "none";
    }, 5000);
  }
  ratingValue = 0;
};

btnSubmit.addEventListener("click", submitForm);
