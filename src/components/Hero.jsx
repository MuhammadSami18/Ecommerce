import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <section className="text-gray-50 body-font" style={{backgroundColor: '#3d3131',backgroundImage: 'linear-gradient(180deg, #402FDE 0%, #293C5A 50%, #000000 100%)'}}>
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-50 uppercase">Welcome To Ecommerce</h1>
      <p className="mb-8 leading-relaxed">Every quality and every product available here</p>
      <div className="flex justify-center">
        <Link to={'/products'} className="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded text-lg">Shop Now</Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded brightness-100" alt="hero" src="https://st.depositphotos.com/1001877/3814/i/450/depositphotos_38143799-stock-photo-e-commerce-shopping-cart-with.jpg"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero
