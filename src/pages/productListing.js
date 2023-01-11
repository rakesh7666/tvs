import React, { Component } from 'react';
import PageTitle from '../components/pageTitle/pageTitle';
import ProductCard from '../components/productCard/productCard';
import products from '../local-json/products';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class ProductListing extends Component {
    render() {
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
            <div className='productListing'>
                <PageTitle data='Products' />
                <div className='container'>
                    <div className='row'>
                        {products && products.map(item => (
                            <div className='col-md-3' key={item.id}>
                                <ProductCard data={item} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='container'>
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
};


export default ProductListing;