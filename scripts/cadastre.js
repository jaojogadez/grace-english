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
const ageGroup = document.querySelector('input[name="ageGroup"]:checked');
const terms = document.querySelector('input[name="terms"]:checked');
const radios = document.querySelectorAll('input[name="ageGroup"]');
const radioselect = document.querySelector('input[name="ageGroup"]:checked');


form.onsubmit = (event) => {
  event.preventDefault();
  checkForm();
};

let checkForm = () => {

  const radios = document.querySelectorAll('input[name="ageGroup"]');
  const radioselect = document.querySelector('input[name="ageGroup"]:checked');
  console.log(radios);
  console.log(radioselect.value);
};
