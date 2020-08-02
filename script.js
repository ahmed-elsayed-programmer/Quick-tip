function formatMoney(value) {
  value = value.toFixed(2);
  return "$ " + value;
}

function formatPepole(value) {
  if (value === 1) return value + " person";
  return value + " pepole";
}

function update() {
  let bill = Number(document.getElementById("yourbill").value);
  let tipPercent = Number(document.getElementById("tipInput").value);
  let split = Number(document.getElementById("splitInput").value);
  let tipValue = bill * (tipPercent / 100);
  let tipEach = tipValue / split;
  let billEach = (bill + tipValue) / split;
  document.getElementById("tipPercent").innerHTML = tipPercent + "%";
  document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
  document.getElementById("totalWithTip").innerHTML = formatMoney(
    bill + tipValue
  );
  document.getElementById("splitValue").innerHTML = formatPepole(split);
  document.getElementById("billEach").innerHTML = formatMoney(billEach);
  document.getElementById("tipEach").innerHTML = formatMoney(tipEach);

  console.log(formatMoney(tipValue));
}
let container = document.getElementById("container");
container.addEventListener("input", update);
