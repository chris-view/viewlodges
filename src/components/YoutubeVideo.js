import React from "react";

const youtubeVideo = ({title, url}) =>

(  
    <iframe 
        title = {`Views on ${title}`}
        width="100%" 
        height="220" src={`https://www.youtube.com/embed/${url}`}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
    </iframe>
    
)

export default youtubeVideo;
