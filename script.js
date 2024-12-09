const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	// Select all price elements
  const prices = document.querySelectorAll(".prices");

  // Calculate the total price dynamically
  let total = 0;
  prices.forEach(price => {
    total += parseFloat(price.textContent); // Parse the price text as a number and add to total
  });

// Create a new row to display the total price
const table = document.querySelector("table");
const totalRow = document.createElement("tr");

// Create a single cell for the total price, spanning both columns
const totalCell = document.createElement("td");
totalCell.colSpan = 2; // Span both columns
totalCell.style.textAlign = "right"; // Align text to the right
totalCell.style.fontWeight = "bold"; // Emphasize the total price
totalCell.textContent = `Total Price: Rs ${total}`; // Display the total price

// Append the total cell to the new row
totalRow.appendChild(totalCell);

// Append the new row to the table
table.appendChild(totalRow);

};

getSumBtn.addEventListener("click", getSum);

