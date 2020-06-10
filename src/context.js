import React, { Component } from "react";
import items from "./data";
import schoolData from "./schoolData";
//import Client from "./Contentful";

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    //
    school: "All",
    region: "All",
    type: "All",
    title: "",
    regions: [],
    annualRent: 0,
    occupancy:false,
    standByGen: false,
    water: false,
    minPrice: 0,
    maxPrice: 0,
  };

  // getData = async () => {
  //   try {
  //     let response = await Client.getEntries({
  //       content_type: "beachResortRoom"
  //     });
  //     let rooms = this.formatData(response.items);

  //     let featuredRooms = rooms.filter(room => room.featured === true);
  //     //
  //     let maxPrice = Math.max(...rooms.map(item => item.price));
  //     let maxSize = Math.max(...rooms.map(item => item.size));
  //     this.setState({
  //       rooms,
  //       featuredRooms,
  //       sortedRooms: rooms,
  //       loading: false,
  //       //
  //       price: maxPrice,
  //       maxPrice,
  //       maxSize
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  componentDidMount() {
    // this.getData();

    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    //
    let maxPrice = Math.max(...rooms.map(item => item.annualRent));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      //
      annualRent : maxPrice,
      price: maxPrice, // redundant code
      maxPrice
      
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }
  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    
    if(name === "school"){//check to update regions
      
      let regionList = schoolData.find(item => item.school===value);
      this.setState({regions:regionList.region});
    }

    this.setState(
      {
        [name]: value // array destructuring 
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let {
      rooms,
      school,
      region,
      type,
      annualRent,
      occupancy,
      standByGen
      
    } = this.state; 

    let tempRooms = [...rooms];
    // transform values
    
    annualRent = parseInt(annualRent); 

    // filter by school
    if (school.toLowerCase() !== "all") {
      tempRooms = tempRooms.filter(room => room.school.toLowerCase() === school.toLowerCase());
    }

    // filter by region
    if (region.toLowerCase() !== "all") {
      tempRooms = tempRooms.filter(room => room.region.toLowerCase() === region.toLowerCase());
    }

    // filter by type
    if (type.toLowerCase() !== "all") {
      tempRooms = tempRooms.filter(room => room.type.toLowerCase() === type.toLocaleLowerCase());
    }
    
    // filter by price
    tempRooms = tempRooms.filter(room => room.annualRent <= annualRent);
    //filter by breakfast
    if (occupancy) {
      tempRooms = tempRooms.filter(room => room.occupancy === true);
    }
    //filter by pets
    if (standByGen) {
      tempRooms = tempRooms.filter(room => room.standByGen === true);
    }
    this.setState({
      sortedRooms: tempRooms
    });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export { RoomProvider, RoomContext };

