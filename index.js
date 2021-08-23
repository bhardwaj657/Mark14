var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");
submitBtn.addEventListener("click", submitHandler);
function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stockQuantity.value);
  var curr = Number(currentPrice.value);
  calculateProfitAndLoss(ip, qty, curr);
}
function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    outputBox.innerText = `Hey the loss is ${loss} the lossPercentage is ${lossPercentage}`;
    document.body.style.backgroundColor = "red";
  } else if (initial < current) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    outputBox.innerText = `Hey the profit is ${profit}  the profitPercentage is ${profitPercentage}`;
    document.body.style.backgroundColor = "green";
  } else {
    outputBox.innerText = `No Pain No Gain: No Gain No Pain`;
    document.body.style.backgroundColor = "yellow";
  }
}
