import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AdminViewItems() {

  let [products,setProducts] = useState([]);
  let [force,setForce] = useState(0);

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

  return (
    <div>
      {products.map((product)=>{
        return(
          <div className="sub_items">
            <div className='card1'>
              <div className='thumbnail'>
                <img src={product.image} alt="" />
                </div>
                <div className='descriptions'>
            <h3>{product.name}</h3>
            <span>M.R.P :{product.price}</span>
            <p>Description : {product.desc}</p>
            <span>Ratings : <b>{product.rating}*</b></span>
            <br/>
            <button onClick={()=>{editPage(product.id)}} className='m-3 btn btn-warning'>Update</button>
            <button onClick={()=> {deleteProduct(product.id,product.name)}} className='m-3 btn btn-danger'>Delete</button>
           {/* {console.log(product.id)} */}
           </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AdminViewItems