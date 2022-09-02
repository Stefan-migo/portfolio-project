import React, { useState, useEffect } from "react";
import './styles.scss';
import { ImCog } from 'react-icons/im';
import setTheme from "../../helpers/theme";


const colorsArray = [{
    id: 'yellow',
    bgColor: '#ffdd40'
},
{
    id: 'red',
    bgColor: '#E82A2A'
},
{
    id: 'green',
    bgColor: '#6ac045'
},
{
    id: 'blue',
    bgColor: '#5078ff'
},
]


const Theme = ()=> {
    //create states in order to pass the id of a specific color to the app and change the color theme.
    //set theme state with a value of yellow as a default value.
    const [theme, setCurrentTheme] = useState('yellow');
    //set a toogle state with a default value of false
    //when toggle's state changes to true it will add an 'active' class that will display the toggle box with the different theme colors options.
    const [toggle, setToggle] = useState(false);
    //create a function that set the theme state (to a specific id color)
    //it alse sets the toggle state to false 
    const handleToggleTheme = (currentId) => {
        setCurrentTheme(currentId)
        setToggle(false)
    };
    // this function lets you use the state previously set up.
    // in this case we are using theme state in order to pass the state to the setTheme function
    // the one which will change the style of the webapp
    useEffect(()=>{
        setTheme(theme)
    },[theme]) //here we call a dependency theme. this means that every time this state change, it will call the function useEffect.

    return (
        //if toggle is true add the active class. else, just add an empty strign.
        <div className={`theme-wrapper ${toggle ? "active": ''}`}>
            <div className="theme-wrapper__toggle-icon">
                <ImCog onClick={()=> setToggle(!toggle)} size={39}/>
            </div>
            <div className="theme-wrapper__menu">
                <h4>Choose Theme</h4>
                <ul>
                    {/*we use the map method to create a list with each element from the array.
                    for each item of the array will be crated a <li> tag, with onClick property and a styled background.*/}
                    {colorsArray.map((item, key) => (
                        //on click on each color we will change the theme's color.
                        //so onclick we will call the function with the color id as a props ('colorString'). to set the theme's state
                        <li onClick={() => handleToggleTheme(item.id)} key={key} style={{background: item.bgColor}}/>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Theme;