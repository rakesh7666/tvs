import React from 'react';
import { useParams } from 'react-router-dom';
import './productDetails.css';
import products from '../../local-json/products.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from '../productCard/productCard';

const ProductDetails = () => {
    const { productID } = useParams();
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
                                <img className='main-image' id="main-image" src="/assets/images/04.jpg" /> </div>
                            <div className="thumbnail text-center">
                                <img src="/assets/images/04.jpg" width="70" />
                                <img src="/assets/images/04.jpg" width="70" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product p-4">
                            <div className="mb-3">
                                <span className="text-uppercase brand">Orianz</span>
                                <h5 className="text-uppercase productTitle">Men's slim fit t-shirt</h5>
                                <div className="price d-flex flex-row align-items-center">
                                    <span className="act-price">$20</span>
                                    <div className="ml-2">
                                        <small className="dis-price">$59</small>
                                        <span>40% OFF</span>
                                    </div>
                                </div>
                            </div>
                            <div className="detail-section">
                                <h5 className='detail-title'>Product Details</h5>
                                <p>Shop from a wide range of t-shirt from orianz. Pefect for your everyday use, you could pair it with a stylish pair of jeans or trousers complete the look.</p>
                                <p>Shop from a wide range of t-shirt from orianz. Pefect for your everyday use, you could pair it with a stylish pair of jeans or trousers complete the look.</p>
                            </div>
                            <div className='detail-section'>
                                <h5 className='detail-title'>Product Hightlights</h5>
                                <ul>
                                    <li>Leather finish touch; Weight:1100±50 gms</li>
                                    <li>
                                        Off-road look ; Shell: High Impact ABS Material Shell ; Aerodynamic Shape ; Visor: Scratch resistant &amp; UV resistant. Visor in optical polycarbonate</li>
                                    <li>
                                        Easy fitting visor with good ventilation</li>
                                    <li>
                                        Use press button for smooth function of flip up action</li>
                                    <li>
                                        All helmets feel tight at first to meet safety requirements and foam takes time to adjust according to head size.</li>
                                    <li>
                                        Size: Small (55- 56cm), Medium(56- 58cm), Large(58- 59 cm), Extra Large(59- 60cm)</li>
                                </ul>
                            </div>
                            <div className="cart mt-4 align-items-center">
                                <button className="btn btn-primary text-uppercase mr-2 px-4">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
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
    );
}
export default ProductDetails;