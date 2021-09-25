import React from 'react'
import './Header.css'
import Typed from 'react-typed';

export default function Header() {
    return (
        <div className="header-wrapper">
            <div className="main-info jumbotron">
                <h1>Cindy Cheung</h1>
                <Typed
                strings={[
                    'Cindy Cheung',
                    'Bright Network Student',
                    'Passion for Tech']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                    
                </Typed>
            </div>
        </div>
    )
}
