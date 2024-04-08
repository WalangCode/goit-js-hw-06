let nameinput = document.getElementById("name-input");
let nameoutput = document.getElementById("name-output");

nameinput.addEventListener("input", () => {
  let name = nameinput.value.trim();
  nameoutput.textContent = name ? name : "Anonymous";
});
