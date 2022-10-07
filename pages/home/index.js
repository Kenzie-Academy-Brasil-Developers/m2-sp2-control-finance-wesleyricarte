let all = true;
let pos = false;
let neg = false;

// CREATING LI'S
const containerBody = document.getElementById("container-body");

function createEachValue(arr) {
  hiddenSectionEmpty(insertedValues);
  const ulValues = document.querySelector(".ul-values");
  ulValues.innerHTML = "";
  arr.forEach((element) => {
    const divIndividualValue = document.createElement("li");
    const spanActualValue = document.createElement("span");
    const divIndividualClassValue = document.createElement("div");
    const buttonCategoryIDIndividual = document.createElement("button");
    const iconTrash = document.createElement("i");

    divIndividualValue.classList.add("div-individual-value");
    spanActualValue.classList.add("actual-value", "text1-medium");
    divIndividualClassValue.classList.add("div-individual-class-value");
    buttonCategoryIDIndividual.classList.add(
      "buttons-default",
      "buttons-greylow"
    );
    iconTrash.classList.add("fa-solid", "fa-trash");

    let categ = element.categoryID == 1 ? valuesCategory[0] : valuesCategory[1];
    spanActualValue.innerText = `R$ ${element.value}`;
    buttonCategoryIDIndividual.innerText = categ;

    iconTrash.addEventListener("click", (event) => {
      let newValues = insertedValues.filter((i) => {
        return i.id != element.id;
      });

      insertedValues = [...newValues];
      createEachValue(insertedValues);
      hiddenSectionEmpty(insertedValues);
      hiddenSectionResume(insertedValues);
      attSumResult(insertedValues, all, pos, neg);
      console.log(insertedValues);
    });

    ulValues.append(divIndividualValue);
    divIndividualClassValue.append(buttonCategoryIDIndividual, iconTrash);
    divIndividualValue.append(spanActualValue, divIndividualClassValue);
    attSumResult(insertedValues, all, pos, neg);
  });
}
createEachValue(insertedValues);

// HIDDEN ADD NEW VALUE SECTION
function hiddenSectionEmpty(arr) {
  const sectionEmpty = document.querySelector(".section-add-new-value");
  if (arr.length === 0) {
    sectionEmpty.classList.remove("hidden");
  } else {
    sectionEmpty.classList.add("hidden");
  }
}

// HIDDEN RESUME VALUES SECTION
function hiddenSectionResume(arr) {
  const sectionResume = document.querySelector(".section-resume");
  if (arr.length === 0) {
    sectionResume.classList.add("hidden");
  } else {
    sectionResume.classList.remove("hidden");
  }
}

// ATT SUM RESULT
function attSumResult(arr, all, pos, neg) {
  let sumAllValues = 0;
  arr.forEach((element) => {
    if (element.categoryID === 1) {
      sumAllValues += element.value;
    } else if (element.categoryID === 2) {
      sumAllValues -= element.value;
    }
  });

  let sum1Values = 0;
  arr.forEach((element) => {
    element.categoryID === 1 ? (sum1Values += element.value) : sum1Values;
  });

  let sum2Values = 0;
  arr.forEach((element) => {
    element.categoryID === 2 ? (sum2Values -= element.value) : sum2Values;
  });

  const idSum = document.querySelector("#sum-all-values");
  if (all) {
    idSum.innerText = `R$ ${sumAllValues}`;
  } else if (pos) {
    idSum.innerText = `R$ ${sum1Values}`;
  } else if (neg) {
    idSum.innerText = `R$ ${sum2Values}`;
  } else {
    idSum.innerText = "Sem valores selecionados";
  }
}

const buttonAll = document.querySelector("#button-all");
const buttonPos = document.querySelector("#button-pos");
const buttonNeg = document.querySelector("#button-neg");
buttonAll.classList.add("input-hidden-checked");

buttonAll.addEventListener("click", (event) => {
  event.preventDefault();
  all = true;
  pos = false;
  neg = false;

  buttonAll.classList.add("input-hidden-checked");
  buttonPos.classList.remove("input-hidden-checked");
  buttonNeg.classList.remove("input-hidden-checked");

  attSumResult(insertedValues, all, pos, neg);

  createEachValue(insertedValues);
});

buttonPos.addEventListener("click", (event) => {
  event.preventDefault();
  all = false;
  pos = true;
  neg = false;

  buttonAll.classList.remove("input-hidden-checked");
  buttonPos.classList.add("input-hidden-checked");
  buttonNeg.classList.remove("input-hidden-checked");

  attSumResult(insertedValues, all, pos, neg);

  let positiveValues = insertedValues.filter((index) => {
    return index.categoryID == 1;
  });
  let posArray = [...positiveValues];
  createEachValue(posArray);
});

buttonNeg.addEventListener("click", (event) => {
  event.preventDefault();
  all = false;
  pos = false;
  neg = true;

  buttonAll.classList.remove("input-hidden-checked");
  buttonPos.classList.remove("input-hidden-checked");
  buttonNeg.classList.add("input-hidden-checked");

  attSumResult(insertedValues, all, pos, neg);

  let negativeValues = insertedValues.filter((index) => {
    return index.categoryID == 2;
  });
  let negArray = [...negativeValues];
  createEachValue(negArray);
});
