import React, { Component } from 'react';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';


class Hero extends Component {

    changeImg(img) {
        this.props.setImg(img);
        let imgGallery = document.querySelector('.img-gallery img');
        imgGallery.style.animation = 'anima .5s ease-in-out';

        setTimeout(() => {
            imgGallery.style.animation = 'none';
        }, 500)
    }
    render() {
        let imgs = [img1, img2, img3, img4];
        let elSpan = imgs.map((image, index) => {
            return (
                <span key={index} onClick={() => this.changeImg(image)}>{index + 1}</span>
            )
        })
        return (
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6 title">
                            <h3>Don’t cry because it’s over</h3>
                            <h2>smile because it happened.</h2 >
                            <span>Dr. Seuss</span>
                        </div>
                        <div className="col-6">
                            <div className="img-gallery">
                                <img src={this.props.img} alt="img"/>
                            </div>
                            <div className="pagi">
                                {elSpan}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;
