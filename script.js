// Function to calculate and append the total price to the table

function calculateTotalPrice() {
  // Select all elements with the class "prices"
  const priceElements = document.querySelectorAll('.prices');

  // Initialize the total price
  let totalPrice = 0;

  // Loop through each price element and calculate the total
  priceElements.forEach(priceElement => {
    totalPrice += parseFloat(priceElement.textContent);
  });

  // Create a new table row for the total price
  const totalRow = document.createElement('tr');

  // Create two cells: one for the label and one for the total price
  const labelCell = document.createElement('td');
  labelCell.textContent = 'Total';
  labelCell.style.fontWeight = 'bold';

  const totalCell = document.createElement('td');
  totalCell.textContent = `Rs ${totalPrice}`;
  totalCell.style.fontWeight = 'bold';

  // Append the cells to the row
  totalRow.appendChild(labelCell);
  totalRow.appendChild(totalCell);

  // Append the new row to the table
  const table = document.querySelector('table');
  table.appendChild(totalRow);
}

// Call the function to calculate and display the total price
calculateTotalPrice();
