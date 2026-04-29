import React, { useState } from 'react'
import '../Styles/Menu.css'
import { GiCoffeeBeans } from 'react-icons/gi'
import { RiSearchLine } from "react-icons/ri";
import menuData from '../Data/Data.json'
import { IoIosSnow } from "react-icons/io";
import { PiThermometerHotFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";

function Menu() {
    const [selectedMenu, setSelectedMenu] = useState("Coffee");
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const currentMenu = menuData.find(
        (item) => item.category === selectedMenu
    );

    const filteredMenu = currentMenu?.items.filter((item)=>        
        item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );


    const navigateToWelcome = () =>{
        navigate('/')
    }


  return (
    <div className='menu-container'>
        {/* <div className="back-nav">
            <button className='back-btn' onClick={navigateToWelcome}>
                <IoChevronBackOutline />
                Back
            </button>
        </div> */}

        <div className="menu-logo">
            <div className="logo-icon">
                <GiCoffeeBeans className='icon'/>
            </div>
            <h2>RENE CAFE</h2>
            <h3>COFFEE & EATERY</h3>

            <div className="menu-input">
                <RiSearchLine className='search-icon'/>
                <input 
                    type="text" 
                    placeholder='Search menu item' 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="category-button">
                {menuData.map((cat) =>(
                    <button 
                        className={`category-btn ${selectedMenu === cat.category? "active":""}`} 
                        onClick={()=> setSelectedMenu(cat.category)}>
                            {cat.category}
                    </button>
                ))}
            </div>
        </div>

        <div className="menu-category">
            <div className="menu-items">
                {filteredMenu?.map((item) => (
                    <div className="menu-item" key={item.name}>
                        
                        <div className="item-name">
                            <h4>{item.name}</h4>
                            <h4>{item.basicPrice}K</h4>
                        </div>
                        
                        <div className="menu-price">
                            <p className='hot'> <PiThermometerHotFill/> Hot {item.hot}K </p>
                            <p className='ice'> <IoIosSnow/> Iced {item.ice}K</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Menu