import React, { Component } from 'react';
import './style.css';

export default class HomeSection extends Component {
    render() {
        return (
            <section id="home" className="parallax-section">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 col-sm-6">
                            <div className="home-img"></div>
                        </div>

                        <div className="col-md-6 col-sm-6">
                            <div className="home-thumb">
                                <div className="section-title">
                                    <h4 className="wow fadeInUp" data-wow-delay="0.3s">Welcome to my Website</h4>
                                    <h1 className="wow fadeInUp" data-wow-delay="0.6s">Hello, I am <strong>Royden</strong> currently based in Mangalore city.</h1>
                                    <p className="wow fadeInUp" data-wow-delay="0.9s">A passionate and enthusiastic engineer who is always looking for newer and better ways of building applications and backends; while trying to make everything serverless.</p>

                                    <a href="#about" className="wow fadeInUp smoothScroll section-btn btn btn-success" data-wow-delay="1.4s">Know More</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        )
    }
}