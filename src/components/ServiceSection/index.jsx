import React, { Component } from 'react';
import './style.css';

export default class ServiceSection extends Component {
    render() {
        return (
            <section id="service" className="parallax-section">
                <div className="container">
                    <div className="row service-row">

                        <div className="bg-yellow col-md-3 col-sm-6 service-cell">
                            <div className="wow fadeInUp color-white service-thumb" data-wow-delay="0.8s">
                                <i className="fa fa-desktop"></i>
                                <h3>Desktop Applications</h3>
                                <p className="color-white">Capable of building native desktop applications and also build cross-platform apps using Electon.</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 service-cell">
                            <div className="wow fadeInUp color-white service-thumb" data-wow-delay="1.2s">
                                <i className="fa fa-cloud"></i>
                                <h3>REST API</h3>
                                <p className="color-white">Experienced in building REST API's in the cloud for large-scale deployments.</p>
                            </div>
                        </div>

                        <div className="bg-dark col-md-3 col-sm-6 service-cell">
                            <div className="wow fadeInUp color-white service-thumb" data-wow-delay="1.6s">
                                <i className="fa fa-table"></i>
                                <h3>Mobile App</h3>
                                <p className="color-white">Developed countless mobile applications for multiple clients on both Android and iOS platforms.</p>
                            </div>
                        </div>

                        <div className="bg-white col-md-3 col-sm-6 service-cell">
                            <div className="wow fadeInUp service-thumb" data-wow-delay="1.8s">
                                <i className="fa fa-html5"></i>
                                <h3>Websites</h3>
                                <p>Can build responsive and stunning websites using React and Node.js to power them.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}