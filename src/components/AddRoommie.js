import React from 'react'

export default function AddRoommie({text}) {
    return (
        <>
            <a style ={{textDecoration:"none"}}  href={`https://wa.me/2348141108125?text=Hi,%20I%20would%20like%20to%20request%20for%20a%20roommie.`} target="blank">
                <div style={{display : "flex", alignItems : "center", justifyContent : "center", fontWeight:"bolder", padding : "2rem", background:"green",  textAlign:"center", width:"100%", height:"30vh", color:"white", borderRadius:"2em"}}>
                     {text}<br/><br/>
                    Click to send us your details via Whatsapp, Its FREE!
                </div>
            </a>
        </>
    )
}
