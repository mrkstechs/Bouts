import React, {useRef, useLayoutEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({toggle}) => {
    const sil = '#bfbfbf'
    const red = '#ff0000'
    const sidebar = useRef()

    useLayoutEffect(() => {
        const handleClick = () => toggle ? sidebar.current.classList.add('show') : sidebar.current.classList.remove('show')
        sidebar.current.addEventListener('click', handleClick)
        return () => {
            sidebar.current.removeEventListener('click', handleClick)
        }
    })
    return (
        <div id="sidebar" ref={sidebar}>
            <div className="inner">
                <FontAwesomeIcon icon={faTimes} />
                <nav>
                    <ul className="nav-item">
                        <a href="#bio" style={{color: red}}>Bio</a>
                        <li>The Story</li>
                    </ul>
                    <ul className="nav-item">
                        <a href="#shop" style={{color: red}}>Shop</a>
                        <li>Birds</li>
                        <li>Orginials</li>
                        <li>Prints</li>
                        <li>Random</li>
                        <li>Collabs</li>
                        <li>Statues</li>
                        <li>Stickers</li>
                        <li>Fabric</li>
                    </ul>
                    <ul className="nav-item">
                        <a href="#art" style={{color: red}}>Art</a>
                        <li>Birds</li>
                        <li>Collections</li>
                        <li>Commissions</li>
                        <li>Random</li>
                        <li>Sculpture</li>
                    </ul>
                    <ul className="nav-item">
                        <a href="#contact" style={{color: red}}>Contact</a>
                        <li>Enquire</li>
                        <li>Commission</li>
                        <li>Collaborate</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
