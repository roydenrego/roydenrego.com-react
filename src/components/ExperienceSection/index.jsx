import React, { Component } from 'react';
import './style.css';

import Experience from './components/Experience';

export default class ExperienceSection extends Component {

    render() {
        let experiences = [{
            company: 'ITC Infotech India Ltd.',
            title: 'Associate IT Consultant',
            duration: 'Sep 2019 - Jan 2021',
            description: 'Currently building Mobile Apps and Micro-services for SessionM Accelerators at ITC Infotech India Ltd.',
            wowDelay: 1.2
        },{
            company: 'Softrixz',
            title: 'Co-Founder',
            duration: 'Jan 2013 - Aug 2019',
            description: 'Built Mobile and Desktop Applications for large-scale deployments at Softrixz for clients and internal projects.',
            wowDelay: 1.6
        },{
            company: 'TechShaadi',
            title: 'Co-Founder',
            duration: 'Jun 2016 - Aug 2019',
            description: 'Was a intergral part of the TechShaadi Development Team in building their complete suite of Wedding Applications.',
            wowDelay: 2.0
        }];

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

                                {experiences.map(exp => {
                                    return (
                                        <Experience
                                            company={exp.company}
                                            title={exp.title}
                                            duration={exp.duration}
                                            description={exp.description}
                                            wowDelay={exp.wowDelay} />
                                    );
                                })}

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
