/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./Header.css"
import {BiMenuAltRight} from 'react-icons/bi';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    const getMenuStyles=(menuOpened)=>{
        if(document.documentElement.clientWidth<=800){
            return {right:!menuOpened &&"-100%"}
        }
    }

    return (
    <section className='h-wrapper'>
        <div className="flexCenter paddings h-container innerWidth"
        >
        
        <img src ="./logo.png" width={100}/>   

        <OutsideClickHandler onOutsideClick={()=>{
            setMenuOpened(false);}}>

            <div className='flexCenter h-menu'
            style={getMenuStyles(menuOpened)}
            >

                <a href='#'> Residencies</a>
                <a href='#'>Values</a>
                <a href='#'>Our team</a>
                <a href='#'>About us</a>
                <button className ="button">
                    <a href='#'>Contact</a>
                </button>
            </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={()=>setMenuOpened((previousState)=>!previousState)}>
            <BiMenuAltRight size={30}/>
        </div>
        </div>
        
    </section>
    );
}

export default Header;
