import React from 'react'
import '../Styles/Choose.css'
import { PiCoffeeFill } from "react-icons/pi";
import { GiHotMeal } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

function ChoosePage() {
    // state 
    const navigate = useNavigate();

    const navigateToMenu = () =>{
        navigate('/menu')
    }

    const navigateToMeals = () =>{
        navigate('/meals')
    }

  return (
    <div className='choose-container'>
        <h2>Find Your Perfect Taste</h2>
        <p>Explore Our Menu and choose what you’re craving today.</p>

        <div className="choose-card">
            <div className="choose-box" onClick={navigateToMenu}>
                <PiCoffeeFill className='choose-icon'/>
                <h3>DRINKS</h3>
            </div>
            <div className="choose-box" onClick={navigateToMeals}>
                <GiHotMeal className='choose-icon'/>
                <h3>MEALS</h3>
            </div>
        </div>

        <button>
            Back
        </button>
    </div>
  )
}

export default ChoosePage