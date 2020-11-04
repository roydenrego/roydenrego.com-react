import React, { Component } from 'react';
import './style.css';

export default class DownloadSection extends Component {
    render() {
        return (
            <section id="quotes" className="parallax-section">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">

                        <div className="col-md-offset-1 col-md-10 col-sm-12">
                            <i className="wow fadeInUp fa fa-star" data-wow-delay="0.6s"></i>
                            <h2 className="wow fadeInUp" data-wow-delay="0.8s">You can download a copy of my resume for future or offline reference.</h2>
                            <a href="/files/Royden_Rego_Full_Stack_Engineer_Resume.pdf" target="_blank" className="wow fadeInUp download-btn" data-wow-delay="1s">Download Printable Resume</a>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}