const form = document.querySelector("form");

form.onsubmit = (event) => {
  event.preventDefault();
};

const $loginContainer = document.querySelector("#login");
const $singupContainer = document.querySelector("#singup");

document.querySelector("#signUpBtn").onclick = () => {
  $loginContainer.classList.add("fade-out"); // animação de saída
  setTimeout(() => {
    $loginContainer.classList.add("d-none"); // elemento que sai
    $loginContainer.classList.remove("fade-out"); // remove animação para evitar conflito

    $singupContainer.classList.remove("d-none"); // elemento que chega
    $singupContainer.classList.add("fade-in"); // com animação
  }, 100);
};

document.querySelector("#loginBtn").onclick = () => {
  $singupContainer.classList.add("fade-out"); // elemento que sai
  setTimeout(() => {
    $singupContainer.classList.add("d-none");
    $singupContainer.classList.remove("fade-out");

    $loginContainer.classList.remove("d-none");
    $loginContainer.classList.add("fade-in");
  }, 100);
};

const readMoreBtn = document.querySelector(".text-decoration-underline");
readMoreBtn.addEventListener("click", () => {
  readMoreBtn.nextElementSibling.classList.toggle("d-none");
  if (readMoreBtn.nextElementSibling.classList.contains("d-none")) {
    readMoreBtn.textContent = "Read More";
  } else {
    readMoreBtn.textContent = "Read Less";
  }
});
