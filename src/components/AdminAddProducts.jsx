import axios from "axios";
import React, { useState } from "react";

function AdminAddProducts() {
  let [category, setCategory] = useState("");
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [adress, setAdress] = useState("");
  let [rating, setRating] = useState("");
  let [description, setDescription] = useState("");

  let Data = { category, name, price, adress, rating, description };

  function addProduct(e) {
    e.preventDefault();
    axios.post("http://localhost:8000/Product", Data)
      .then((res) => {
        console.log(res);
        toast.success("Data added Successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid Data");
      });
  }

  return (
    <div className="AdminAddProducts">
      <form action="" onSubmit={addProduct}>
        <fieldset>
          <div className="addProductsDetailsC">
            <label htmlFor="">Category</label>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option>Clothing</option>
              <option>Mobile</option>
              <option>Mobile Accesssories</option>
              <option>Electronics</option>
              <option>,Mobile</option>
            </select>
            <label htmlFor="">ProductName:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter The Product"
            />
            <label htmlFor="">ProductPrice:</label>
            <input
              type="text"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              placeholder="Enter The Price"
            />
            <label htmlFor="">ProductDescription:</label>
            <input
              type="textArea"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              rows="3"
              cols="10"
              placeholder="Enter The Description"
            />
            <label htmlFor="">ProductAdress:</label>
            <input
              type="text"
              value={adress}
              onChange={(e) => {
                setAdress(e.target.value);
              }}
              placeholder="Enter The Product"
            />
            <label htmlFor="">ProductRatings:</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => {
                setRating(e.target.value);
              }}
              placeholder="Enter The Product"
            />
          </div>
          <button type="submit" id="apsubmit">
            Add Products
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default AdminAddProducts;
