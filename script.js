const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let table = document.querySelector("table");
  let tr = document.createElement("tr");
  let tdTotalPrice = document.createElement("td");
  let tdShowTotalPrice = document.createElement("td");
  let itemPrice = document.querySelectorAll(".price");

  let totalPrice = 0;

  itemPrice.forEach((price) => (totalPrice += Number(price.innerText)));

  tdTotalPrice.innerHTML = "total price";
  tdShowTotalPrice.innerHTML = totalPrice;
  tr.appendChild(tdTotalPrice);
  tr.appendChild(tdShowTotalPrice);

  table.appendChild(tr);
  
};

getSumBtn.addEventListener("click", getSum);

