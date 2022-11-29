import React from 'react'
import logo from "../../favicon.png"
const NavBrand = () => {
    return (
        <div className="flex items-center space-x-4">
            <img src={logo} alt="logo" height={200}/>
        </div>
    )
}

export default NavBrand
