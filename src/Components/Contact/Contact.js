import React from 'react';
import "./Contact.css"
import contact from "../../img/contact.jpg";
import {MdCall} from "react-icons/md";
import {BsFillChatDotsFill} from "react-icons/bs";
import {HiChatBubbleBottomCenter} from "react-icons/hi2";

const Contact = () => {
  return (
    <section className='c-wrapper'>
        <div className="paddings innerWidth flexCenter c-container">
          <div className="flexColStart c-left">
            <span className='orangeText'>Our Contacts</span>
            <span className='primaryText'>You can always contact us and ask about everything</span>
            <span className='secondaryText'>We are always ready to response for your question</span>
          

            <div className='flexColStart contactModes'>
              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25}/>
                    </div>
                    <div className="flexColStart detail">
                      <span className='primaryText'>Call</span>
                      <span className='secondaryText'> 012301230</span>
                    </div>
                    <div className="flexCenter button">Call Now</div>
                  </div>
                  
                </div>
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25}/>
                    </div>
                    <div className="flexColStart detail">
                      <span className='primaryText'>Call</span>
                      <span className='secondaryText'> 012301230</span>
                    </div>
                    <div className="flexCenter button">Call Now
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                      <div className="flexCenter icon">
                        <HiChatBubbleBottomCenter/>
                      </div>
                      <div className="flexColStart detail">
                        <span className='primaryText'>Write Us!</span>
                        <span className='secondaryText'>3024023040</span>
                      </div>
                      <div className="flexCenter button">Call Now
                    </div>
                  </div>
                </div>
                <div className="flexColCenter mode">
                  <div className="flexStart">
                      <div className="flexCenter icon">
                        <HiChatBubbleBottomCenter/>
                      </div>
                      <div className="flexColStart detail">
                        <span className='primaryText'>Write Us!</span>
                        <span className='secondaryText' >3024023040</span>
                      </div>
                      <div className="flexCenter button">Call Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        
          <div className="c-right">
            <div className="image-container">
              <img style={{width:"100%"}} src={contact} alt="" />
              
            </div>
          </div>

        </div>
    </section>
  );
}

export default Contact;
