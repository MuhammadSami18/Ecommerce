import React, { useState } from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import Categories from '../components/Categories'

const Home = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const fetchProducts=async()=>{
            const response=await fetch('https://fakestoreapi.com/products?limit=8')
            const data=await response.json()
            console.log(data)
            setProducts(data)
        }
        fetchProducts()
    },[])
  return (
    <div>
      <Hero/>
      <Categories/>
      {
        products.length>0?
        <ProductCard products={products}/>
        :
        <div style={{fontSize:'100px',fontStyle:'bold',textAlign:'center',height:'70vh',paddingTop:'180px'}}><h1>Loading</h1></div>
      }
      <Stats/>
    </div>
  )
}

export default Home
