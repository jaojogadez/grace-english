// FORM CONTACT VALIDATE START
const $inputMessage = document.querySelector("#messageContact");
const $formContact = document.querySelector("#formContact");
const $inputEmail = document.querySelector("#emailContact");
const $inputName = document.querySelector("#nameContact");
const $inputTel = document.querySelector("#telContact");

let validateEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

$formContact.onsubmit = (event) => {
  try {
    const message = {
      name: $inputName.value,
      tel: $inputTel.value,
      email: $inputEmail.value,
      description: $inputMessage.value,
    };
    if (validateEmail($inputEmail.value)) {
      // Enviar formulário
      console.log("Form Enviado com Sucesso");
      console.log(message);
    } else {
      console.log("Preencha todos os campos corretamente");
    }
  } catch (error) {
    console.log(error);
  }
};

function resetForm() {
  const form = document.getElementById("formContact");
  const success = document.getElementById("successMessage");

  // limpa os campos
  form.reset();

  // remove validação visual do bootstrap
  form.classList.remove("was-validated");

  // mostra o formulário novamente
  form.classList.remove("d-none");

  // esconde a mensagem de sucesso
  success.classList.add("d-none");
}


// FORM CONTACT VALIDATE END
