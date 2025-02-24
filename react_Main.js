import React, { useState } from "react";
import "./styles.css";

const products = [
  { name: "Printed Cotton Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Blue Faux Leather", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Tibial Waterfall Vest", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Braver Bomber Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Olive Drape Vest", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Black Denim Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Army Green Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
];

export default function ProductsTable() {
  const [selected, setSelected] = useState([]);
  const [filter, setFilter] = useState("Active");

  const toggleSelect = (name) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  return (
    <div className="container">
      <h2 className="title">Products</h2>
      <div className="filter-buttons">
        <button className={filter === "Active" ? "active" : ""} onClick={() => setFilter("Active")}>Active</button>
        <button className={filter === "Inactive" ? "active" : ""} onClick={() => setFilter("Inactive")}>Inactive</button>
        <button className={filter === "All" ? "active" : ""} onClick={() => setFilter("All")}>All</button>
      </div>
      <table className="products-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Product</th>
            <th>Tags</th>
            <th>Var</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Low</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.name}>
              <td>
                <input type="checkbox" checked={selected.includes(product.name)} onChange={() => toggleSelect(product.name)} />
              </td>
              <td>{product.name}</td>
              <td>
                {product.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </td>
              <td>{product.var}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.low}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
