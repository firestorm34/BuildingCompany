import React from 'react';
import "./Residencies.css";
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import "swiper/css"
import data from "../../utils/data.json";
import { sliderSettings } from '../../utils/common';

const Residencies = () => {
    return (
        <section className='r-wrapper'>
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className="orangeText"> Best Choices</span>
                    <span className='primaryText'>Popular Residencies</span>
                        <Swiper {...sliderSettings} style={{width:"100%"}}>
                            
                            {data.map((card,index)=>(
                                <SwiperSlide key={index}>
                                <SliderButtons/>
                                    <div className="r-card">
                                        <img src={card.image} alt="" />
                                        <span className='secondaryText r-price'>
                                            <span style={{color:"orange"}}>$ </span>
                                            <span> {card.price}</span>
                                        </span>  
                                        <span className='primaryText'>{card.name}</span>
                                        <span className='secondaryText'>{card.detail}</span>

                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                </div>
            </div>
        </section>
    );   
}

const SliderButtons = ()=>{
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <div>
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            </div>
            <div>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
            </div>
        </div>

    )
}
export default Residencies;
