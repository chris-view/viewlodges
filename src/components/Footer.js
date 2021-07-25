import React from 'react'
import {FaCopyright, FaYoutube, FaFacebook, FaInstagram, FaPhone, FaLocationArrow} from 'react-icons/fa'

export default function Footer() {
    return (
        <div className="footer">
            
                <h6><FaCopyright/> 2019 - 2021 ViewLodges <br/><br/>
                <p> <FaLocationArrow/> SmartHub, Opp. Uniport Shopping Complex, Abuja Campus, Choba, Porthacourt</p>
                <p><FaPhone/> +234 (0) 8141108125 Call for Sponsorship/Advert </p><br/><br/>
                 <p>All Rights Reserved.</p></h6>
                <a href="https://www.youtube.com/channel/UCJf0a6NnSk6Z7E3E-dY4csg" target="blank"><FaYoutube className="social-icon" /></a>
                <a href="https://www.facebook.com/viewlodges" target="blank"><FaFacebook className="social-icon" /></a>
                <FaInstagram className="social-icon" /><br/><br/>
                <h6><span>Powered By:</span> SmartTech Global </h6>
                
                <p >Terms of Use</p>
        
           
        </div>
    )
}
