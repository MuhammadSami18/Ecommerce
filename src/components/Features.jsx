import React from 'react'
import { Link } from 'react-router-dom'

const Features = ({ cards = [] }) => {
    const imageUrl = process.env.PUBLIC_URL + '/view.jpg';
    return (
        <div>
            <section className="text-gray-100 body-font"   style={{background:`url(${imageUrl})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',}}>
                <div className="container px-5 py-24 mx-auto">
                    <div class="text-center mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-50 mb-4">Categories</h1>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">The All Categories Given Below</p>
                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-indigo-100 inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {
                            cards?.map((card) => {
                                return (
                                    <Link to={`/categories/${card}`} className="p-4 md:w-1/2">
                                        <div className=" text-gray-900 flex rounded-lg h-full bg-gray-100 p-8 flex-col cursor-pointer">
                                            <div className="flex items-center mb-3">
                                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                    </svg>
                                                </div>
                                                <h2 className="text-gray-900 text-lg title-font font-medium uppercase">{card || 'Example Card'}</h2>
                                            </div>
                                            <div className="flex-grow">
                                                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                                <a className="mt-3 text-indigo-500 inline-flex items-center">Click to See Products
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }

                    </div>
                </div>
            </section >
        </div >
    )
}

export default Features
