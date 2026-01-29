let db;

const request = indexedDB.open("smartstockDB", 1);

request.onupgradeneeded = function(e) {
  db = e.target.result;
  db.createObjectStore("products", { keyPath: "id", autoIncrement: true });
};

request.onsuccess = function(e) {
  db = e.target.result;
  console.log("Database ready");
};
