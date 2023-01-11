import React, { Component } from "react";
import './productCard.css';

class ProductCard extends Component {
    render() {
        if (!this.props.data) return null;
        let data = this.props.data;
        return (
            <a className="card productCard" href={data.id ? 'product/' + data.id : '#'}>
                <img src={data.productImage} alt="Denim Jeans" />
                <div className="card-body">
                    <h3>{data.title}</h3>
                    <p className="description">{data.description}</p>
                    <p className="price">₹ {data.price}</p>
                </div>
            </a>
        );
    }
}

export default ProductCard;