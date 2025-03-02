const form = document.querySelector("form");

form.onsubmit = (event) => {
    event.preventDefault();
}

const readMoreBtn = document.querySelector(".form-check-label strong")
readMoreBtn.addEventListener("click", () => {
    readMoreBtn.parentElement.nextElementSibling.classList.toggle("d-none")
    if(readMoreBtn.parentElement.nextElementSibling.classList.contains("d-none")){
        readMoreBtn.textContent = "Read More"
    } else {
        readMoreBtn.textContent = "Read Less"
    }
})