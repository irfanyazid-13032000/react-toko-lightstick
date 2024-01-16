// import React from 'react'
import "../../css/allproducts.css"
import ProductCard from "./ProductCard"
import { useSelector } from "react-redux"


export default function AllProducts() {

  let products = useSelector((state)=>state.dagang.allDagangan)

  return (
    <div>
      <div className="container">

        {products.map((product)=>(
          <ProductCard key={product.id} product={product} />
        ))}


      </div>
    </div>
  )
}
