// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const groceryContainer = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editId = "";

// ****** EVENT LISTENERS **********
form.addEventListener("submit", addItem);

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  // console.log(id);
  if (value && !editFlag) {
    const element = document.createElement("article");
    element.classList.add("grocery-item");
    //Adding id
    const attr = document.createAttribute("data-id");

    displayAlert("Item added successfully", "success");
  } else if (value && editFlag) {
    displayAlert("Item edited successfully", "success");
  } else {
    displayAlert("Empty value", "danger");
  }
}
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 3000);
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
