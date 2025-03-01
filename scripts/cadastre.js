const $inputStudentName = document.querySelector("#nameStudentCadastre");
const $inputDayBirth = document.querySelector("#dayBirthCadastre");
const $inputMonthBirth = document.querySelector("#monthSelect");
const $inputYearBirth = document.querySelector("#yearBirthCadastre");
const $inputNameMother = document.querySelector("#nameMotherCadastre");
const $inputNameFather = document.querySelector("#nameFatherCadastre");
const $inputResponsibleName = document.querySelector(
  "#nameResponsibleCadastre"
);
const $inputResponsibleCPF = document.querySelector("#cpfResponsibleCadastre");
const $inputResponsibleEmail = document.querySelector(
  "#emailResponsibleCadastre"
);
const $inputResponsibleTel = document.querySelector("#telResponsibleCadastre");
const form = document.querySelector("#formCadastre");
let isValidForm = false;

form.onsubmit = (event) => {
  event.preventDefault();
  checkForm();
};

let checkForm = () => {
  checkRadiosInput();
  checkTextInputs();
  if (isValidForm) {
    alert("Form enviado");
    const cadastro = {
      name: $inputStudentName.value,
      dateBirth: {
        day: $inputDayBirth.value,
        month: $inputMonthBirth.value,
        year: $inputYearBirth.value,
      },
      nameMother: $inputNameMother.value,
      nameFather: $inputNameFather.value,
      responsiblePersonName: $inputResponsibleName.value,
      responsiblePersonCPF: $inputResponsibleCPF.value,
      responsiblePersonEmail: $inputResponsibleEmail.value,
      responsiblePersonPhone: $inputResponsibleTel.value,
      ageGroup: document.querySelector('input[name="ageGroup"]:checked').value,
      acceptTerms: document.querySelector('input[name="terms"]:checked').value,
    };
    console.log(cadastro)
  } else {
    newError("Por favor, prencha todos os campos obrigatórios");
  }
};

let checkRadiosInput = () => {
  const $ageGroupRadio = document.querySelector(
    'input[name="ageGroup"]:checked'
  );
  const $termsRadio = document.querySelector('input[name="terms"]:checked');
  if ($ageGroupRadio === null || $termsRadio === null) {
    newError("Por favor, selecione ao menos uma opção.");
  } else {
    return (isValidForm = true);
  }
};

let newError = (message) => {
  const errorToast = new bootstrap.Toast(document.getElementById("liveToast"));
  document.querySelector(".toast-body").textContent = message;
  errorToast.show();
};

let checkTextInputs = () => {
    const inputs = [$inputStudentName, $inputNameMother, $inputNameFather]
    isValidForm = inputs.every((input) => input.value !== "")
    inputs.map((input) => {
        onlyLetters()
    })
}

let onlyLetters = (input) => {
    return input.replace(/[^A-Za-zÀ-ÿ\s]/gu, "")
}