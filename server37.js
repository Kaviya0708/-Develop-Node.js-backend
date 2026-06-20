const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let products = [
  {
    id: 1,
    name: "Smart Watch",
    price: 2999
  },
  {
    id: 2,
    name: "Headphones",
    price: 1999
  }
];

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 Node.js Backend Running");
});

// Get All Products
app.get("/products", (req, res) => {
  res.json(products);
});

// Add Product
app.post("/products", (req, res) => {

  const product = {
    id: Date.now(),
    name: req.body.name,
    price: req.body.price
  };

  products.push(product);

  res.status(201).json(product);
});

// Delete Product
app.delete("/products/:id", (req, res) => {

  const id = Number(req.params.id);

  products = products.filter(
    product => product.id !== id
  );

  res.json({
    message: "Product Deleted"
  });
});

app.listen(5000, () => {
  console.log(
    "Server running on http://localhost:5000"
  );
});