import React from "react";
import { FaSortDown} from "react-icons/fa";
import useLocalStorageState from "use-local-storage-state";
import ImagesTest from "../components/ImagesTest";
import YoutubeVideo from "../components/YoutubeVideo";


const Visuals = ({images, name, youtubeUrl}) => {
  const [display, setDisplay] = useLocalStorageState("display","pictures");
  const setLodges = () => {
    setDisplay("pictures")
  }
  const setRoomies = () => {
    setDisplay("videos")
  }

 
  return (
    <>
     
        
        <article className="info">
            <div className = "sort-container">
              <div>
                <div className={ display === "pictures" ? "basic-sort active-sort" : "basic-sort"} onClick = {setLodges}>
                  Pictures
                </div>
                <div className={ display === "pictures" ? "show-sort-icon":"hide-sort-icon"}>
                <FaSortDown/>
                </div>
              
              </div>
              <div>
                <div className={ display === "videos" ? "basic-sort active-sort" : "basic-sort"} onClick = {setRoomies}>
                  Videos
                </div>
                <div className={ display === "videos" ? "show-sort-icon":"hide-sort-icon"}>
                <FaSortDown/>
                </div>
              
              </div>
          </div>
      
            {display === "pictures" ?  
            
                <ImagesTest data = {images}/>: 
                 youtubeUrl ? <YoutubeVideo title = {name} url = {youtubeUrl}/>:<div style ={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", height:"220px", textAlign:"center", color:"grey"}}><h4>No Videos Available!!</h4></div>
            }
        </article>
    
    </>
  );
};

export default Visuals;
