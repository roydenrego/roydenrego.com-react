import React, { Component } from 'react';
import './style.css';

export default class AboutSection extends Component {
    render() {
        return (
            <section id="about" className="parallax-section">
                <div className="container">
                    <div className="row about-row">

                        <div className="col-md-6 col-sm-12 about-cell">
                            <div className="about-thumb">
                                <div className="wow fadeInUp section-title" data-wow-delay="0.4s">
                                    <h1>About Me</h1>
                                    <p className="color-yellow">How I ventured into the world of Computers.</p>
                                </div>
                                <div className="wow fadeInUp" data-wow-delay="0.8s">
                                    <p>Ever since I was a little boy, I have always been fascinated by Computers. And in 7th grade I ventured into the field of computer software by learning my first programming language - C. Since then I have not stopped, my thirst for learning more about computer software has led me to learn more programming languages such as C++, Java, HTML, CSS, JavaScript, Swift, Node.js, and technologies such as cloud computing, mobile application development, and Electronjs and much more.</p>
                                    <p>To further excel myself I have been working for startups such as Softrixz and TechShaadi and with them, I have built multiple large scale-enterprise applications that use the power of the cloud to serve the needs of the various organizations around the country.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 about-cell">
                            <div className="background-image about-img"></div>
                        </div>

                        <div className="bg-yellow col-md-3 col-sm-6 about-cell">
                            <div className="skill-thumb">
                                <div className="wow fadeInUp section-title color-white" data-wow-delay="1.2s">
                                    <h1>My Skills</h1>
                                    <p className="color-white">Java, Swift, C# - App Development . HTML, CSS, JS - Web Design . C/C++ . Python . Photoshop & Illustrator</p>
                                </div>

                                <div className=" wow fadeInUp skills-thumb" data-wow-delay="1.6s">

                                    <strong>REST API Development</strong>
                                    <span className="color-white pull-right">95%</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}></div>
                                    </div>

                                    <strong>Application Development</strong>
                                    <span className="color-white pull-right">90%</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}></div>
                                    </div>

                                    <strong>Web Development</strong>
                                    <span className="color-white pull-right">80%</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
                                    </div>

                                    <strong>Cloud Computing</strong>
                                    <span className="color-white pull-right">75%</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div>
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