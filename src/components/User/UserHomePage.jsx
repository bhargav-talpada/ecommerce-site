import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdStars } from 'react-icons/md';

const UserHomePage = () => {
  
  let [products,setProducts] = useState([]);

useEffect(()=>{
  function fetchData(){
    axios.get('http://localhost:8000/Product')
    .then((res)=>{
      console.log(res.data);
      setProducts(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  fetchData()
},[])

  return (
    <div className='flex space-x-9 overflow-x-auto overflow-y-hidden scroll-smooth'>
      {products.map((product)=>{
        return(
          <div data-testid="resCard" className="mt-8 w-64 h-auto  rounded-md" >
            <img src={product.image} className=" cart-img rounded-xl w-full h-44" />
            <h3 className="font-bold mt-3 ml-4 text-xl">{product.name}</h3>
            <h4 className="flex items-center ml-4 text-lg"><MdStars className="text-2xl text-green-600 mr-1" /> {product.rating}  </h4>
            <h4 className="my-1 font-semibold ml-4 text-lg">{product.price}/-</h4> {/* ₹ = ctrl + alt + 4 */}
            <h4 className="my-1 text-gray-500 font-semibold ml-4 text-lg w-full">{product.desc}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default UserHomePage