import React, { Component } from 'react';
import AboutInfo from '../components/aboutInfo/aboutInfo';
import PageTitle from '../components/pageTitle/pageTitle';
import Testimonials from '../components/testimonial/testimonial';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutData: [
                {
                    image: './assets/images/vision-01.jpg',
                    title: 'About Us',
                    description: 'RANGARAYA AUTOMOTIVES TVS is one of the fastest growing Authorised Dealer for TVS 2 Wheelers. Endowed with a state-of-the-art dealership and highly skilled Marketing and Service Staff, we have devoted ourselves to helping and serving our customers to the best of our ability.',
                    isReverse: true
                },
                {
                    image: 'https://i.ibb.co/HzZgGkK/vision-03.png',
                    title: 'Our Mission',
                    description: 'Here at RANGARAYA AUTOMOTIVES TVS, we do more than just sell great two-wheelers, we strive to deliver 100% customer satisfaction from the moment you first contact our dealership. With a loyal base of more than 50,000 satisfied customers across Mumbai, prompt customer service and world class facilities, RANGARAYA AUTOMOTIVES TVS is the most reliable automobile dealer in West Bengal. We have been known for our impeccable quality Service and customer satisfaction, which we assure you will personally experience in this relationship as well.',
                    isReverse: false
                },
                {
                    image: './assets/images/vision-01.jpg',
                    title: 'Our Values',
                    description: 'RANGARAYA AUTOMOTIVES TVS showcases the finest two wheelers from the TVS stable. Elegant design aesthetics, superior technology, and quality build sets the TVS brigade apart from its competition. RANGARAYA AUTOMOTIVES TVS brings under one roof with ultra-modern workshop with highly experienced and trained staff to provide best in class service to all our customers. The unmatched TVS superiority, style and class backed by efficient customer service and after sales support.',
                    isReverse: true
                },
            ],
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
        }

    }
    render() {
        return (
            <div className='aboutPage'>
                {/* <PageTitle data="About Us" /> */}
                {this.state.aboutData.map(item => (
                    <AboutInfo data={item} />
                ))}
                <section className='team-section section-spacing'>
                    <div className="container">
                        <h3 className='text-center mb-4'>Our Team Members</h3>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card">
                                    <img src="https://i.ibb.co/8x9xK4H/team.jpg" alt="Jane" />
                                    <div className='card-body text-center'>
                                        <h4>Jane Doe</h4>
                                        <p class="title">CEO & Founder</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img src="https://i.ibb.co/8x9xK4H/team.jpg" alt="Jane" />
                                    <div className='card-body text-center'>
                                        <h4>Jane Doe</h4>
                                        <p class="title">CEO & Founder</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img src="https://i.ibb.co/8x9xK4H/team.jpg" alt="Jane" />
                                    <div className='card-body text-center'>
                                        <h4>Jane Doe</h4>
                                        <p class="title">CEO & Founder</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img src="https://i.ibb.co/8x9xK4H/team.jpg" alt="Jane" />
                                    <div className='card-body text-center'>
                                        <h4>Jane Doe</h4>
                                        <p class="title">CEO & Founder</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Testimonials data={this.state.testimonials} />
            </div>
        );
    }
};


export default AboutUs;