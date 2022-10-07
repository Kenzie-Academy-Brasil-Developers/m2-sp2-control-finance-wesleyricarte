function createModalInsertValue() {
  // Creating all the elements
  const modalWrapper = document.createElement("div");
  const modal = document.createElement("div");
  const modalHeader = document.createElement("div");
  const modalTitle = document.createElement("h3");
  const modalClose = document.createElement("button");

  const modalSteps = document.createElement("div");
  const pModalSteps = document.createElement("p");

  const modalForm = document.createElement("form");
  const modalFormLabelValue = document.createElement("label");
  const divInputValue = document.createElement("div");
  const modalRealCurrency = document.createElement("p");
  const inputTypeNumber = document.createElement("input");

  const divValueType = document.createElement("div");
  const pDivInputValue = document.createElement("p");
  const inputHidden1 = document.createElement("button");
  const inputHidden2 = document.createElement("button");

  const divCancelSubmit = document.createElement("div");
  const buttonCancel = document.createElement("button");
  const buttonSubmit2 = document.createElement("button");

  // Attribute class
  modalWrapper.classList.add("modal-wrapper", "show-modal");
  modal.classList.add("modal");
  modalHeader.classList.add("modal-header");
  modalTitle.classList.add("modal-title", "title2-bold");
  modalClose.classList.add("modal-close");

  modalSteps.classList.add("moda-steps");
  pModalSteps.classList.add("text1-regular");

  modalForm.classList.add("modal-form");
  modalFormLabelValue.classList.add("modal-form-label-value");
  divInputValue.classList.add("div-input-value", "text1-medium");
  modalRealCurrency.classList.add("modal-real-currency");

  divValueType.classList.add("div-value-type");
  pDivInputValue.classList.add("text1-medium");
  inputHidden1.classList.add(
    "buttons-default",
    "buttons-outline",
    "input-hidden-checked"
  );
  inputHidden2.classList.add("buttons-default", "buttons-outline");

  divCancelSubmit.classList.add("div-cancel-submit");
  buttonCancel.classList.add("buttons-greylow", "buttons-default");
  buttonSubmit2.classList.add("buttons-primary", "buttons-default");

  // Attribute ID
  modalForm.id = "form-insert-value";
  inputHidden1.id = "Entrada-1";
  inputHidden2.id = "Saida-2";

  // Gettiing all the attributes
  modalTitle.innerText = "Registro de valor";
  modalClose.innerText = "X";
  pModalSteps.innerText =
    "Digite o valor e em seguida aperte no botão referente ao tipo do valor";
  modalFormLabelValue.innerText = "Valor";
  modalFormLabelValue.htmlFor = "value";
  modalRealCurrency.innerText = "R$";

  inputTypeNumber.type = "number";
  inputTypeNumber.name = "value";
  inputTypeNumber.placeholder = "00,00";
  inputTypeNumber.required = true;

  pDivInputValue.innerText = "Tipo de valor";

  inputHidden1.innerText = "Entrada";

  inputHidden2.innerText = "Saída";

  buttonCancel.innerText = "Cancelar";
  buttonSubmit2.innerText = "Inserir valor";
  buttonSubmit2.type = "submit";

  // Appends here
  modalWrapper.append(modal);
  modal.append(modalHeader, modalSteps, modalForm);
  modalHeader.append(modalTitle, modalClose);
  modalSteps.append(pModalSteps);
  modalForm.append(
    modalFormLabelValue,
    divInputValue,
    divValueType,
    divCancelSubmit
  );
  divInputValue.append(modalRealCurrency, inputTypeNumber);
  divValueType.append(pDivInputValue, inputHidden1, inputHidden2);
  divCancelSubmit.append(buttonCancel, buttonSubmit2);

  // Close and Cancel buttons
  modalClose.addEventListener("click", function () {
    console.log("modal-close clicado");
    modalWrapper.classList.toggle("show-modal");
  });
  buttonCancel.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("botão cancelar clicado");
    modalWrapper.classList.toggle("show-modal");
  });

  // ADDING VALUS TO DATABASE
  let data = {
    categoryID: 1,
  };

  inputHidden1.addEventListener("click", (event) => {
    event.preventDefault();
    data.categoryID = 1;
    inputHidden1.classList.add("input-hidden-checked");
    inputHidden2.classList.remove("input-hidden-checked");
    console.log("cliquei na hidden1");
  });
  inputHidden2.addEventListener("click", (event) => {
    event.preventDefault();
    inputHidden1.classList.remove("input-hidden-checked");
    inputHidden2.classList.add("input-hidden-checked");
    data.categoryID = 2;
  });

  buttonSubmit2.addEventListener("click", (event) => {
    event.preventDefault();
    data["id"] =
      insertedValues.length == 0
        ? 1
        : insertedValues[insertedValues.length - 1].id + 1;
    data.value = Number(inputTypeNumber.value);
    insertedValues.push(data);
    hiddenSectionResume(insertedValues);
    createEachValue(insertedValues);
    modalWrapper.classList.toggle("show-modal");
    console.log(event);
    console.log(inputTypeNumber.value);
    console.log(data);
    console.log(insertedValues);
  });

  return modalWrapper;
}

// Button Insert New Value
const buttonInsertNewValue = document.querySelector(".button-insert-new-value");
buttonInsertNewValue.addEventListener("click", () => {
  const body = document.querySelector("body");
  const creatingModalHere = createModalInsertValue();
  body.appendChild(creatingModalHere);
});

// Button Insert new value While No Values
const buttonInsertNewValueWithoutValue = document.querySelector(
  ".button-insert-new-value-without-value"
);
buttonInsertNewValueWithoutValue.addEventListener("click", () => {
  const body = document.querySelector("body");
  const creatingModalHere = createModalInsertValue();
  body.appendChild(creatingModalHere);
});
