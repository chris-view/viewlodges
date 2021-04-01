import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaInstagram, FaCheckCircle, FaWhatsapp} from "react-icons/fa";
import { RoomContext } from "../context";
import YoutubeVideo from "../components/YoutubeVideo";
import defaultBcg from "../images/VL_fav_white.PNG";
import defaultAvatar from "../images/default-avatar.jpg";
import Footer from "../components/Footer";
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
      junction,
      nameOfCaretaker,
      phOfCaretaker,
      phOfCaretaker2,
      avatarCaretaker,
      youtubeUrl,
      images,
      verified
    } = room;
    // const [main, ...defaultImages] = images;

  

    return (
       <>
        <section className="single-room">
          
          <div className="single-room-info">
             <article className="info">
              {// test for when youtube URL is not given and display frontal image instead
              }
              {youtubeUrl ? <YoutubeVideo title = {name} url = {youtubeUrl}/>:<img style={{width:"100%", height:"auto"}} src={images[0] || defaultBcg} alt="frontal"/>}
              
            </article>
          <article className="info">
              <h5 className="format-text">Subscribe and Stay Updated:</h5>
              <a href="https://www.youtube.com/channel/UCJf0a6NnSk6Z7E3E-dY4csg" target="blank"><FaYoutube className="social-icon youtube" /></a>
              <a href="https://www.facebook.com/viewlodges" target="blank"><FaFacebook className="social-icon facebook" /></a>
              <Link to="#"><FaInstagram className="social-icon instagram" /></Link><br/><br/><br/>
              <em style = {{color:"grey", fontSize:"0.7em", lineHeight:"1.5"}}>Kindly Subscribe and Follow us to stay updated when new Lodges are uploaded.</em>
              
            </article>
                
            <article className="info">
              <h3>info</h3>
              <h6>title : {name}</h6>
              <h6>type : {type}</h6>
              <h6>rent cost : <b style={{color:"lightGreen"}}> {formatPrice(annualRent)}</b></h6>
              <h6>running water : <span className="format-text"> {water ? "available" : "not available"}</span></h6>
              <h6>occupancy : { verified ? <>{occupancy ? "Available" : "Occupied"}</> : <em style = {{color:"grey", fontSize:"0.7em", lineHeight:"1.5"}}>[ Please contact caretaker or agent below to confirm current occupancy ] </em>}</h6>
              <h6 >Roommates :  <span className="format-text">{capacity < 1 ? `No Restriction`: `${capacity} maximum`}</span> </h6>
              {size ? <h6>size :  {size} SQFT</h6>:""}
              
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
          <h3>Caretaker</h3>
          <h6 style={{marginBottom:"0"}}>{nameOfCaretaker}</h6>
          <p>{phOfCaretaker }{phOfCaretaker2 ? `, ${phOfCaretaker2}`:""}</p>
          <a style ={{textDecoration:"none"}}  href={`https://wa.me/2348141108125?text=Hi,%20I%20saw%20${name}%20on%20%20Viewlodges.com.ng`} target="blank">   
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"1rem 0 0.5rem 0"}}>
              <div style={{width:"10em", height:"3em", backgroundColor:"black", borderRadius:"3em", padding:"0.4em 1em 0 1em", border: "0.2em solid #ac6f28"}}>
                  <span><FaWhatsapp style={{color:"green", width:"1.5em", height:"1.5em", float:"left"}}/></span>
                  <span style={{color:"white", float:"right"}}>Send DM</span>
              
              </div>  
            </div>
          </a> 
        
          {verified ? <div style={{color: "rgb(22, 179, 22)"}}>
            <FaCheckCircle/> Verified
          </div>:""}
          
        </div>
          
        {verified ? <><br/><div className="disclaimer"><em>Always go for physical verification before making any form of payments. To help keep <span>ViewLodges</span> safe for everyone, report it if you find anything frudulent.</em></div></>:
        <div className="disclaimer">
          <h4 className="room-extras">Disclaimer:</h4><em>This Lodge has not been verified, please make proper investigations before making any form of payments. To help keep <span>ViewLodges</span> safe for everyone, report it if you find anything frudulent.</em>
        </div>}

        <div  style={{ display : "flex", alignItems : "center", justifyContent : "center", padding : "2rem"}}>
          <Link to="/" className="btn-primary">
              back 
          </Link>
        </div>
        
        <Footer/>
      </>
    );
  }
}
