import React from 'react'

const Contact = () => {
    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="absolute inset-0 bg-gray-300">
                <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111256.59449861855!2d71.60761067995617!3d29.37706456519268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c46c611ad5%3A0xfcdf0da8e103f862!2sBahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1701271140929!5m2!1sen!2s" style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4)'}}></iframe>
                </div>
                <div className="container px-5 py-24 mx-auto flex">
                    <div className="lg:w-1/3 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"  style={{backgroundColor: '#402fde',backgroundImage: 'linear-gradient(180deg, #402fde 0%, #0f1620 50%, #000000 100%)'}}>
                        <h2 className="text-gray-50 text-lg mb-1 font-medium title-font">Contact Us</h2>
                        <p className="leading-relaxed mb-5 text-gray-100">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-100">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className="relative mb-4">
                            <label for="message" className="leading-7 text-sm text-gray-100">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                        <p className="text-xs text-gray-100 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
