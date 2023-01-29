import React from 'react';
import { useParams } from 'react-router-dom';
import './productDetails.css';
import products from '../../local-json/products.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from '../productCard/productCard';
import ReactImageMagnify from 'react-image-magnify';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const ProductDetails = () => {
    const { productID } = useParams();
    const selectedData = products.filter(x => x.id == productID)[0];
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <div className="container mt-5 mb-5">
            <div className="row d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-6">
                        <div className="images pr-3">
                            <div className="text-center pb-3">
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: selectedData.productImage
                                    },
                                    largeImage: {
                                        src: selectedData.productImage,
                                        width: 1200,
                                        height: 1800
                                    }
                                }} />
                            </div>
                            {/* <img className='main-image' id="main-image" src="" /> </div> */}
                            <div className="thumbnail text-center">
                                {selectedData && selectedData.gallery.map(item => (
                                    <img src={item} width="70" />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product p-4">
                            <div className="mb-3">
                                <span className="text-uppercase brand">{selectedData.brand}</span>
                                <h5 className="text-uppercase productTitle">{selectedData.title}</h5>
                                <div className="price d-flex flex-row align-items-center">
                                    <span className="act-price">₹ {selectedData.price} <small>onwards</small></span>
                                    {/* <div className="ml-2">
                                        <small className="dis-price">$59</small>
                                        <span>40% OFF</span>
                                    </div> */}
                                </div>
                            </div>
                            <div className="detail-section">
                                {selectedData.description}
                            </div>
                            <div className='detail-section'>
                                <ul className='productDesc'>
                                    {selectedData.highlightedDescription && Object.keys(selectedData.highlightedDescription).map((key, i) => (
                                        <li><label>{key}: </label><div className='value'>{selectedData.highlightedDescription[key]}</div></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="cart mt-4 align-items-center">
                                <button className="btn btn-secondary text-uppercase me-2 px-4">Download Brochure</button>
                                <button className="btn btn-primary text-uppercase me-2 px-4">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='productDetailed mt-5'>
                <Tabs >
                    <Tab eventKey="technical" title="Technical Specifications">
                        {selectedData.technicalDescription && selectedData.technicalDescription.map(item => (
                            <div className='detail-section'>
                                <h4 className='detail-title'>{item.name}</h4>
                                <ul className='productDesc'>
                                    {item.data && Object.keys(item.data).map((key, i) => (
                                        <li><label>{key}: </label><div className='value'>{item.data[key]}</div></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </Tab>
                    <Tab eventKey="features" title="Features & Options">
                        {selectedData.features && selectedData.features.map(item => (
                            <img src={item} className='img-fluid my-3' />
                        ))}
                    </Tab>
                </Tabs>
            </div>

            <div className='mt-5'>
                <h3 className='sectionTitle mb-3'>Related Products</h3>
                <div className='row'>
                    <Slider {...settings}>
                        {products && products.map(item => (
                            <div className='relatedSlides' key={item.id}>
                                <ProductCard data={item} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default ProductDetails;