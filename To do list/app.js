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

clearBtn.addEventListener("click", clearItems);

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
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
                        <div class="btn-container">
                        <button type="button" class="edit-btn">
                          <i class="fas fa-edit"></i>
                        </button>
                        <button type="button" class="delete-btn">
                          <i class="fas fa-trash"></i>
                        </button>
                        </div>`;

    const deleteBtn = element.querySelector(".delete-btn");
    const editBtn = element.querySelector(".edit-btn");
    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);

    list.appendChild(element);
    displayAlert("Item added successfully", "success");
    groceryContainer.classList.add("show-container");
    //Placeholders
    addToLocalStorage(id, value);
    //Set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert("Item edited successfully", "success");
  } else {
    displayAlert("Empty value", "danger");
  }
}

function clearItems() {
  const items = document.querySelectorAll(".grocery-item ");

  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  groceryContainer.classList.remove("show-container");
  displayAlert("All Items Removed", "danger");
  setBackToDefault();
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
function addToLocalStorage(id, value) {}
function removeFromLocalStorage(id) {}
// ****** SETUP ITEMS **********

//SETTING BACK TO DEFAULT
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "submit";
}
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  // console.log(element);
  list.removeChild(element);

  if (list.children.length === 0) {
    groceryContainer.classList.remove("show-container");
  }

  displayAlert("Item removed", "danger");
  setBackToDefault();

  //Remove from local storage
  removeFromLocalStorage(id);
}
function editItem(e) {
  const element = e.currentTarget.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // console.log(editElement);
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editId = element.dataset.id;

  submitBtn.textContent = "Edit";
}
