import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes,FaHome, FaPhone, FaProjectDiagram,FaPersonBooth,FaCloudMoon} from "react-icons/fa"
import "./Navbar.css"

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);

    const clickChanger = ()=>setClick(!click);
    const colorActivator =()=>{
        if(window.scrollY>=100){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener("scroll",colorActivator)

    const closeMenu =()=>setClick(false);
  return (
    <div className={color?"heading heading bg":"heading"}>
        <div className='nav-container'>
            <Link className='logo' onClick={closeMenu}>
                <h1> <span className="logo-title">ICEAGE</span> <FaCloudMoon style={{color:"#fff"}} /></h1>
            </Link>
            <ul className={click ? "navbar-ul open": "navbar-ul"}>
                <li className='nav-item'><Link to='/' onClick={closeMenu} className="home-active"><FaHome style={{color:"#fff"}} /> <span className='navlink-title'>Home</span> </Link></li>
                <li className='nav-item'><Link to='/projects' onClick={closeMenu}><FaProjectDiagram style={{color:"#fff"}} /> <span className='navlink-title'>Projects</span></Link></li>
                <li className='nav-item'><Link to='/about' onClick={closeMenu}><FaPersonBooth style={{color:"#fff"}} /> <span className='navlink-title'>About</span></Link></li>
                <li className='nav-item'><Link to='/contact' onClick={closeMenu}><FaPhone style={{color:"#fff"}} /> <span className='navlink-title'>Contact</span></Link></li>
            </ul>

            <div className='hamburger' onClick ={clickChanger}>
                {click ? (<FaTimes size={20} style={{color:"orange"}} />):(<FaBars size={20} style={{color:"#fff"}} />)}
                
                
                
            </div>
            

        </div>
    </div>
  ) 
}

export default Navbar