import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Features from './Features'
const Categories = () => {
    const [categories,setCategores]=useState([])
    useEffect(()=>{
        const fetchCategories=async()=>{
            const response=await fetch('https://fakestoreapi.com/products/categories')
            const data=await response.json()
            console.log(data)
            setCategores(data)
        }
        fetchCategories()
    },[])
    if (categories.length===0) return <div>Loading</div>
  return (
    <div>
        <Features cards={categories}/>
    </div>
  )
}

export default Categories
