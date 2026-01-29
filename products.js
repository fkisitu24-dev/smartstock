function addProduct() {
  let tx = db.transaction("products", "readwrite");
  let store = tx.objectStore("products");

  let product = {
    name: name.value,
    buy: buy.value,
    sell: sell.value,
    qty: 0
  };

  store.add(product);
  alert("Product saved!");
}
