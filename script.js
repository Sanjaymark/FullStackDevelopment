// Create form element
const form = document.createElement("form");
form.id = "myForm";


const firstnameLabel = document.createElement("label");
firstnameLabel.textContent = "FirstName:";
const firstnameInput = document.createElement("input");
firstnameInput.type = "text";
firstnameInput.required = true;


const lastnameLabel = document.createElement("label");
lastnameLabel.textContent = "LastName:";
const lastnameInput = document.createElement("input");
lastnameInput.type = "text";
lastnameInput.required = true;


const addressLabel = document.createElement("label");
addressLabel.textContent = "Address:";
const addressInput = document.createElement("input");
addressInput.type = "text";
addressInput.required = true;

const pincodeLabel = document.createElement("label");
pincodeLabel.textContent = "Pincode:";
const pincodeInput = document.createElement("input");
pincodeInput.type = "text";
pincodeInput.required = true;

const genderLabel = document.createElement("label");
genderLabel.textContent = "Gender:";
const genderInput = document.createElement("input");
genderInput.type = "text";
genderInput.required = true;

const foodLabel = document.createElement("label");
foodLabel.textContent = "Food:";
const foodInput = document.createElement("input");
foodInput.type = "text";
foodInput.required = true;



const stateLabel = document.createElement("label");
stateLabel.textContent = "State:";
const stateInput = document.createElement("input");
stateInput.type = "text";
stateInput.required = true;

const countryLabel = document.createElement("label");
countryLabel.textContent = "Country:";
const countryInput = document.createElement("input");
countryInput.type = "text";
countryInput.required = true;

// Create submit button
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "submit";

// Append elements to form
form.appendChild(firstnameLabel);
form.appendChild(firstnameInput);
form.appendChild(document.createElement("br"));
form.appendChild(lastnameLabel);
form.appendChild(lastnameInput);
form.appendChild(document.createElement("br"));
form.appendChild(addressLabel);
form.appendChild(addressInput);
form.appendChild(document.createElement("br"));
form.appendChild(pincodeLabel);
form.appendChild(pincodeInput);
form.appendChild(document.createElement("br"));
form.appendChild(genderLabel);
form.appendChild(genderInput);
form.appendChild(document.createElement("br"));
form.appendChild(foodLabel);
form.appendChild(foodInput);
form.appendChild(document.createElement("br"));
form.appendChild(stateLabel);
form.appendChild(stateInput);
form.appendChild(document.createElement("br"));
form.appendChild(countryLabel);
form.appendChild(countryInput);
form.appendChild(document.createElement("br"));
form.appendChild(submitButton);

// Append form to the document body
document.body.appendChild(form);

// Create table element
const table = document.createElement("table");
table.id = "dataTable";

// Create table header
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

const firstnameHeader = document.createElement("th");
firstnameHeader.textContent = "First Name";

const lastnameHeader = document.createElement("th");
lastnameHeader.textContent = "Last Name";

const addressHeader = document.createElement("th");
addressHeader.textContent = "Address";

const pincodeHeader = document.createElement("th");
pincodeHeader.textContent = "Pincode";

const genderHeader = document.createElement("th");
genderHeader.textContent = "Gender";

const foodHeader = document.createElement("th");
foodHeader.textContent = "Food";

const stateHeader = document.createElement("th");
stateHeader.textContent = "State";

const countryHeader = document.createElement("th");
countryHeader.textContent = "Country";

// Append header cells to header row
headerRow.appendChild(firstnameHeader);
headerRow.appendChild(lastnameHeader);
headerRow.appendChild(addressHeader);
headerRow.appendChild(pincodeHeader);
headerRow.appendChild(genderHeader);
headerRow.appendChild(foodHeader);
headerRow.appendChild(stateHeader);
headerRow.appendChild(countryHeader);

// Append header row to table header
thead.appendChild(headerRow);

// Create table body
const tbody = document.createElement("tbody");

// Append table header and body to table
table.appendChild(thead);
table.appendChild(tbody);

// Append table to the document body
document.body.appendChild(table);

// Add submit event listener to the form
form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form submission

  // Get form input values
  const firstname = firstnameInput.value;
  const lastname = lastnameInput.value;
  const address = addressInput.value;
  const pincode = pincodeInput.value;
  const gender = genderInput.value;
  const food = foodInput.value;
  const state = stateInput.value;
  const country = countryInput.value;

  // Create a new row in the table
  const newRow = document.createElement("tr");

  // Create table cells and append form data
  const firstnameCell = document.createElement("td");
  firstnameCell.textContent = firstname;

  const lastnameCell = document.createElement("td");
  lastnameCell.textContent = lastname;

  const addressCell = document.createElement("td");
  addressCell.textContent = address;

  const pincodeCell = document.createElement("td");
  pincodeCell.textContent = pincode;

  const genderCell = document.createElement("td");
  genderCell.textContent = gender;

  const foodCell = document.createElement("td");
  foodCell.textContent = food;

  const stateCell = document.createElement("td");
  stateCell.textContent = state;

  const countryCell = document.createElement("td");
  countryCell.textContent = country;


  // Append cells to the new row
  newRow.appendChild(firstnameCell);
  newRow.appendChild(lastnameCell);
  newRow.appendChild(addressCell);
  newRow.appendChild(pincodeCell);
  newRow.appendChild(genderCell);
  newRow.appendChild(foodCell);
  newRow.appendChild(stateCell);
  newRow.appendChild(countryCell);

  // Append the new row to the table body
  tbody.appendChild(newRow);

  // Reset form fields
  form.reset();
});
