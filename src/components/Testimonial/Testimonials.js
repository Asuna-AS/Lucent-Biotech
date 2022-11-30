import React from 'react';
import Bounce from 'react-reveal/Bounce';
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import useFetch from '../../hooks/useFetch';
import Heading from '../Heading';
import Testimonial from './Testimonial';
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Testimonials = () => {
    const [data] = useFetch('testimonial')
    return (
        <main>
        <section className="max-w-screen-xl mx-auto px-6 pb-24">
            {/* heading  */}
            {/* testimonials  */}
             
                    
                            <Bounce left>
                                <img className='' src="https://lucentbiotech.com/wp-content/uploads/2020/06/leo-rivas-wtxcaDIdOCM-unsplash.jpg"></img>
                            </Bounce>
                    
                
        </section>
        </main>
    )
}

export default Testimonials
