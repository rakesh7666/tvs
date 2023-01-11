import React, { Component } from 'react';
import Banner from '../components/banner/banner';
import BookNow from '../components/bookNowCTA/booknow';
import Features from '../components/feature/feature';
import InfoText from '../components/infoText/infoText';
import Service from '../components/service/service';
import Testimonials from '../components/testimonial/testimonial';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerData: [
                {
                    title: 'Banner 1',
                    url: './assets/images/banner-1.jpg',
                    id: 1
                },
                {
                    title: 'Banner 2',
                    url: './assets/images/banner-2.jpg',
                    id: 2
                },
                {
                    title: 'Banner 3',
                    url: './assets/images/banner-3.jpg',
                    id: 3
                },
                {
                    title: 'Banner 4',
                    url: './assets/images/banner-4.jpg',
                    id: 4
                }
            ],
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
            infoText: {
                title: 'OUR PRODUCTS',
                description: 'TVS bikes price starts at ₹ 40,990. TVS has a total of 17 bikes of which 2 models are upcoming which include Creon and Zeppelin. The TVS Apache RR310 is the most expensive Electric bike with a price tag of ₹ 2.5 Lakh. Select a TVS Electric bike to find out its latest price, specifications, features and more.'
            },
            testimonials: [
                {
                    testimonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
                    client: 'Client 1',
                    id: 11
                },
                {
                    testimonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
                    client: 'Client 2',
                    id: 21
                },
                {
                    testimonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
                    client: 'Client 3',
                    id: 31
                }
            ],
        };
    }
    render() {
        return (
            <div className='homeWrapper'>
                <Banner data={this.state.bannerData} />
                <BookNow />
                <Service data={this.state.services} />
                <Features data={this.state.features} />
                <InfoText data={this.state.infoText} />
                <Testimonials data={this.state.testimonials} />
            </div>
        );
    }
};

export default Home;