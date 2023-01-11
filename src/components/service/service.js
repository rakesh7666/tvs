import React, { Component } from "react";
import './service.css';

class Service extends Component {
    render() {
        if (!this.props.data) return null;
        const services = this.props.data;
        console.log(services);
        return (
            <section class="section-3">
                <div class="sec-3hdiv-jk">
                    <h1 class="sec-3jk"><span>OUR SERVICES</span></h1>
                    <p class="sec-3jk-p">Your one stop for all your Two wheelers needs</p>
                </div>
                <div class="">
                    <div class="container-fluid">
                        <div class="row">
                            {services.map(item => (
                                <div class="col">
                                    <div class="card mb-3 mb3-jk">
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <img src={item.icon} class="img-fluid rounded-start card-img-jk" alt="..." />
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body card-body-md3">
                                                    <h5 class="card-title">{item.title}</h5>
                                                    <p class="card-text crd-jk">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div >
                            ))}
                        </div>
                    </div>
                </div>
            </section >

        );
    }
}

export default Service;