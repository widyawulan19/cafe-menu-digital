import React, { useState } from 'react'
import '../Styles/Menu.css'
//DATA
import mealsData from '../Data/DataMeals.json'

// ICON 
import { GiCoffeeBeans } from 'react-icons/gi'
import { RiSearchLine } from "react-icons/ri";
import { IoIosSnow } from "react-icons/io";
import { PiThermometerHotFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";


function MealsMenu() {
    // state 
    const [selectedMenu, setSelectedMenu] = useState("Main Course");
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    
    //search & filter function
    const currentMenu = mealsData.find(
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
         {/* 🔙 HEADER */}
        <div className="menu-header">
            <button onClick={navigateToWelcome}><IoChevronBackOutline/></button>
            <div className="mid-header">
                <h2>RENE CAFE</h2>
                <h3>COFFEE & EATERY</h3>
            </div>

            <div className="logo-icon">
                <GiCoffeeBeans className='icon'/>
            </div>
        </div>

        <div className="menu-logo">
            <h2>Meals Menu</h2>

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
                {mealsData.map((cat) =>(
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
                            <h4 style={{fontWeight:'normal'}}>{item.name}</h4>
                            <h4>{item.price}K</h4>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default MealsMenu