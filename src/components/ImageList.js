import React from "react";
import './ImageList.css';
import ImageCard from './ImageCard'
const ImageList = function (props) {
  const images = props.images.map(function(image){
    return <ImageCard key={image.id} image={image}></ImageCard>;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
