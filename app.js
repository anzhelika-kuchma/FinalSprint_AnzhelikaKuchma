fetch("./shoppingList.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      console.log(getCategoryName(item));
      console.log(getProduct(item));
      console.log(getList(item));
      console.log("====================");
      document.getElementById(
        "data-output"
      ).innerHTML += `<li>${item.categoryName}: ${item.product}</li>`;
    });
  })
  .catch((error) => {
    console.error(error);
  });

function getCategoryName(data) {
  return data.categoryName;
}

function getProduct(data) {
  return data.product;
}

function getList(data) {
  return `${data.categoryName}: ${data.product}`;
}
