// function func1() {
//   const el = document.getElementsByClassName("nr");
//   input = document.getElementById("inp");
//   for (let i = 0; i < el.length; i++) {
//     el[i].innerHTML = i + 1 + "." + input.value;
//   }
// }

// function func1() {
//   const table = document.getElementById("mytable");
//   //const rmvButton = createElement("button");
//   //el1 = document.getElementsByClassName("nr");
//   const input = document.getElementById("inp");
//   const newRow = table.insertRow(0);
//   const newCell = newRow.insertCell(0);
//   //   rmvButton.classList.add();
//   //newCell.appendChild(rmvButton);
//   newCell.innerHTML = input.value;
// }

function func1() {
  const input = document.getElementById("inp");
  const btn = document.createElement("button");
  const btn1 = document.createElement("button");
  const item = document.createElement("td");
  const tr = document.createElement("tr");
  const tbl = document.getElementById("mytable");
  const node = document.createTextNode("Remove Item");
  const node1 = document.createTextNode("Check Item");

  btn.classList.add("btrmv");
  btn1.classList.add("btrmv1");

  btn.appendChild(node);
  btn1.appendChild(node1);
  tbl.appendChild(tr);
  tr.appendChild(item);
  item.append(input.value);
  item.appendChild(btn);
  item.appendChild(btn1);

  btn.onclick = function () {
    // item.classList.toggle("strikeout");
    tbl.deleteRow(tr.rowIndex);
  };
  btn1.onclick = function () {
    item.classList.toggle("strikeout");
    // tbl.deleteRow(0);
  };
  input.value = "";
}

// function func2() {
//   const tbl = document.getElementById("mytable");
//   tbl.deleteRow(0);
// }

// function deleteItem() {
//   const btn1 = document.getElementsByClassName("btrmv");

//   btn1.parentElement.remove();
// }
// function deleteItem() {
//   input = document.querySelector("td");
//   input.classList.add("strikeout");
// }

// function func1() {
//   const mytable = document.getElementById("mytable");
//   const rows = mytable.rows.length;
//   const r = mytable.insertRows(rows);
//   const c = r.insertCell(0);
//   const name = document.createElement("input");
//   name.type = "text";
//   c.appendChild(name);
// }
