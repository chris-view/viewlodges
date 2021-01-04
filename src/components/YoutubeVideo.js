import React from "react";

const youtubeVideo = ({title}) =>

( 
    <iframe 
        title = {`Views on ${title}`}
        width="100%" 
        height="250em" src="https://www.youtube.com/embed/4_wg6WO9emA?autoplay=1" 
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
    </iframe>
)

export default youtubeVideo;
