const productName = document.getElementById("productName");
const productCode = document.getElementById("productCode");
const productPrice = document.getElementById("productPrice");

const table = document.getElementById("table");

let selectedRow = null;

function formSubmit() {
  let formData = readProductData();
  selectedRow === null ? newProductData(formData) : updateProduct(formData);
  reset();
}

function readProductData() {
  const productData = {};

  productData["productName"] = productName.value;
  productData["productCode"] = productCode.value;
  productData["productPrice"] = productPrice.value;

  return productData;
}

function newProductData(data) {
  let tbody = table.getElementsByTagName("tbody")[0];
  let newRow = tbody.insertRow(tbody.length);
  cell_1 = newRow.insertCell(0);
  cell_1.innerHTML = data.productName;
  cell_2 = newRow.insertCell(1);
  cell_2.innerHTML = data.productCode;
  cell_3 = newRow.insertCell(2);
  cell_3.innerHTML = data.productPrice;
  cell_4 = newRow.insertCell(3);
  cell_4.innerHTML = `<a onClick="editProduct(this)" class="my-1 btn btn-warning w-100" >Edit</a>
                        <a onClick="deleteProduct(this)" class="my-1 btn btn-danger w-100" >Delete</a>
    `;
}

function reset() {
  productName.value = "";
  productCode.value = "";
  productPrice.value = "";
}

function deleteProduct(td) {
  if (confirm("Are you sure you want to delete ?")) {
    row = td.parentElement.parentElement;
    table.deleteRow(row.rowIndex);
    reset();
  }
}

function editProduct(td) {
  selectedRow = td.parentElement.parentElement;
  productName.value = selectedRow.cells[0].innerHTML;
  productCode.value = selectedRow.cells[1].innerHTML;
  productPrice.value = selectedRow.cells[2].innerHTML;
}

function updateProduct(data) {
  selectedRow.cells[0].innerHTML = data.productName;
  selectedRow.cells[1].innerHTML = data.productCode;
  selectedRow.cells[2].innerHTML = data.productPrice;
}
