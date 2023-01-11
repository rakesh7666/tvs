import React, { Component } from "react";
import './infoText.css';

class InfoText extends Component {
    render() {
        if (!this.props.data) return null;
        const data = this.props.data;
        return (
            <section class="section-5">
                <div class="sec-5jk">
                    <h1 class="sec-5jk-h1">{data.title}</h1>
                    <p class="sec-5jk-p">{data.description}</p>
                </div>
            </section>
        );
    }
}

export default InfoText;