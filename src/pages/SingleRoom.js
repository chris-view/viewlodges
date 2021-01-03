import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import YoutubeVideo from "../components/YoutubeVideo"
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
    //  title,
      type,
      name,
      occupancy,
      description,
      size,
      annualRent,
      water,
      extras,
    //  images
    } = room;
   // const [main, ...defaultImages] = images;

    return (
       <>
        <section className="single-room">
         
          <div className="single-room-info">
            <article className="info">
              <YoutubeVideo/>
            </article>
            <article className="info">
              <h3>Kindly Subscribe and Follow Us:</h3>
              <h6> Facebook: @Viewlodges</h6>
              <h6> Instagram : @Viewlodges </h6>
              <h6> YouTube : @Viewlodges </h6>
            </article>
              
            <article className="info">
              <h3>info</h3>
              <h6>title : {name}</h6>
              <h6>type : {type}</h6>
              <h6>rent cost : ₦{annualRent}</h6>
              <h6>running water : {water ? "available" : "not available"}</h6>
              <h6>occupancy : {occupancy ? "available" : "occupied"}</h6>
              <h6>max capacity </h6>
              <h6>size : {size} SQFT</h6>
              
            </article>
            <article className="desc">
              <h3>address</h3>
              <p>{description}</p>
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
        <div  style={{ display : "flex", alignItems : "center", justifyContent : "center"}}>
          <Link to="/" className="btn-primary">
              back 
          </Link>
        </div>
      </>
    );
  }
}
