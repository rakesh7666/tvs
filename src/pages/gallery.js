import React, { Component } from 'react'

import Lightroom from 'react-lightbox-gallery'
import PageTitle from '../components/pageTitle/pageTitle'

class Gallery extends Component {
    render() {
        var images = [
            {
                src: "./assets/images/04.jpg",
                desc: 'Person wearing shoes',
                sub: 'Gift Habeshaw'
            },
            {
                src: "./assets/images/04.jpg",
                desc: 'Blonde woman wearing sunglasses smiling at the camera ',
                sub: 'Dmitriy Frantsev'
            },
            {
                src: "./assets/images/04.jpg",
                desc: 'Person wearing shoes',
                sub: 'Gift Habeshaw'
            },
            {
                src: "./assets/images/04.jpg",
                desc: 'Blonde woman wearing sunglasses smiling at the camera ',
                sub: 'Dmitriy Frantsev'
            },
            {
                src: "./assets/images/04.jpg",
                desc: 'Person wearing shoes',
                sub: 'Gift Habeshaw'
            },
            {
                src: "./assets/images/04.jpg",
                desc: 'Blonde woman wearing sunglasses smiling at the camera ',
                sub: 'Dmitriy Frantsev'
            }
        ]
        var settings = {
            columnCount: {
                default: 3,
                mobile: 1,
                tab: 2
            },
            mode: 'dark'
        }
        return (
            <div>
                <PageTitle data="Gallery" />
                <Lightroom images={images} settings={settings} />
            </div>
        )
    }
}

export default Gallery;