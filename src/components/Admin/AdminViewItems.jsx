import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdStars } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AdminViewItems() {

  let [products,setProducts] = useState([]);
  let [force,setForce] = useState(0);
  let [searchText, setSearchText] = useState("");
  let [filterData, setFilterData] = useState([]);

useEffect(()=>{
  function fetchData(){
    axios.get('http://localhost:8000/Product')
    .then((res)=>{
      console.log('data' , res.data);
      setProducts(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  fetchData()
},[force])

console.log(products);

function deleteProduct(id,name){
  axios.delete(`http://localhost:8000/Product/${id}`)
  .then(()=>{
    toast.success(`${name} Delete Successfully`);
    setForce(force+1);
    console.log(force);
    
  })
.catch(()=>{  
toast.error("Data not Present")
})
}

let navigate = useNavigate()
function editPage(id){
  navigate(`/adminhomepage/updateproducts/${id}`)
}

function searchData() {
  const search = products.filter((p) =>
    p?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
    p?.desc?.toLowerCase().includes(searchText.toLowerCase()) 
  );

  setFilterData(search);
}
  return (
    <div>
      <div className='flex m-4'>
        <input type="text" placeholder='Search' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} className='border border-black px-5 py-2' />
        <button className=' px-4 py-2 ml-2 bg-blue-600 rounded-lg font-semibold text-xl' onClick={searchData} >Search</button>
      </div>
      <div className='flex space-x-9 overflow-x-auto overflow-y-hidden scroll-smooth'>
      {
        filterData.length ? filterData.map((product)=>{
          return(
            <div data-testid="resCard" className="mt-8 w-64 h-auto  rounded-md" >
              <img src={product.image} className=" cart-img rounded-xl w-full h-44" />
              <h3 className="font-bold mt-3 ml-4 text-xl">{product.name}</h3>
              <h4 className="flex items-center ml-4 text-lg"><MdStars className="text-2xl text-green-600 mr-1" /> {product.rating}  </h4>
              <h4 className="my-1 font-semibold ml-4 text-lg">{product.price}/-</h4> {/* ₹ = ctrl + alt + 4 */}
              <h4 className="my-1 text-gray-500 font-semibold ml-4 text-lg w-full">{product.desc}</h4>
              <div className='flex justify-evenly items-center'>
                <button onClick={()=>{editPage(product.id)}} className='p-3 my-6 bg-green-600 rounded-lg font-semibold text-xl'>Update</button>
                <button onClick={()=> {deleteProduct(product.id,product.name)}} className='p-3 my-6 bg-red-600 rounded-lg font-semibold text-xl'>Delete</button>
              </div>
            </div>
          )
        })
        :
        products.map((product)=>{
          return(
            <div data-testid="resCard" className="mt-8 w-64 h-auto  rounded-md" >
              <img src={product.image} className=" cart-img rounded-xl w-full h-44" />
              <h3 className="font-bold mt-3 ml-4 text-xl">{product.name}</h3>
              <h4 className="flex items-center ml-4 text-lg"><MdStars className="text-2xl text-green-600 mr-1" /> {product.rating}  </h4>
              <h4 className="my-1 font-semibold ml-4 text-lg">{product.price}/-</h4> {/* ₹ = ctrl + alt + 4 */}
              <h4 className="my-1 text-gray-500 font-semibold ml-4 text-lg w-full">{product.desc}</h4>
              <div className='flex justify-evenly items-center'>
                <button onClick={()=>{editPage(product.id)}} className='p-3 my-6 bg-green-600 rounded-lg font-semibold text-xl'>Update</button>
                <button onClick={()=> {deleteProduct(product.id,product.name)}} className='p-3 my-6 bg-red-600 rounded-lg font-semibold text-xl'>Delete</button>
              </div>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default AdminViewItems