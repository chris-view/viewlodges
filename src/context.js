import React, { Component } from "react"; 
//import items from "./data";
import schoolData from "./schoolData";
import Client from "./Contentful";

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    loading: true,
    school: "All",
    region: "All",
    type: "All",
    regions: [],
    annualRent: 0,
    occupancy:false,
    water: false,
    minPrice: 0,
    maxPrice: 0,
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "lodgesContentType"
      });
      
      let rooms = this.formatData(response.items);
      this.shuffleArray(rooms);
      let boostRooms = rooms.filter(room => room.sponsored === true);
      rooms = [...boostRooms,...rooms]
      let maxPrice = Math.max(...rooms.map(item => item.annualRent));
      this.setState({
        rooms,
        sortedRooms: rooms,
        loading: false,
        annualRent : maxPrice,
        maxPrice
        
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();


    // ====> start of local data
   
    // let rooms = this.formatData(items);
    // this.shuffleArray(rooms);
    // let boostRooms = rooms.filter(room => room.sponsored === true);
    // rooms = [...boostRooms,...rooms]
    // let maxPrice = Math.max(...rooms.map(item => item.annualRent));
    // this.setState({
    //   rooms,
    //   sortedRooms: rooms,
    //   loading: false,
    //   annualRent : maxPrice,
    //   maxPrice
      
    // });
    
    //===> end of local data
  }
  shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }
  formatData(items) {
      let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let avatarCaretaker = "";
      if (item.fields.avatarCaretaker ){// comment out when dealing with local data
          avatarCaretaker = item.fields.avatarCaretaker.fields.file.url;
      }
      let room = { ...item.fields, images, id, avatarCaretaker };
      return room;
    });
    return tempItems;
  }
  getRoom = id => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.id === id);
    return room;
  };

  formatPrice = price => "₦"+price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    
    if( name === "school" ){//check to update regions
      
      let regionList = schoolData.find(item => item.school === value);
      this.setState({regions:regionList.region});
    }

    // Condition to update data accordingly even after school is changed to show all
    if( name === "school" ){
      this.setState(
        {
          school: value,
          region: "All"
        },
        this.filterRooms
      );
    }else{
      this.setState(
        {
          [name]: value // array destructuring 
        },
        this.filterRooms
      );
    }
  };
  filterRooms = () => {
    let {
      rooms,
      school,
      region,
      type,
      annualRent,
      occupancy,
      water
      
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
    //filter by occupancy
    if (occupancy) {
      tempRooms = tempRooms.filter(room => room.occupancy === true);
    }
    //filter by running water
    if (water) {
      tempRooms = tempRooms.filter(room => room.water === true);
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
          handleChange: this.handleChange,
          formatPrice : this.formatPrice,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export { RoomProvider, RoomContext };

