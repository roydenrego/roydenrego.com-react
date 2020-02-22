import React, { Component } from 'react';
import './style.css';

export default class ExperienceSection extends Component {
    render() {
        return (
            <section id="experience" className="parallax-section">
                <div className="container">
                    <div className="row exu-row">

                        <div className="col-md-6 col-sm-6 exu-cell">
                            <div className="background-image experience-img"></div>
                        </div>

                        <div className="col-md-6 col-sm-6 exu-cell">
                            <div className="color-white experience-thumb">
                                <div className="wow fadeInUp section-title" data-wow-delay="0.8s">
                                    <h1>My Experiences</h1>
                                    <p className="color-white">Previous companies and my tasks</p>
                                </div>

                                <div className="wow fadeInUp color-white media" data-wow-delay="1.6s">
                                    <div className="media-object media-left">
                                        <i className="fa fa-laptop"></i>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">Softrixz - Freelance Developer <small className="exp-small">Jan 2013 - Present</small></h3>
                                        <p className="color-white">Been working as Freelance Developer at Softrixz building mobile and desktop appplications for clients and internal projects.</p>
                                    </div>
                                </div>

                                <div className="wow fadeInUp color-white media" data-wow-delay="1.2s">
                                    <div className="media-object media-left">
                                        <i className="fa fa-laptop"></i>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">TechShaadi - Freelance Developer <small className="exp-small">June 2016 - August 2019</small></h3>
                                        <p className="color-white">Working as Freelance Developer in TechShaadi building mobile applications for weddings.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}