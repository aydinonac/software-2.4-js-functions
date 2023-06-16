var  sum = 0;
var average = 0;
const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];
document.getElementById("prices").innerHTML = "Prices = [" + prices + "]";
averager(prices);

function averager(prices) {
  for (item of prices) {
    sum += item;
  }
  result = (sum/(prices.length)).toFixed(2);
  document.getElementById("av").innerHTML = "Average = " + result;
}





