import React from 'react'
import Logo from '../images/aybertocar.png'

function Header() {
    return (
        <>
            <header>
                <img className="logo" alt="Logo" src={Logo} />
                <h1 className="site-header">aybertocarlos.github.io</h1>
            </header>
        </>
    )
}

export default Header;