import React from "react";
import { useContext} from "react";
import { RoommieContext } from "../roommieContext";
import Title from "./Title";
import schoolData from "../schoolData";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};


const RoomsFilter = () => {
  // react hooks
  const context = useContext(RoommieContext);
  const {
    school,
    region,
    type,
    regions,
    level,
    gender,
    handleRoommieChange,
    roommies
  } = context;

  //set default regions
  // get unique types
  let types = getUnique(roommies, "type");
 // let levels = getUnique(roommies, "level")
  // add all
  types = ["All", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item} className="format-value">
      {item}
    </option>
  ));
  
  //level
  //  levels = ["Any", ...levels]
  let  levels = (
      <>
        <option value = "Any" className="format-value">
          Any
        </option>
        <option value = "Basic" className="format-value">
          Basic
        </option>
        <option value = "100L" className="format-value">
          100L
        </option>
        <option value = "200L" className="format-value">
          200L
        </option>
        <option value = "300L" className="format-value">
          300L
        </option>
        <option value = "400L" className="format-value">
          400L
        </option>
      </>
    )
    
  // get schools
  let schools = schoolData.map(item => item.school)
  schools = schools.map((item, index) => (
    <option key={index} value={item} className="format-sch">
      {item}
    </option>
  ));

  
  return (
    <section className="filter-container">
      <Title title="Roommie Requests" />
      <form className="filter-form">
        {/* school  */}
        <div className="form-group">
          <label htmlFor="school">School</label>
          <select
            name="school"
            id="school"
            onChange={handleRoommieChange}
            className="form-control"
            value={school}
          >
            {schools}
          </select>
        </div>
        {/* end of schools*/}
         {/* level  */}
         <div className="form-group">
          <label htmlFor="level">Interested Level</label>
          <select
            name="level"
            id="level"
            onChange={handleRoommieChange}
            className="form-control"
            value={level}
          >
            {levels}
          </select>
        </div>
        {/* end of level*/}
        {/* gender */}
        <div className="form-group">
          <label htmlFor="gender">Interested In</label>
          <select
            name="gender"
            id="gender"
            onChange={handleRoommieChange}
            className="form-control"
            value={gender}
          >
            <option>Any</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        {/* end of gender*/}
         {/* regions  */}
         <div className="form-group">
          <label htmlFor="region">Preferred Region</label>
          <select
            name="region"
            id="region"
            onChange={handleRoommieChange}
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
          <label htmlFor="type">Interested space</label>
          <select
            name="type"
            id="type"
            onChange={handleRoommieChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
      
       
      </form>
    </section>
  );
};

export default RoomsFilter;
