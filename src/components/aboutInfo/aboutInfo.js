import React, { Component } from "react";
import './aboutInfo.css';

class AboutInfo extends Component {
    render() {
        if (!this.props.data) return null;
        const data = this.props.data;
        return (
            <div className={data.isReverse ? 'about-us-section row align-items-center flex-row-reverse text-end' : 'about-us-section row align-items-center'}>
                <div className="about-us-image col-sm-7">
                    <img src={data.image} className="w-100" alt="Lobby Image" />
                </div>
                <div className="about-us-info col-sm-5">
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </div>
            </div >
        );
    }
}

export default AboutInfo;