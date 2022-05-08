import React, { Component } from 'react';
import './style.css';

import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import Swal from 'sweetalert2';
import LazyLoad from 'react-lazyload';

let contactEmail = 'roydenrego@outlook.com';

export default class DownloadSection extends Component {

    state = {
        buttonEnabled: false
    };

    constructor(props) {
        super(props);

        this.recaptchaRef = React.createRef();
    }

    async contact(fullname, email, message, captcha) {
        this.setState({
            buttonEnabled: false
        });
        try {
            const response = await axios({
                url: '/v1/contact',
                baseURL: process.env.REACT_APP_BASE_URL,
                method: 'POST',
                auth: {
                    username: process.env.REACT_APP_AUTH_USERNAME,
                    password: process.env.REACT_APP_AUTH_PASSWORD
                },
                data: {
                    fullname,
                    email,
                    message,
                    'g-recaptcha-response': captcha
                }
            });

            if (response.data.status === 'ok') {
                this.setState({
                    buttonEnabled: true,
                    name: '',
                    email: '',
                    message: ''
                });
                Swal.fire({
                    title: 'Sent',
                    text: 'Your message has been sent successfully. I will reach out to you very soon.',
                    icon: 'success'
                });
            }
            else {
                Swal.fire({
                    title: 'Error',
                    message: 'Something went wrong. Please try again after sometime',
                    icon: 'error'
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    };

    onChange = () => {
        this.setState({
            buttonEnabled: true
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.contact(this.state.name,
            this.state.email,
            this.state.message,
            this.recaptchaRef.current.getValue());
    };

    nameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    emailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    messageChange = (e) => {
        this.setState({
            message: e.target.value
        })
    }


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
                                    <form action="#" method="post" id="contactForm" onSubmit={this.handleSubmit}>
                                        <div className="wow fadeInUp" data-wow-delay="1s">
                                            <input name="fullname" type="text" className="form-control"
                                                id="fullname" placeholder="Your Name"
                                                value={this.state.name}
                                                onChange={this.nameChange}
                                                required />
                                        </div>

                                        <div className="wow fadeInUp" data-wow-delay="1.2s">
                                            <input name="email" type="email" className="form-control"
                                                id="email" placeholder="Your Email"
                                                value={this.state.email}
                                                onChange={this.emailChange} required />
                                        </div>
                                        <div className="wow fadeInUp" data-wow-delay="1.4s">
                                            <textarea name="message" rows="5" className="form-control"
                                                id="message" placeholder="Write your message..."
                                                onChange={this.messageChange}
                                                value={this.state.message}
                                                required />
                                        </div>

                                        <LazyLoad>
                                            <ReCAPTCHA
                                                ref={this.recaptchaRef}
                                                sitekey="6LdVVYQUAAAAAKyM6ST5JMi4lwNXM13B-11U9Ry8"
                                                onChange={this.onChange}
                                                data-wow-delay="1.6s" />
                                        </LazyLoad>

                                        <div className="wow fadeInUp col-md-6 col-sm-8" data-wow-delay="1.8s">
                                            {this.state.buttonEnabled ?
                                                <input name="submit" type="submit" className="form-control" id="submit" value="Send" />
                                                :
                                                <input name="submit" type="submit" className="form-control grc-disabled" id="submit" value="Send" disabled />
                                            }

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
                                    <p><i className="fa fa-envelope-o"></i> <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
                                    <p><i className="fa fa-globe"></i> <a href="/#">roydenrego.com</a></p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}