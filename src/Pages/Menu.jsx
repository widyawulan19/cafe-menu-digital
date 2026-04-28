import React, { useState } from 'react'
import '../Styles/Menu.css'
import { GiCoffeeBeans } from 'react-icons/gi'
import { RiSearchLine } from "react-icons/ri";
import menuData from '../Data/Data.json'
import { IoIosSnow } from "react-icons/io";
import { PiThermometerHotFill } from "react-icons/pi";

function Menu() {
    const [selectedMenu, setSelectedMenu] = useState("Coffee");
    const [search, setSearch] = useState("");

    const currentMenu = menuData.find(
        (item) => item.category === selectedMenu
    );

    const filteredMenu = currentMenu?.items.filter((item)=>        
        item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );



  return (
    <div className='menu-container'>

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
                            <p> <PiThermometerHotFill/> Hot {item.hot}K </p>
                            <p> <IoIosSnow/> Iced {item.ice}K</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Menu