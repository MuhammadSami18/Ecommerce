import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({ products=[] }) => {
    return (
        <div>
            <section className="text-gray-100 body-font" style={{background: 'linear-gradient(#000000,#382EB2,#1F1A56,#191549)'}}>
                <div className="container px-5 py-24 mx-auto">
                    <div class="text-center mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-50 mb-4">PRODUCTS</h1>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">All Products</p>
                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {
                            products.map((product) => {
                                const { id, title, price, description, category, image}=product;
                                return (
                                    <Link to={`/products/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 mb-10 cursor-pointer bg-white" style={{borderRadius:'20px'}}>
                                        <a className="block relative h-48 rounded overflow-hidden">
                                            <img alt={title} className="object-contain object-center w-full h-full block" src={image} />
                                        </a>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{category}</h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                                            <p className="mt-1 font-semibold">${price}</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductCard
