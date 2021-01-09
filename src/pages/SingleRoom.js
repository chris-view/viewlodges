import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import YoutubeVideo from "../components/YoutubeVideo"
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
  // console.log(`props in this singleRoom component ${JSON.stringify(this.props.match.params)}`);
    this.state = {
      id: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  
  static contextType = RoomContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getRoom } = this.context;
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
//      occupancy,
      address,
      size,
      annualRent,
      water,
      extras,
      capacity,
      junction,
      nameOfCaretaker,
      phOfCaretaker1,
      phOfCaretaker2,
      avatarCaretaker,
    //  images
    } = room;
   // const [main, ...defaultImages] = images;

    return (
       <>
        <section className="single-room">
         
          <div className="single-room-info">
            <article className="info">
              {// test for when youtube URL is not given and display frontal image instead
              }
              <YoutubeVideo title = {name}/>
            </article>
            <article className="info">
              <h5 className="format-text">Kindly Subscribe to Stay Updated:</h5>
              <h6> YouTube : @Viewlodges </h6>
              <h6> Facebook: @Viewlodges</h6>
              <h6> Instagram : @Viewlodges </h6>
              
            </article>
              
            <article className="info">
              <h3>info</h3>
              <h6>title :<em>{name}</em></h6>
              <h6>type : <em>{type}</em></h6>
              <h6>rent cost : <em><b style={{color:"lightGreen"}}> ₦{annualRent}</b></em></h6>
              <h6>running water : <em className="format-text"> {water ? "available" : "not available"}</em></h6>
              <h6>occupancy : <em style = {{color:"#ac6f28", fontSize:"0.7em", lineHeight:"1.5"}}>[ Please contact caretaker or agent to confirm current occupancy ] </em></h6>
              <h6 >Roommates :  <em className="format-text">{capacity < 1 ? `No Restriction`: `${capacity} maximum`}</em> </h6>
              {size ? <h6>size :  {size} SQFT</h6>:""}
              
            </article>
            <article className="desc">
              <h3>address</h3>
              <p>{address}</p>
              <br/>
            <h6>Closest Junction : </h6> {junction}
              
              <br/>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras | rules </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
          <img style={{borderRadius:"50%", width:"10em", height:"10em", border: "5px solid #ac6f28"}} src={avatarCaretaker} alt="Caretaker" />
          <h3>Caretaker</h3>
          <h6>{nameOfCaretaker}</h6>
          <p>{phOfCaretaker1 }{phOfCaretaker2 ? `, ${phOfCaretaker2}`:""}</p>
        </div>
        <div  style={{ display : "flex", alignItems : "center", justifyContent : "center", padding : "2rem"}}>
          <Link to="/" className="btn-primary">
              back 
          </Link>
        </div>
      </>
    );
  }
}
