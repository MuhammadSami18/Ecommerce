import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Categories from '../components/Categories'
const Products = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const fetchProducts=async()=>{
            const response=await fetch('https://fakestoreapi.com/products')
            const data=await response.json()
            console.log(data)
            setProducts(data)
        }
        fetchProducts()
    },[])
    return (
        <div>
            <Categories />
            {
                products.length > 0 ?
                <ProductCard products={products}/>
                :
                <div style={{fontSize:'100px',fontStyle:'bold',textAlign:'center',height:'70vh',paddingTop:'180px'}}><h1>Loading</h1></div>
            }
        </div>
    )
}

export default Products
