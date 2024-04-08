let items = document.querySelectorAll(".item");
console.log(`Name of Categories: ${items.length}`);

for (let item of items) {
  console.log(`Category : ${item.firstElementChild.innerText}`);
  console.log(
    `Element : ${item.firstElementChild.nextElementSibling.children.length}`
  );
}
