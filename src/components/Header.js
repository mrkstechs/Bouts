import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import logo from '../imgs/bouts-logo.png'
import Sidebar from './Sidebar'

const Header = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <header id="masthead">
            <div className="menu-container">
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="logo-container">
                <img src={logo} alt="Art By Bouts"/>
            </div>
            <div className="actions-container">
                <FontAwesomeIcon icon={faShoppingBasket} />
            </div>
            <Sidebar toggle={isActive} />
        </header>
    )
}

export default Header
