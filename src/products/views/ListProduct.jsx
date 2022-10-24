import { useEffect, useState } from "react";
import { Product } from "../components/Product";
import '../styles/list.css'


export const ListProduct = () => {

  const [products, setProducts] = useState([])
  const getProducts = async () => {
    const token = localStorage.getItem("token")
    const response = await fetch("http://localhost:3000/api/product", {
      headers:{
        "Authorization": token
      }
    })
    const data = await response.json()
    console.log(data);
    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])
  
  return (
    <div className="container-list">
      <h1>Productos</h1>
    <div className="container-products">
      {
        products.map(({_id, name, description, pictures}) => 
          <Product key={_id} name={name} description={description} picture={pictures[0]} />
        )
      }
    </div>
    </div>
  );
}
