import React from 'react'
import '../Styles/Welcome.css'
import { GiCoffeeBeans } from "react-icons/gi";
import { LuClock3 } from "react-icons/lu";
import { IoLocationOutline, IoChatbubbleOutline  } from "react-icons/io5";
import { IoMdArrowForward, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Welcome() {
    const navigate = useNavigate();
    
    const handleExploreMenu = () => {
        navigate('/choose');
    };


  return (
    <div className='welcome-container'>

        <div className="welcome-logo">
            <div className="logo-icon">
                <GiCoffeeBeans className='icon'/>
            </div>
            <h2>RENE CAFE</h2>
            <h3>COFFEE & EATERY</h3>
        </div>

        <div className="welcome-header">
            <p>
                "Crafting moments, one bean at a time."
            </p>
            <hr className='line'/>
        </div>

        <div className="welcome-text">
            <p>
                Experience the perfect blend of artisanal coffee and a cozy atmosphere in the heart of Villa Basofi.
            </p>
        </div>

        <div className="welcome-box">
            <div className="box">
                <div className="box-header">
                    <LuClock3 className='box-icon'/>
                    <p>OPENING HOURS</p>
                </div>
                <p>10.00 - 22.00</p>
            </div>

            <div className="box">
                <div className="box-header">
                    <IoLocationOutline className='box-icon'/>
                    <p>OUR LOCATION</p>
                </div>
                <p>Jln. Pd Rangon No.11</p>
            </div>
        </div>

        <div className="welcome-action">
            <button className='btn-explore' onClick={handleExploreMenu}>
                Explore Our Menu <IoMdArrowForward/>
            </button>
            <button className='btn-contact'> <IoChatbubbleOutline/> Contact Via WhatsApp</button>
        </div>

        <div className="welcome-maps">
            <button>
                <IoLocationOutline className='maps-icon'/>
                <a href="https://www.google.com/maps/dir/?api=1&destination=RENE+CAFE" target="_blank" rel="noopener noreferrer">
                    Get Directions To Rene Cafe
                </a>
                < IoIosArrowForward className='maps-icon'/>
            </button>
        </div>

        <div className="welcome-footer">
            <div className="logo-box">
                <hr className='line' />
                <GiCoffeeBeans className='footer-icon'/>
                <hr className='line' />
            </div>
            <p>CREATE BY LUMINOUS.ID</p>
        </div>

    </div>
  )
}

export default Welcome