import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaWhatsapp, FaYoutube, FaFacebook, FaInstagram} from "react-icons/fa";
import { RoomContext } from "../context";
import defaultBcg from "../images/VL_fav_white.PNG";
import defaultAvatar from "../images/default-avatar.jpg";
import Footer from "../components/Footer";
// import YouTubeButton from "../components/YouTubeButton";
import ChatSupport from "../components/ChatSupport";
import Visuals from "../components/Visuals";




export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
  // console.log(`props in this singleRoom component ${JSON.stringify(this.props.match.params)}`);
    this.state = {
      id: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  // navigate component to the top
  componentDidMount() {
  //  window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
   
  }
  
  static contextType = RoomContext;

  render() {
    const { getRoom, formatPrice } = this.context;
    const room = getRoom(this.state.id);

    if (!room) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link to="/" className="btn-primary">
            go back home
          </Link>
        </div>
      );
    }
    const {
  
      type,
      name,
      occupancy,
      address,
      size,
      annualRent,
      water,
      extras,
      capacity,
      region,
      junction,
      nameOfCaretaker,
      phOfCaretaker,
      avatarCaretaker,
      primaryContactRole,
      youtubeUrl,
      images,
      verified,
      sponsored
    } = room;
    // const [main, ...defaultImages] = images;

    // convert to whatsapp linkable number
    let contact = phOfCaretaker;
    let a = contact.split("")
    a.shift()
    contact = a.join("")

    return (
       <>
        <section className="single-room">
          
          <div className="single-room-info">
          
           <Visuals images = {images} name = {name} youtubeUrl = {youtubeUrl}/>
             {/* <article className="info"> */}
              {// test for when youtube URL is not given and display frontal image instead
              }
              {/* {youtubeUrl ? <YoutubeVideo title = {name} url = {youtubeUrl}/>:<img style={{width:"100%", height:"auto"}} src={images[0] || defaultBcg} alt="frontal"/>} */}
              {/* <SwipeImages images = {images}/> */}


            {/* </article> */}
          <article className="info">
              <h5 className="format-text">Follow and Stay Updated:</h5>
              <a href="https://www.facebook.com/viewlodges" target="blank"><FaFacebook className="social-icon facebook" /></a>
              <a href="https://www.youtube.com/channel/UCJf0a6NnSk6Z7E3E-dY4csg" target="blank"><FaYoutube className="social-icon youtube" /></a>
              <Link to="#"><FaInstagram className="social-icon instagram" /></Link><br/><br/><br/>
              
{/*             
              
              <br/>
              <em style = {{color:"grey", fontSize:"0.7em", lineHeight:"1.5"}}>Please Subscribe if you find what we do useful and stay updated.</em> */}
              
            </article>
                
            <article className="info">
              <h3>info</h3>
              <h6><span>title :</span> {name}</h6>
              <h6><span>type : </span>{type}</h6>
              <h6><span>rent cost : </span> <b style={{color:"lightGreen"}}> {formatPrice(annualRent)}</b></h6>
              <h6><span>Running Water : </span> {water ? "available" : "not available"}</h6>
              <h6><span>occupancy :</span> { sponsored ? <>{occupancy ? "Available" : <em style={{color:"orange"}}>Occupied</em>}</> : <em style = {{color:"orange"}}> Occupied</em>}</h6>
              <h6><span>roommates :</span>  <em className="format-text">{capacity < 1 ? `No Restriction`: `${capacity} maximum`}</em> </h6>
              {size ? <h6><span>size :</span>  {size} SQFT</h6>:""}
              
            </article>
            
            <article className="desc">
              <h3>address</h3>
                <p>{address}</p>
              <br/>
              { junction ?
                <><p style={{fontSize:"medium", fontWeight:"bold"}}>Closest Junction</p> {junction}</>:""
              }
             
              <br/>
            </article>
          </div> 
        </section>
        {extras ? 
        <section className="room-extras">
          <h6>extras | rules </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>:""
        }
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
          <img style={{borderRadius:"50%", width:"10em", height:"10em", border: "5px solid #ac6f28", marginBottom: "1em"}} src={avatarCaretaker || defaultAvatar} alt="Caretaker" />
          {primaryContactRole ? <h3>{primaryContactRole}</h3>:<h3>Caretaker</h3>}
          <h6 style={{marginBottom:"0"}}>{nameOfCaretaker}</h6><br/>
          {!sponsored ?
            // <>
            //   <p>{phOfCaretaker }{phOfCaretaker2 ? `, ${phOfCaretaker2}`:""}</p>
              
            //   <a style ={{textDecoration:"none"}}  href={`https://wa.me/234${contact}?text=Hi,%20I%20saw%20${name}%20on%20%20Viewlodges.com.ng`} target="blank">   
            //     <div style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"1rem 0 0.5rem 0"}}>
            //       <div style={{width:"10em", height:"3em", backgroundColor:"black", borderRadius:"3em", padding:"0.4em 1em 0 1em", border: "0.2em solid #ac6f28"}}>
            //           <span><FaWhatsapp style={{color:"green", width:"1.5em", height:"1.5em", float:"left"}}/></span>
            //           <span style={{color:"white", float:"right"}}>Send DM</span>
                  
            //       </div>  
            //     </div>
            //   </a> 
            // </>

            // Just display occupied if the property is not sponsored.
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", color:"grey"}}> 
              <br/><br/>
              <h6>Currently Occupied!</h6>
            </div>
            :
              <a style ={{textDecoration:"none"}}  href={`https://wa.me/2348141108125?text=Hi,%20I%20am%20interested%20in%20${name}%20around%20${region}.`} target="blank">   
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"1rem 0 0.5rem 0"}}>
                  <div style={{width:"10em", height:"3em", backgroundColor:"black", borderRadius:"3em", padding:"0.4em 1em 0 1em", border: "0.2em solid #ac6f28"}}>
                      <span><FaWhatsapp style={{color:"green", width:"1.5em", height:"1.5em", float:"left"}}/></span>
                      <span style={{color:"white", float:"right"}}>Chat Now!</span>
                  
                  </div>  
                </div>
              </a> 
          }
        
          {verified ? <div style={{color: "rgb(22, 179, 22)"}}>
            <FaCheckCircle/> Verified
          </div>:""}
          
        </div>
          
        <br/><div className="disclaimer"><h4 className="room-extras">Safty Tip:</h4>
        <em>Asking a close friend to escort you during inspection is advised. To help keep <span>ViewLodges</span> safe for everyone, report it if you find anything fraudulent.</em></div>
        

        <div  style={{ display : "flex", alignItems : "center", justifyContent : "center", padding : "2rem"}}>
          <Link to="/" className="btn-primary">
              back 
          </Link>
        </div>
        <ChatSupport/>
        <Footer/>
      </>
    );
  }
}
