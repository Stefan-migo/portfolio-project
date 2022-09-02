import React, { useState } from 'react';
import { navMenus } from './config';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import  LogoDB  from '../../icons/LogoBold';
import { HiX } from 'react-icons/hi';
import './styles.scss';



const NavBar = () => {
    //we are managing state in our react components
    //setting click as state equals to false. and setClick is the method that update the state.
    //as the state is a boolean, this will work as a toggle.
    const [click, setClick] = useState(false);
    const handleClick = () => { //this function contains the method that set the state of click.
        setClick(!click);
    }
    return (
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={'/'} className="navbar__container__logo">
                        <LogoDB />
                    </Link>
                    {/*checking if it is within mobile or desktop version 
                    and adding the active class to the toggle*/}
                    <ul className={click ? 'navbar__container__menu active' : 'navbar__container__menu' }>
                        {navMenus.map((item, key) => (
                            <li key={key} className='navbar__container__menu__item'>
                                <Link
                                    to={item.to}
                                    className='navbar__container__menu__links'>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/*icons for NavMenu mobile format
                    click state is set as false, handleClick will change onClick the state to true
                    logic: is click state true? true return barsIcon : false return xIcon
                    */}
                    <div className='nav-icon' onClick={handleClick}>
                        {click ? <HiX size={30} /> : <FaBars size={30} />} 
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;