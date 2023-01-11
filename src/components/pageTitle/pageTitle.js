import React, { Component } from "react";
import './pageTitle.css';

class PageTitle extends Component {
    render() {
        if (!this.props.data) return null;
        const title = this.props.data;
        return (
            <div className="pageTitle">
                <h1 className="m-0">{title}</h1>
            </div >
        );
    }
}

export default PageTitle;