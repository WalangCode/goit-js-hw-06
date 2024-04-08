let initialValue = 0;
let value = document.getElementById("value");
value.innerText = initialValue;
let btnInc = document.querySelector('[data-action = "increment"]');
let btnDc = document.querySelector('[data-action = "decrement"]');

btnInc.onclick = function () {
  initialValue += 1;
  value.innerText = initialValue;
};

btnDc.onclick = function () {
  if (initialValue > 0) {
    initialValue -= 1;
    value.innerText = initialValue;
  }
};
