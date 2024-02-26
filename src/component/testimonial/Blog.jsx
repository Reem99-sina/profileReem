import React from 'react'
import './Blog.css'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Blog = () => {
    return (
        <section id='testimonial'>
            <h5>review from clients</h5>
            <h2>testimonial</h2>
            <Swiper className="container testimonial_container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}

            >
                <SwiperSlide className="testimonial">
                    <div className='client_avatar'>
                        <img src={avatar1} alt="" />
                    </div>
                    <h5 className='client_name'>ernset achiever</h5>
                    <small className='client_review'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum vitae harum dolores aspernatur excepturi nisi, cum omnis cumque dicta quos.
                    </small>

                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className='client_avatar'>
                        <img src={avatar2} alt="" />
                    </div>
                    <h5 className='client_name'>ernset achiever</h5>
                    <small className='client_review'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum vitae harum dolores aspernatur excepturi nisi, cum omnis cumque dicta quos.
                    </small>

                </SwiperSlide>   <SwiperSlide className="testimonial">
                    <div className='client_avatar'>
                        <img src={avatar3} alt="" />
                    </div>
                    <h5 className='client_name'>ernset achiever</h5>
                    <small className='client_review'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum vitae harum dolores aspernatur excepturi nisi, cum omnis cumque dicta quos.
                    </small>

                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className='client_avatar'>
                        <img src={avatar4} alt="" />
                    </div>
                    <h5 className='client_name'>ernset achiever</h5>
                    <small className='client_review'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum vitae harum dolores aspernatur excepturi nisi, cum omnis cumque dicta quos.
                    </small>

                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Blog