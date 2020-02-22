import React, { Component } from 'react';
import './style.css';

export default class EducationSection extends Component {
    render() {
        return (
            <section id="education" className="parallax-section">
                <div className="container">
                    <div className="row exu-row">

                        <div className="col-md-6 col-sm-6 exu-cell">
                            <div className="color-white education-thumb">
                                <div className="wow fadeInUp section-title" data-wow-delay="0.8s">
                                    <h1>My Education</h1>
                                    <p className="color-white">Qualifications and institutions I studied in.</p>
                                </div>

                                <div className="wow fadeInUp color-white media" data-wow-delay="1.2s">
                                    <div className="media-object media-left">
                                        <i className="fa fa-graduation-cap"></i>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">B.E in Computer Science <small>2015 August - 2019 May</small></h3>
                                        <p className="color-white">St. Joseph Engineering College, Vamanjoor, Mangalore</p>
                                    </div>
                                </div>

                                <div className="wow fadeInUp color-white media" data-wow-delay="1.6s">
                                    <div className="media-object media-left">
                                        <i className="fa fa-university education-fas"></i>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">Class 12th <small>2014 April - 2015 March</small></h3>
                                        <p className="color-white">Mahesh PU College, Kottara Chowki, Mangalore</p>
                                    </div>
                                </div>

                                <div className="wow fadeInUp color-white media" data-wow-delay="2.0s">
                                    <div className="media-object media-left">
                                        <i className="fa fa-university education-fas"></i>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">Class 10th <small>2012 May - 2013 March</small></h3>
                                        <p className="color-white">St. Aloysius High School, Ladyhill, Mangalore</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 exu-cell">
                            <div className="background-image education-img"></div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}