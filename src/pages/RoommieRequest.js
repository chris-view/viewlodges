import React from 'react'
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Banner from "../components/Banner";


function Register() {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner
                title="Request for a Roommate"
                subtitle="Take advantage of our platform and request for a roommate via whatsapp, its 100% FREE!!"
                >
                    <br/><br/>
                    <div > 
					         <a style ={{textDecoration:"none"}}  href="https://wa.me/2348141108125?text=Hi,%20I%20would%20like%20to%20request%20for%20a%20roommie." ><h4 style={{backgroundColor:"black", padding:"10px",  border: "5px solid #ac6f28", color:"white", borderBottomRightRadius:"45px", borderTopLeftRadius:"45px" }}>Tap to Request Now</h4></a>
			        </div>
                    <br/><br/>
                </Banner>
            </Hero>
            <Footer/> 
        </>
    )
}

export default Register
