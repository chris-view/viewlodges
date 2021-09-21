import React from "react";
import { useContext} from "react";
import { RoomContext } from "../context";
import Title from "./Title";
import schoolData from "../schoolData";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};


const RoomsFilter = () => {
  // react hooks
  const context = useContext(RoomContext);
  const {
    school,
    region,
    type,
    annualRent,
    occupancy,
    water,
    regions,
    handleChange,
    minPrice,
    maxPrice,
    rooms
  } = context;

  //set default regions
  // get unique types
  let types = getUnique(rooms, "type");
 
  // add all
  types = ["All", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item} className="format-value">
      {item}
    </option>
  ));
  
  // get schools
  let schools = schoolData.map(item => item.school)
  schools = schools.map((item, index) => (
    <option key={index} value={item} className="format-sch">
      {item}
    </option>
  ));
   
  
  return (
    <section className="filter-container">
      <Title title="Filter lodges" />
      <form className="filter-form">
        {/* school  */}
        <div className="form-group">
          <label htmlFor="school">School</label>
          <select
            name="school"
            id="school"
            onChange={handleChange}
            className="form-control"
            value={school}
          >
            {schools}
          </select>
        </div>
        {/* end of schools*/}

         {/* regions  */}
         <div className="form-group">
          <label htmlFor="region">Popular Regions</label>
          <select
            name="region"
            id="region"
            onChange={handleChange}
            className="form-control"
            value={region}
          >
           {regions.length < 1 ?  <option>[First select school]</option> :
              <>
                  <option>All</option>
                  {regions.map((item, index) => (
                      <option key={index} value={item} className="format-value">
                      {item}
                      </option>
                  ))}
              </>
            }
          </select>
        </div>
        {/* end of regions*/}
       

        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">space type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">budget ₦{annualRent}</label>
          <input
            type="range"
            name="annualRent"
            min={minPrice}
            max={maxPrice}
            id="annualRent"
            value={annualRent}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of room price*/}
       
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="occupancy"
              id="occupancy"
              checked={occupancy}
              onChange={handleChange}
            />
            <label htmlFor="occupancy">available only</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="water"
              checked={water}
              onChange={handleChange}
            />
            <label htmlFor="water">Running Water</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  );
};

export default RoomsFilter;
