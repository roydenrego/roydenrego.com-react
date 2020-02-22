import React, { Component } from 'react';
import './style.css';

export default class DownloadSection extends Component {
    render() {
        return (
            <section id="contact" className="parallax-section">
                <div className="container">
                    <div className="row contact-row">

                        <div className="col-md-6 col-sm-12 contact-cell">
                            <div className="contact-form">
                                <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
                                    <h1 className="color-white">Say hello..</h1>
                                    <p className="color-white">You can reach out to me if you have any questions or you just want to say hi.</p>
                                </div>

                                <div id="contact-form">
                                    <form action="/submit" method="post" id="contactForm">
                                        <div className="wow fadeInUp" data-wow-delay="1s">
                                            <input name="fullname" type="text" className="form-control" id="fullname" placeholder="Your Name" required />
                                        </div>

                                        <div className="wow fadeInUp" data-wow-delay="1.2s">
                                            <input name="email" type="email" className="form-control" id="email" placeholder="Your Email" required />
                                        </div>
                                        <div className="wow fadeInUp" data-wow-delay="1.4s">
                                            <textarea name="message" rows="5" className="form-control" id="message" placeholder="Write your message..." required></textarea>
                                        </div>

                                        <div className="g-recaptcha wow fadeInUp" data-sitekey="6LdVVYQUAAAAAKyM6ST5JMi4lwNXM13B-11U9Ry8" data-callback="recaptchaCallback"
                                            data-wow-delay="1.6s"></div>

                                        <div className="wow fadeInUp col-md-6 col-sm-8" data-wow-delay="1.8s">
                                            <input name="submit" type="submit" className="form-control grc-disabled" id="submit" value="Send" disabled />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 contact-cell">
                            <div className="background-image contact-img"></div>
                        </div>

                        <div className="bg-dark col-md-3 col-sm-6 contact-cell">
                            <div className="contact-thumb">
                                <div className="wow fadeInUp contact-info" data-wow-delay="0.6s">
                                    <h3 className="color-white">Address</h3>
                                    <p>Angel Cot, Rego Compound, Matadakani Road, Mangalore, Karnataka, India</p>
                                </div>

                                <div className="wow fadeInUp contact-info" data-wow-delay="0.8s">
                                    <h3 className="color-white">Contact.</h3>
                                    <p><i className="fa fa-phone"></i> +91 855-332-7725</p>
                                    <p><i className="fa fa-envelope-o"></i> <a href="mailto:roydenrego@outlook.com">roydenrego@outlook.com</a></p>
                                    <p><i className="fa fa-globe"></i> <a href="#">roydenrego.com</a></p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}