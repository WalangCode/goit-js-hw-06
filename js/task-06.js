let input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  let lengthofinput = parseInt(input.value.length);
  let requiredlength = parseInt(input.getAttribute("data-length"));

  if (lengthofinput === requiredlength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
