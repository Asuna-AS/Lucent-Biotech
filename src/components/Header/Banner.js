import React from 'react';
import Fade from 'react-reveal/Fade';
import { useHistory } from 'react-router-dom';
import Button from '../Form/Button';
import Particle from '../Particle';
import banner from '../../banner.png';
const Banner = () => {
    const history = useHistory();

    return (
        <section className= "max-w-screen-xl pt-20 mx-auto px-6">
            <Particle/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 py-12">
                    <Fade left>
                        <div className="order-1 lg:order-1 flex flex-col justify-center h-full space-y-6">

                            <div className="flex flex-col space-y-2">
                                {/* <img className="w-24" src="../../../assets/banner/medal.png" alt="banner" /> */}
                                <h1 className="poppins text-gray-700 font-semibold text-3xl lg:text-3xl leading-relaxed">Third-party manufacturers<br /> <span className="text-5xl">Delivering High Quality & Affordable Medicines</span></h1>
                                <p className="text-black text-light text-xl">We prepare a wide spectrum of pharmaceutical formulations, and are proud suppliers for multiple Indian and multinational pharmaceutical companies across the globe.</p>
                            </div>
            
                            {/* button  */}
                            <div className="flex flex-row space-x-2">
                                <Button className="btn-primary bg-green-500 py-3 px-4 poppins w-48 mt-6 hover:bg-yellow-300" text="Products" onClick={() => history.push('/products')} />
                                <Button className="btn-primary bg-green-500 py-3 px-4 poppins w-48 mt-6 hover:bg-yellow-300 shadow-lg" text="Contact us" onClick={() => history.push('/contact')} />
                            </div>

                        </div>
                    </Fade>

                    <Fade right>
                        <div className="order-1 lg:order-2">
                            <img src={banner} alt="banner" />
                        </div>
                    </Fade>
                </div>
            
        </section>
    )
}

export default Banner
