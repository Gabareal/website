import React, { useState } from 'react';
import './Navbar.css'

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);

    const handleSecondDivClick = () => {
        setIsVisible(!isVisible);
    };
    return(
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <nav>
                <header>GABRIEL™</header>
                <ul id='nav-links'>
                    <li><a>Home</a></li>
                    <li><a>About me</a></li>
                    <li><a>Acheivements</a></li>
                    <li><a>Contact me</a></li>
                </ul>
                <i onclick={handleSecondDivClick} class='fa fa-bars fa-3x' id='bars'/>
                {isVisible && <ul id='dropdown-links'>
                    <li><a>Home</a></li>
                    <li><a>About me</a></li>
                    <li><a>Acheivements</a></li>
                    <li><a>Contact me</a></li>
                </ul>}
            </nav>
        </>
    )
}
export default Navbar