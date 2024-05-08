import React from 'react'
import { Link } from 'react-router-dom'
const navigations = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Products',
        path: '/products'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Contact',
        path: '/contact'
    }
]
const img=process.env.PUBLIC_URL + '/icon.png';
const Header = () => {
    return (
        <div>
            <header className="text-gray-200 body-font shadow-lg bg-slate-800">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to={'/'} className="flex cursor-pointer title-font font-medium items-center text-gray-100 mb-4 md:mb-0">
                        <img src={img} alt="" style={{borderRadius:'100%',width:'30px'}} />
                        <span className="ml-3 text-xl">Ecommerce</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        {
                            navigations.map((navigation)=>{
                                return(
                                    <Link to={navigation.path} className='mr-5 hover:text-gray-50'>{navigation.name}</Link>
                                )
                            })
                        }
                    </nav>
                    <Link to={'/cart'} className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 text-white focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">Go To Cart
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Header
