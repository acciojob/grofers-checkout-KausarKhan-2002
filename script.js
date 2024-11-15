const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	
// Select all elements with the class "price"
  const priceElements = document.querySelectorAll(".price");
  
  // Calculate the total sum of prices
  let totalPrice = 0;
  priceElements.forEach(priceElement => {
    totalPrice += parseFloat(priceElement.textContent);
  });

  // Create a new row for the total price
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");
  
  // Set the colspan to span both columns and add the total price
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: Rs ${totalPrice}`;
  totalRow.appendChild(totalCell);
  
  // Append the total row to the table
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

