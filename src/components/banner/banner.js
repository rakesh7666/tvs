import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';

class Banner extends Component {
    render() {
        if (!this.props.data) return null;
        const slideData = this.props.data;
        console.log(slideData);
        return (
            <Carousel>
                {slideData.map(item => (
                    <Carousel.Item key={item.id}>
                        <img
                            className="d-block w-100" width="1349" height="450"
                            src={item.url}
                            alt={item.title}
                        />
                    </Carousel.Item>
                ))}

            </Carousel>
        );
    }
}

export default Banner;