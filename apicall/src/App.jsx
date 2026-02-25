

import React, { useEffect, useState } from 'react'

import axios from 'axios'

const App = () => {

  const [products,setProducts] = useState([]);

  const getProducts = async () =>
  {
    const response = await axios.get("https://fakestoreapi.com/products")  
    console.log(response); 
    setProducts(response.data);
  }

  useEffect(()=>
  {
    let getData = ()=>
    {
      getProducts();
    }
    getData();
  });
  
  return (
    <div className='table-responsive text-capitalize text-center my-4'>
      <h1 className='my-3'>Your Products</h1>
      <button className='btn btn-primary rounded-4 mb-3' onClick={getProducts}>Get Products</button>
      <table className="table table-bordered table-hover table-striped table-striped-columns">
        <thead >
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product) => 
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.rating.rate +"and" + product.rating.count}</td>
                <td><img src={product.image}  style={{height:'60px', width:'60px'}}/></td>
              </tr>
            )
          }
         
        </tbody>
      </table>
    </div>
  )
}

export default App
