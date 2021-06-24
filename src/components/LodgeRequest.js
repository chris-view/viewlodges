import React from 'react'

export default function LodgeRequest({text}) {
    return (
        <>
            <a style ={{textDecoration:"none"}}  href={`https://wa.me/2348141108125?text=Hi,%20I%20would%20like%20to%20list%20a%20lodge.`} target="blank">
                <div style={{display : "flex", alignItems : "center", justifyContent : "center", fontWeight:"bolder", padding : "2rem", background:"green",  textAlign:"center", width:"100%", height:"30vh", color:"white", borderRadius:"2em"}}>
                     {text}<br/><br/>
                    Click to send us your lodge details via Whatsapp, Its FREE!
                </div>
            </a>
        </>
    )
}
