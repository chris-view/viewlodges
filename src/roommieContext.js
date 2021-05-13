import React, { Component } from "react"; 
// import items from "./roommieData";
import schoolData from "./schoolData";
import Client from "./Contentful";

const RoommieContext = React.createContext();

export default class RoommieProvider extends Component {
  state = {
    rooms: [],
    roommies: [],

    sortedRooms: [],
    sortedRoommies: [],

    loading: true,
    school: "All",
    region: "All",
    type: "All",
    regions: [],
    gender: "Any",
    level: "Any"
   
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "roommiesContentType"
      });
      console.log(response.items)
      let roommies = this.formatData(response.items);


      this.shuffleArray(roommies);
      this.setState({
        roommies,
        sortedRoommies: roommies,
        loading: false,
      
      });
   
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();


    // ====> start of local data
   
    // let roommies = this.formatData(items);

    // this.shuffleArray(roommies);
    // this.setState({
    //   roommies,
    //   sortedRoommies: roommies,
    //   loading: false,
     
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
    
      let roommieAvatar = "";
      // start of comment on local
      if(item.fields.roommieAvatar){ // coment this out when dealing with local data
        roommieAvatar = item.fields.roommieAvatar.map(image => image.fields.file.url);  
      }
      let lodgeAvatar = "";
      if(item.fields.lodgeAvatar){
        lodgeAvatar = item.fields.lodgeAvatar.map(image => image.fields.file.url);
      }

      // end of comment on local
      let roommie = { ...item.fields, id, roommieAvatar, lodgeAvatar };
      return roommie;
    });
    return tempItems;
  }
  getRoommie = id => {
    let tempRooms = [...this.state.roommies];
    const roommie = tempRooms.find(roommie => roommie.id === id);
    return roommie;
  };

  formatPrice = price => "₦"+price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  handleRoommieChange = event => {
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
      roommies,
      school,
      region,
      type,
      level,
      gender
      
    } = this.state; 

    let tempRoommies = [...roommies];
    // transform values
    
    // filter by school
    if (school.toLowerCase() !== "all") {
      tempRoommies = tempRoommies.filter(roommie => roommie.school.toLowerCase() === school.toLowerCase());
    }

    // filter by region
    if (region.toLowerCase() !== "all") {
      tempRoommies = tempRoommies.filter(roommie => roommie.region.toLowerCase() === region.toLowerCase());
    }

    // filter by type
    if (type.toLowerCase() !== "all") {
      tempRoommies = tempRoommies.filter(roommie => roommie.type.toLowerCase() === type.toLocaleLowerCase());
    }
    // filter by level
    if (level.toLowerCase() !== "any") {
      tempRoommies = tempRoommies.filter(roommie => roommie.level.toLowerCase() === level.toLocaleLowerCase());
    }
    // filter by gender
    if (gender.toLowerCase() !== "any") {
      tempRoommies = tempRoommies.filter(roommie => roommie.gender.toLowerCase() === gender.toLocaleLowerCase());
    }
    
    this.setState({
      sortedRoommies: tempRoommies
    });
  };
  render() {
    return (
      <RoommieContext.Provider
        value={{
          ...this.state,
          getRoommie: this.getRoommie,
          handleRoommieChange: this.handleRoommieChange,
          formatPrice : this.formatPrice,
        }}
      >
        {this.props.children}
      </RoommieContext.Provider>
    );
  }
}

export { RoommieProvider, RoommieContext };

