import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function AdminAddProducts() {
  let [category,setCategory] = useState("")
  let [name,setName] = useState("")
  let [price,setPrice] = useState("")
  let [image,setImage] = useState("")
  let [rating,setRating] = useState("")
  let [desc,setDesc] = useState("")

  let data = {category,rating,price,name,image,desc}

  const addProduct = (e) => {
    axios
      .post("http://localhost:8000/Product", data)
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
    <div className="w-full h-screen mt-10 flex justify-center items-center bg-no-repeat bg-cover bg-center">
      <form className="p-12 sm:w-1/2 md:w-3/12 h-auto text-white bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center">
        <select value={category} onChange={(e)=>{setCategory(e.target.value)}} className="px-3 py-2 m-2 w-full bg-gray-600 placeholder:font-semibold">
          <option>Select Category</option>
          <option>Dress Matierirals</option>
          <option>Mobile</option>
          <option>Mobile Accessories</option>
           <option>Electronics</option>
          <option>Groceries</option>
        </select>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter the Product Name' className="px-3 py-2 m-2 w-full bg-gray-600 placeholder:font-semibold"/>
        <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder='Enter the price' className="px-3 py-2 m-2 w-full bg-gray-600 placeholder:font-semibold"/>
        <textarea type="text" rows="2" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder='Enter the text' cols="30" className="h-20 px-3 py-2 m-2 w-full bg-gray-600 placeholder:font-semibold"></textarea>
        <input type="text" value={image} onChange={(e)=>{setImage(e.target.value)}} placeholder='Enter the Image address' className="px-3 py-2 m-2 w-full bg-gray-600 placeholder:font-semibold"/>
        <input type="number" value={rating} onChange={(e)=>{setRating(e.target.value)}} placeholder='Enter the ratings' className="px-3 py-2 m-2 w-full bg-gray-600 placeholder:font-semibold"/>
        <button onClick={addProduct} className="p-3 my-6 bg-red-600 rounded-lg w-full font-semibold text-xl">Add Products</button>
      </form>
    </div>
  );
}

export default AdminAddProducts;
