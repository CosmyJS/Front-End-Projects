// element.classList.remove("active");
// element.classList.add("active");
// function active(element) {
//   element.classList.add("active");
// }

// function inactive(element) {
//   element.classList.remove("active");
// }
// expBtn.addEventListener("click", function () {
//   active(expBtn);
//   inactive(incBtn);
// });
const expBtn = document.querySelector(".tab1");
const incBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");
const tabView = document.querySelector("#incomes");

// const text = document.createElement("div");
//
// const textnode = document.createTextNode("input");

function createDiv() {
  const div = document.createElement("div");
  div.id = "div_id";
  div.className = "div_class";
  div.style = "background-color: red;";
  div.style.width = "100px";
  div.style.height = "100px";
  div.innerHTML = "New Div";
  document.body.appendChild(div);
}

function activeExpBtn() {
  tabView.innerHTML = "Expenses Tab";
  tabView.style.backgroundColor = "red";
  // tabView.classList.add("newClass");

  expBtn.classList.add("active");
  incBtn.classList.remove("active");
}

function activeIncBtn() {
  tabView.innerHTML = "Incomes Tab";
  tabView.style.backgroundColor = "white";

  expBtn.classList.remove("active");
  allBtn.classList.remove("active");
  incBtn.classList.add("active");
}

function activeAllBtn() {
  tabView.innerHTML = "All Tab";
  tabView.style.backgroundColor = "green";

  expBtn.classList.remove("active");
  allBtn.classList.add("active");
  incBtn.classList.remove("active");
}

function addInc() {
  const list = document.getElementById("list");
  const item = document.createElement("li");
  const input = document.querySelector("#incTitleInput").value;
  const inputNumber = document.querySelector("#incAmountInput").value;
  item.append(input + ":" + " $" + inputNumber);
  list.appendChild(item);
}

// function myFunction() {
//   // Create an "li" node:
//   const node = document.createElement("li");

//   // Create a text node:
//   // const textnode = document.createTextNode("Water");
//   const textnode = document.querySelector("#incTitleInput").value;

//   // Append the text node to the "li" node:
//   node.append(textnode);

//   // Append the "li" node to the list:
//   document.getElementById("list").appendChild(node);
// }
