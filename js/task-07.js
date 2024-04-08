let fontsize = document.getElementById("font-size-control");
let output = document.getElementById("text");
fontsize.addEventListener("input", () => {
  let lengofvalue = parseInt(fontsize.value) + "px";
  output.style.fontSize = lengofvalue;
});
