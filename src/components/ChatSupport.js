import React from 'react'
import {FaWhatsapp} from 'react-icons/fa'

export default function ChatSupport() {
    return (
        <div style={{position: "fixed", bottom:"1.5em", right:"1.5em", zIndex:"10"}}>
            <a style ={{textDecoration:"none"}}  href={`https://wa.me/2348141108125?text=Hello%20Viewlodges`} target="blank">
            <div >
              {/* <div style={{width:"10em", height:"3em", backgroundColor:"black", borderRadius:"3em", padding:"0.4em 1em 0 1em", border: "0.2em solid #ac6f28"}}>
                  <span><FaWhatsapp style={{color:"green", width:"1.5em", height:"1.5em", float:"left"}}/></span>
                  <span style={{color:"white", float:"right"}}>Let's chat!</span>
              </div>  */}
              <div style={{width:"3em", height:"3em", backgroundColor:"transparent", borderRadius:"3em", padding:"0.55em", border: "0.2em solid #ac6f28"}}>
                  <FaWhatsapp style={{color:"green", width:"1.5em", height:"1.5em", float:"left"}}/>
              </div> 
            </div> 
          </a>
        </div>
    )
}
