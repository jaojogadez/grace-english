// HTML INPUTS
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
const textInputs = document.querySelectorAll(".stringTypeInput");
const numberInputs = document.querySelectorAll(".numberTypeInput");
let isValidForm = false; // CONTROL ERRORS

// CHECK INPUTS FORM
let checkForm = () => {
  checkRadiosInput();
  checkTextInputs();
  if (isValidForm) {
    alert("Form enviado"); // FOR VIEW
    // OBJECT WITH INPUTS VALUES
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
  } else {
    newError("Por favor, prencha todos os campos obrigatórios");
  }
};

// CHECK RADIO INPUTS WAS CHECKED
let checkRadiosInput = () => {
  const $ageGroupRadio = document.querySelector(
    'input[name="ageGroup"]:checked'
  );
  const $termsRadio = document.querySelector('input[name="terms"]:checked');
  if ($ageGroupRadio !== null || $termsRadio !== null) {
    return (isValidForm = true);
  }
};

// CREATE A BOOTSTRAP TOAST FOR INVALID INPUTS
let newError = (message) => {
  const errorToast = new bootstrap.Toast(document.getElementById("liveToast"));
  document.querySelector(".toast-body").textContent = message;
  errorToast.show();
};

// CHECK ALL INPUTS IS NOT EMPTY
let checkTextInputs = () => {
  const inputs = document.querySelectorAll("input");
  isValidForm = Array.from(inputs).every((input) => input.value !== "");
};

// REGEX FOR ALL INPUTS TYPEOF TEXT
textInputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.value = onlyLetters(input.value);
  });
});

// REGEX FOR ALL INPUTS TYPEOF NUMBER
numberInputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.value = onlyNumbers(input.value);
  });
});

// REGEX FOR TEXT INPUTS
let onlyLetters = (value) => {
  return value.replace(/[^A-Za-zÀ-ÿ\s]/gu, "");
};

// REGEX FOR NUMBER INPUTS
let onlyNumbers = (value) => {
  return value.replace(/\D/g, "");
};

// REGEX FOR EMAIL INPUT
let validateEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email)
};

// SUBMIT FORM
form.onsubmit = (event) => {
  event.preventDefault();
  checkForm();
};
