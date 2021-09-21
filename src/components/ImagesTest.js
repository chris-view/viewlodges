import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";




export default function ImagesTest({data}) {
  
 
  let images = []

  images = data.map((url, i) =>(
      {
        original : url 
      }
    ))

  return (
    <div style={{textAlign:"center"}}>
        <ImageGallery showThumbnails={false} items={images} />
    </div>
  )
}

