import React from 'react'
import {FaFacebook, FaTwitterSquare,FaInstagram,FaLinkedin,FaHome,FaPhone, FaMailBulk, FaFax} from "react-icons/fa"
import { Link } from 'react-router-dom';
import "./Footer.css"

const dateData = new Date();
const currentYear = dateData.getFullYear();

const Footer = () => {
  
    
  return (
    <div className='footer-container'>
        <div className='footer-sections'>
            <div className='footer-socials'>
                <div className='social-item'>
                    <Link >
                         <FaFacebook className='icon' size={20} />
                    </Link>
                </div>
                <div className='social-item'>
                    <Link>
                         <FaTwitterSquare className='icon'  size={20} />
                    </Link>
                </div>
                <div className='social-item'>
                    <Link> 
                         <FaInstagram  className='icon' size={20} />
                    </Link>
                </div>
                <div className='social-item'>
                    <Link>
                         <FaLinkedin  className='icon' size={20} />
                    </Link>
                </div>
            </div>
            <div className='footer-content'>
                <div className='footer-address'>
                    <h2>Address</h2>
                    <ul>
                        <li><FaHome style={{color:"#fff"}}/> <span>No 7 new heaven Anambra State</span></li>
                        <li><FaPhone style={{color:"#fff"}} /> <span>09000000000</span></li>
                        <li><FaMailBulk style={{color:"#fff"}} /> <span>iceage@gmail.com</span> </li>
                        <li><FaFax style={{color:"#fff"}} />  <span>iceage200</span></li>
                    </ul>
                </div>
                <div className='footer-products'>
                    <h2>Products</h2>
                    <ul>
                        <li><Link>Portfolio</Link></li>
                        <li><Link>Marketing site</Link></li>
                        <li><Link>Business site</Link></li>
                        <li><Link>Booking site</Link></li>
                    </ul>
                </div>
            </div>
            <div className='copyright'>
                <span className='copyright-text'>{`Copyright© ${currentYear} ICEAGE All rights reserved`}</span>
            </div>
        </div>
    </div>
  )
}

export default Footer