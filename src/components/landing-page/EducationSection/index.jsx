import React, { Component } from 'react';
import './style.css';

export default class EducationSection extends Component {
    render() {
        return (
            <section id="education" class="parallax-section">
                <div class="container">
                    <div class="row exu-row">

                        <div class="col-md-6 col-sm-6 exu-cell">
                            <div class="color-white education-thumb">
                                <div class="wow fadeInUp section-title" data-wow-delay="0.8s">
                                    <h1>My Education</h1>
                                    <p class="color-white">Qualifications and institutions I studied in.</p>
                                </div>

                                <div class="wow fadeInUp color-white media" data-wow-delay="1.2s">
                                    <div class="media-object media-left">
                                        <i class="fa fa-graduation-cap"></i>
                                    </div>
                                    <div class="media-body">
                                        <h3 class="media-heading">B.E in Computer Science <small>2015 August - 2019 May</small></h3>
                                        <p class="color-white">St. Joseph Engineering College, Vamanjoor, Mangalore</p>
                                    </div>
                                </div>

                                <div class="wow fadeInUp color-white media" data-wow-delay="1.6s">
                                    <div class="media-object media-left">
                                        <i class="fa fa-university education-fas"></i>
                                    </div>
                                    <div class="media-body">
                                        <h3 class="media-heading">Class 12th <small>2014 April - 2015 March</small></h3>
                                        <p class="color-white">Mahesh PU College, Kottara Chowki, Mangalore</p>
                                    </div>
                                </div>

                                <div class="wow fadeInUp color-white media" data-wow-delay="2.0s">
                                    <div class="media-object media-left">
                                        <i class="fa fa-university education-fas"></i>
                                    </div>
                                    <div class="media-body">
                                        <h3 class="media-heading">Class 10th <small>2012 May - 2013 March</small></h3>
                                        <p class="color-white">St. Aloysius High School, Ladyhill, Mangalore</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="col-md-6 col-sm-6 exu-cell">
                            <div class="background-image education-img"></div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}