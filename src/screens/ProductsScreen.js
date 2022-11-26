import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Heading from '../components/Heading';
import Product from '../components/products/Product';
import useFetch from '../hooks/useFetch';

const ProductsScreen = () => {
    const [data] = useFetch('products');

    return (
        <main className='bg-gradient-to-r from-green-200 to-yellow-200'>
            <section className="max-w-screen-xl py-36 mx-auto px-6 bg-white">
                {/* heading  */}
                <div><Heading title="Products" /></div>
                {/* products  */}
                <div className="flex flex-col gap-4 mt-5">
                    <Bounce left>
                        <div className='flex flex-row gap-3'>
                            <div className=" bg-yellow-800 flex items-center justify-center w-16 h-0.5 mt-4"></div>
                            <div className='text-yellow-800'>World-Class Formulations</div>
                        </div>
                    </Bounce>
                    <div className='flex flex-row'>
                        <Bounce left>
                            <span><h1 className="oxygen text-3xl text-green-500"><b>Cost-Effectiveness, Enhanced Production Capacity, Timely Supply</b></h1></span>
                        </Bounce>
                        <span className='flex flex-col justify-center items-center'>
                        <Bounce right><p className='font-mono text-base ml-12 mr-12'>Lucent Biotech Ltd. is at the forefront of the fast-growing Pharmaceutical company in India. Large pharmaceutical companies depend on outsourcing of Pharmaceutical products for cost-effectiveness, enhanced production capacity, timely supply, professional expertise or any specific needs. </p>
                            <button className="w-50 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Download Product List
                                </span>
                            </button>
                        </Bounce>
                        </span>
                    </div>

                </div>

                <div className="flex flex-row gap-4 mt-5 justify-between mt-10">
                    <Bounce left>
                    <div className='bg-white flex flex-col items-center text-center h-64 shadow-lg bg-gradient-to-r hover:from-green-400 hover:to-yellow-400 hover:text-white rounded-full'>
                        <span className='pt-5 poppins'>Tablets</span>
                        <div className="bg-gray-200 flex items-center justify-center w-16 h-0.5"></div>
                        <div className='text-sm pl-7 pr-2 pt-10 text-left'>To be recognized as a globally acclaimed pharmaceutical company through the development of wide spectrum of best-quality pharmaceutical formulations, while incessantly striving for quality and customer satisfaction.  </div>
                    </div>
                    </Bounce>
                    <div className='flex flex-col items-center text-center h-64 bg-transparent shadow-lg bg-gradient-to-r hover:from-green-400 hover:to-yellow-400 hover:text-white rounded-full'>
                        <span className='pt-5 poppins'>Capsules</span>
                        <div className="bg-gray-200 flex items-center justify-center w-16 h-0.5"></div>
                        <div className='text-sm pl-7 pr-2 pt-10 text-left'>To be recognized as a globally acclaimed pharmaceutical company through the development of wide spectrum of best-quality pharmaceutical formulations, while incessantly striving for quality and customer satisfaction. </div>
                    </div>
                    <Bounce right>
                    <div className='flex flex-col items-center text-center h-64 bg-transparent shadow-lg bg-gradient-to-r hover:from-green-400 hover:to-yellow-400 hover:text-white rounded-full'>
                        <span className='pt-5 poppins'>Syrups</span>
                        <div className="bg-gray-200 flex items-center justify-center w-16 h-0.5"></div>
                        <div className='text-sm pl-7 pr-2 pt-10 text-left'>To be recognized as a globally acclaimed pharmaceutical company through the development of wide spectrum of best-quality pharmaceutical formulations, while incessantly striving for quality and customer satisfaction.  </div>
                    </div>
                    </Bounce>
                </div>

            </section>
        </main>
    )
}

export default ProductsScreen
