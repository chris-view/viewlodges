import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp} from "react-icons/fa";
import { RoommieContext } from "../roommieContext";
import defaultBcg from "../images/VL_fav_white.PNG";
import defaultAvatar from "../images/default_video.png";
import Footer from "../components/Footer";
import AddRoommie from "../components/AddRoommie";
import YouTubeButton from "../components/YouTubeButton";


export default class Roommie_Profile extends Component {
  
  constructor(props) {
    super(props);
  // console.log(`props in this singleRoom component ${JSON.stringify(this.props.match.params)}`);
    this.state = {
      id: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  // navigate component to the to
  componentDidMount() {
  //  window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  
  static contextType = RoommieContext;

  render() {
    const { getRoommie, formatPrice } = this.context;
    const roommie = getRoommie(this.state.id);

    if (!roommie) {
      return (
        <div className="error">
          <h3> Roommie details not found...</h3>
          <Link to="/" className="btn-primary">
            go back home
          </Link>
        </div>
      );
    }
    const {
  
      type,
      fname,
      rentCost,
      preconditions,
      roommieAvatar,
      lodgeAvatar,
      nameOfLodge,
      region,
      school,
      dept,
      level,
      gender,
      interestedIn,
      contact,
      isRoommieFound,
      isLodgeFound,
    } = roommie;
   
    // convert to whatsapp linkable number
    let a = contact.split("")
    a.shift()
    let whatsappContact = a.join("")


    return (
       <>
        <section className="single-room">
          
          <div className="single-room-info">
             <article className="info">
                <div style={{width:"100%", height:"15em", position:"relative", }}>
                    <img style={{ width:"100%", height:"100%", borderTopLeftRadius:"15%", borderTopRightRadius:"15%"}} src={lodgeAvatar || defaultAvatar} alt="found lodge" /> 
                    <div style={{position:"absolute", bottom:"calc(50% - 12em)", right:"calc(50% - 4em)"}}>
                        <img style={{borderRadius:"50%", width:"8em", height:"8em", border: "5px solid #ac6f28", marginBottom: "1em"}} src={roommieAvatar || defaultAvatar} alt="Caretaker" />  
                    </div>
                    
                </div>
            </article>
          <article className="info">
              <br/><br/><br/>
              {/* <h5 className="format-text">Like, Follow and Stay Updated</h5>
              <a href="https://www.youtube.com/channel/UCJf0a6NnSk6Z7E3E-dY4csg" target="blank"><FaYoutube className="social-icon youtube" /></a>
              <a href="https://www.facebook.com/viewlodges" target="blank"><FaFacebook className="social-icon facebook" /></a>
              <Link to="#"><FaInstagram className="social-icon instagram" /></Link><br/><br/><br/>
               */}
              
              <YouTubeButton/>
              
              <br/>
              <em style = {{color:"grey", fontSize:"0.7em", lineHeight:"1.5"}}>Please Subscribe if you find what we do useful and stay updated.</em>
              
            </article>
            <article className="info">
              <h3>Brief Profile</h3>
              <h6>Name : {fname}</h6>
              <h6>School : {school}</h6>
              <h6>Dept : {dept}</h6>
              <h6>Level : {level}</h6>
              <h6>Gender : {gender}</h6>
              <h6>Interested In : {interestedIn}s</h6>
              
            </article>    
            <article className="info">
              {isLodgeFound ?
                 <> 
                  <h3>Found Lodge Info</h3>
                  <h6>title : {nameOfLodge}</h6>
                  <h6>type : {type}</h6>
                  <h6>located at : {region}</h6>
                  <h6>rent cost : <b style={{color:"lightGreen"}}> {formatPrice(rentCost)}</b></h6>
                 </>
              :
                <> 
                  <h3>Preferred Lodge</h3>
                  <h6>type : {type}</h6>
                  <h6>located at : {region}</h6>
                  <h6>rent budget : <b style={{color:"lightGreen"}}> {formatPrice(rentCost)}</b></h6>
                 </>  
              }
             
            </article>
          </div> 
        </section>
        {preconditions ? 
        <section className="room-extras">
          <h6>A Roommate who is: </h6>
          <ul className="extras">
            {preconditions.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>:""
        }
        {!isRoommieFound ?
        <>
          <a style ={{textDecoration:"none"}}  href={`https://wa.me/234${whatsappContact}?text=Hi,%20I%20saw%20your%20roommate%20request%20on%20Viewlodges.com.ng`} target="blank">
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <div style={{width:"10em", height:"3em", backgroundColor:"black", borderRadius:"3em", padding:"0.4em 1em 0 1em", border: "0.2em solid #ac6f28"}}>
                  <span><FaWhatsapp style={{color:"green", width:"1.5em", height:"1.5em", float:"left"}}/></span>
                  <span style={{color:"white", float:"right"}}>Send DM</span>
              </div>  
            </div> 
          </a>
          <br/><br/>
          {/* <div className="disclaimer">
            <h4 className="room-extras">Safty Tip:</h4><em>Always make proper investigations before making any form of payments. To help keep <span>ViewLodges</span> safe for everyone, report user if you find anything frudulent.</em>
          </div> */}
        </>
       
        :<div style={{display:"flex", justifyContent:"center", alignItems:"center", color:"grey"}}> 
          <h4>Roommie Found!</h4>
        </div>}
        <div className="room-extras">
            <AddRoommie text = "Do you also want to make your own request?"/>
        </div>
       
      <div  style={{ display : "flex", alignItems : "center", justifyContent : "center", padding : "2rem", paddingTop:"0"}}>
          <Link to="/" className="btn-primary">
               back 
          </Link>
        </div>
        
        <Footer/>
      </>
    );
  }
}
