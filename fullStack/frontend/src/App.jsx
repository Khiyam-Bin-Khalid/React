import { useState, useEffect } from 'react'
import axios from 'axios'


import './App.css'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    //one of the usecase of axios is "You donot have need to convert data in JSON format". It goes Automatically
    axios.get('/api/products')
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => {
        console.log(error)
      });

  }, [])

 
  return (
    <>
      <h1>FullStack||Frontend Backend</h1>
      <p>Products: {products.length}</p>
      {
        products.map((product, index) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{`Price:${product.price} `}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
