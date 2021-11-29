import React from "react";
import Gallery from "./Gallery";


class Pictures extends React.Component {

    state = {
        src: this.props.images[0]
    }

    render() {

        let Click = (picture) => {
            this.setState({
                src: picture
            })
        }

        let galleryElement = this.props.images.map(picture => (
            <Gallery key={picture} picture={picture} click={Click}/>
        ))


        return (
            <div className="product_page_picture picture">
                <div className="picture_small ">
                    {galleryElement}
                </div>
                <div className="picture_big _ibg">
                    <img src={this.state.src} alt='clothes'/>
                </div>
            </div>
        )

    }

}


export default Pictures;




