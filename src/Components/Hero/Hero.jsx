import React from 'react';
import "./Hero.css";
import hero from '../../img/hero-image.png';
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from "react-countup";


const Hero = () => {
    return (
    <section className='hero-wrapper'>
        <div className='paddings innerWidth flexCenter
        hero-container'>
               
            <div className='flexColStart hero-left'>
               <div className='hero-title'>
                    <div class="orange-circle"/>
                    <h1>
                        Discover <br/>
                        Most Suiteble <br/> Prop
                    </h1>
                </div>

                <div className='flexColStart hero-des'>
                    <span className='secondaryText'>Find a variety of properties that suit ou very easily</span>
                    <span className='secondaryText'> Forget all difficulties in finding a residence for you</span>
                </div>
               

                <div className=' flexCenter search-bar'>
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text" />
                    <button className="button" >Search</button>
                    
                </div>
                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span> 
                        <CountUp start={7600} end={9000} duration={3}/>
                        <span>+</span>
                        </span>
                        <span className='secondaryText'>Premium Products</span>
                       
                    </div>

                    <div className="flexColCenter stat">
                        <span> 
                        <CountUp start={1600} end={2000} duration={3}/>
                        <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customers</span>
                       
                    </div>

                    <div className="flexColCenter stat">
                        <span> 
                        <CountUp start={40} end={100} duration={3}/>
                        <span>+</span>
                        </span>
                        <span className='secondaryText'>Partners</span>
                       
                    </div>
                </div>
                
            </div>
            

            {/* right side */}
            <div className='flexCenter hero-right'>
                <div className='image-container'>
                    <img src={hero}  alt=''/>
                </div>
            </div>
        </div>

    </section>
    );
}

export default Hero;
