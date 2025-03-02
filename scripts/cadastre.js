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
  checkTextInputs();
  if (isValidForm) {
    // OBJECT WITH INPUTS VALUES
    const cadastro = {
      name: $inputStudentName.value,
      dateBirth: dateBirth($inputDayBirth, $inputMonthBirth, $inputYearBirth),
      age: new Date().getFullYear() - (Number.parseInt($inputYearBirth.value)),
      nameMother: $inputNameMother.value,
      nameFather: $inputNameFather.value,
      responsiblePersonName: $inputResponsibleName.value,
      responsiblePersonCPF: $inputResponsibleCPF.value,
      responsiblePersonEmail: $inputResponsibleEmail.value,
      responsiblePersonPhone: $inputResponsibleTel.value,
      ageGroup: document.querySelector('input[name="ageGroup"]:checked').value,
      acceptTerms: document.querySelector('input[name="terms"]:checked').value,
      dateCadastre: new Date().toLocaleDateString(),
      id: new Date().getTime(),
    };
    console.log(cadastro); // SIMULATE SUBMIT FORM
    document.querySelector("#submitForm").classList.remove("d-none");
  } else {
    newError("Por favor, prencha todos os campos obrigatórios");
  }
};

// CHECK EMAIL INPUT
let validateEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  email.addEventListener("input", () => {
    return isValidForm = regex.test(email.value);
  });
};

// CHECK CPF INPUT
let validateCpf = (cpf) => {
  cpf.addEventListener("input", () => {
    cpf.value = cpf.value.slice(0, 11).replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{2})$/, "$1-$2")
  });
};

// CHECK TEL INPUT
let validatePhone = (phone) => {
  phone.addEventListener("input", () => {
    phone.value = phone.value.slice(0, 11).replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1 $2")
  });
};

validateEmail($inputResponsibleEmail);
validateCpf($inputResponsibleCPF);
validatePhone($inputResponsibleTel)

// CREATE A BOOTSTRAP TOAST FOR INVALID INPUTS
let newError = (message) => {
  const errorToast = new bootstrap.Toast(document.getElementById("liveToast"));
  document.querySelector(".toast-body").textContent = message;
  errorToast.show();
};

// FORMAT BIRTH DAY 
let dateBirth = (day, month, year) => {
  dayValue = day.value.toString().padStart(2, "0")
  monthValue = month.value.toString().padStart(2, "0")
  yearValue = year.value
  formatedDateBirth = `${dayValue}/${monthValue}/${yearValue}` // 00/00/0000
  return formatedDateBirth;
}

// CHECK ALL INPUTS IS NOT EMPTY
let checkTextInputs = () => {
  const inputs = [$inputStudentName, $inputNameFather, $inputNameMother];
  return isValidForm = inputs.every((input) => input.value !== "");
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

// DEFINE MAX LENGHT FOR DATE INPUTS
$inputDayBirth.oninput = () => {
  $inputDayBirth.value = $inputDayBirth.value.slice(0, 2)
}
$inputYearBirth.oninput = () => {
  $inputYearBirth.value = $inputYearBirth.value.slice(0, 4)
}

let clearInputs = () => {
  Array.from(document.querySelectorAll("input")).map((input) => input.value = "")
}


// SUBMIT FORM
form.onsubmit = (event) => {
  event.preventDefault();
  checkForm();
};
