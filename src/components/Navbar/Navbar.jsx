import React, {useRef, useState} from 'react'
import "./navbar.scss"; 
import { Link } from "react-router-dom"; 
import {FaBars, FaTimes} from "react-icons/fa"

export default function Navbar() {
    const  [mobile, setMobile] = useState(false)



  return (
        <div className='navbar'>
            <h3 className="logo">
                Something
            </h3>
            <ul className={mobile ? "nav-links-moblie" : "nav-links"}  onClick={() => setMobile(false)} >
                <Link to={"/"} className='link'>      
                    <li>Home</li>
                </Link>
                <Link to={"/gallery"} className='link'>
                    <li>Gallery</li>
                </Link>
              </ul> 
              <button className="menu-icon"onClick={() => setMobile(!mobile)} >
                {mobile ? <FaTimes/> : <FaBars/> }  
              </button>
        </div>
  )
}
