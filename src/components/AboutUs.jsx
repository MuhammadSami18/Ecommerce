import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <section classNameName="text-gray-600 body-font">
                <div className="text-center mb-2 py-2">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">About Us</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-indigo-600 inline-flex"></div>
                    </div>
                </div>
                <div className="container mx-auto flex py-5 md:flex-row flex-col items-center" style={{ paddingLeft: '200px', paddingRight: '200px' }}>
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Ecommerce</h1>
                        <p className="mb-8 leading-relaxed">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                            sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
                            eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
                            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui
                            in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"<br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://global-uploads.webflow.com/605826c62e8de87de744596e/6298b33e6aafa619b517757c_Blog-Coverasdfghjs.jpg" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
