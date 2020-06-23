import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
const BASE_URL = window.location.origin

const Header = () => {
    const [logo, setLogo] = useState('')

    axios.get(`/wp-json/wp/v2/media/14`)
        .then((res) => {
            setLogo(res.data.guid.rendered)
        })
        .catch((err) => {
            console.log(err)
        })
    return (
        <header id="masthead">
            <div className="menu-container">
                <FontAwesomeIcon icon={faBars} />
                <nav className="primary-menu">
                    <ul className="main-links">
                        <li>Bio</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                        <ul className="sub-links">
                            <li>The Story</li>
                        </ul>
                    </ul>
                    
                </nav>
            </div>
            <div className="logo-container">
                <img src={logo} alt="Art By Bouts"/>
            </div>
            <div className="actions-container">
                <FontAwesomeIcon icon={faShoppingBasket} />
            </div>
        </header>
    )
}

export default Header
