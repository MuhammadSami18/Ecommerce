import React from 'react'
import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
const CategoryProducts = () => {
  const { name } = useParams()
  const [products, setProducts]=useState([])
  useEffect(()=>{
    const fetchProducts=async()=>{
        const response=await fetch(`https://fakestoreapi.com/products/category/${name}`)
        const data=await response.json()
        setProducts(data)
    }
    fetchProducts()
},[])
if (products.length===0) return <div style={{fontSize:'100px',fontStyle:'bold',textAlign:'center',height:'70vh',paddingTop:'180px'}}>Loading</div>
    return (
    <div>
      <ProductCard products={products}/>
    </div>
  )
}

export default CategoryProducts
