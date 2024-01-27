import React from 'react';
import logoFooter from "../../img/logo2.png";
import "./Footer.scss";


const Footer = () => {
  return (
    <div className='wrapper'>
      <div className="container ">
              
              <img width={120} src = {logoFooter} alt=""/> 
              
              <div className="text-block">
                <span className='secondaryText'> Our vision is to make all people  the best place to live for them</span>
              </div>    
          <div className="phones" >
          <span className="textSecondary">021 123 145 14 </span>
          <span className="textSecondary"> 021 123 145 14</span>
         
          <span className="textSecondary">021 123 145 14</span>
          </div>
      </div>
    </div>
  );
}

export default Footer;
