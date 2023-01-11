import React, { Component } from 'react';
import Features from '../components/feature/feature';
import PageTitle from '../components/pageTitle/pageTitle';
import Service from '../components/service/service';

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [
                {
                    title: 'Sales',
                    description: 'TVS Motor manufactures the largest range of 2-wheelers, starting from mopeds, to scooters, commuter motorcycles, to racing inspired bikes like the Apache series and the RR310.',
                    icon: './assets/images/economy.png'
                },
                {
                    title: 'Services',
                    description: 'We have state of the art workshop with latest equipment, well experienced and TVS motor\'s trained technicians.',
                    icon: './assets/images/customer-service.png'
                },
                {
                    title: 'Spares',
                    description: 'We only uses TVS motor\'s genuine and recommended Parts and Lubricants.',
                    icon: './assets/images/spare-parts.png'
                }
            ],
            features: [
                {
                    title: 'Road Side Assistance',
                    description: 'A professional technician comes to your rescue when your 2 wheeler breaks down in the middle of the journey leaving you stranded Pick up from your current location to nearest TVS service station',
                    icon: './assets/images/04.jpg'
                },
                {
                    title: 'Used Two Wheelers',
                    description: 'Choose from 100% Certified Bikes only. All bikes are thoroughly tested and certified by Auto Experts.',
                    icon: './assets/images/03.jpg'
                },
                {
                    title: 'Finance',
                    description: 'We have the best two wheeler loan interest rate and flexible repayment tenure options through TVS motor\'s Finance',
                    icon: './assets/images/01.jpg'
                }
            ],
        }
    }
    render() {
        return (
            <div className='servicePage'>
                <PageTitle data='Service' />
                <Service data={this.state.services} />
                <Features data={this.state.features} />
            </div>
        );
    }
};


export default Services;