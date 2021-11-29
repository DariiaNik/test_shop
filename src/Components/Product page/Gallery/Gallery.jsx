import React from "react";
import './Gallery.css'



const Gallery = (props) => {
    return(
        <div className="small_image" onClick={ () => props.click(props.picture)}>
            <img src={props.picture} alt='clothes'/>
        </div>
    )
}

export default Gallery