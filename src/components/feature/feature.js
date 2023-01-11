import React, { Component } from "react";
import './feature.css';

class Features extends Component {
    render() {
        if (!this.props.data) return null;
        const features = this.props.data;
        return (
            <section class="section-4">
                <div class="container-fluid">
                    <div class="row">
                        {features.map(item => (
                            <div class="col bg-card">
                                <div class="card text-white txt-jk">
                                    <img src={item.icon} class="card-img cd-img-jk" alt={item.title} />
                                    <div class="card-img-overlay overlay-jk">
                                        <h5 class="card-title">{item.title}</h5>
                                        <p class="card-text card-p-jk">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;