import React, { Component } from 'react';
import './style.css';

import Experience from './components/Experience';

export default class ExperienceSection extends Component {

    render() {
        let experiences = [{
            company: 'ITC Infotech India Ltd.',
            title: 'Associate IT Consultant',
            duration: 'Sep 2019 - Jan 2021',
            description: [
                'Spearheaded the development of Serverless APIs on AWS Lambda using Node.js and Web Apps using React and Next.js.',
                'Used AWS services such as EC2, RDS, Lambda, S3, API Gateway, CloudWatch, SNS, DynamoDB and more to architect and develop cloud solutions.',
                'Engaged with clients on a daily basis to understand their requirements and propose solutions for problems.',
                'Led the internal Android development team responsible for building a customer loyalty app.',
                'Integrated Gitlab Continuous Integration and Deployment in multiple projects to enable seamless build, testing and deployment of Web Apps and APIs.',
                'Conducted detailed and extensive code review of merge requests raised by team members.'
            ],
            wowDelay: 1.2
        }, {
            company: 'Softrixz',
            title: 'Co-Founder',
            duration: 'Jan 2013 - Aug 2019',
            description: [
                'Led the various development teams at Softrixz which were responsible for building products for clients using various modern technologies.',
                'Used a wide range of technologies/languages such as Node.js, PHP, Java, MySQL, MongoDB, Electron.js, jQuery, Azure, and more.',
                'Managed everyday operations and ensured the smooth running of the company.',
                'Managed customer relationships and developed new strategies to increase revenue.'
            ],
            wowDelay: 1.6
        }, {
            company: 'TechShaadi',
            title: 'Co-Founder',
            duration: 'Jun 2016 - Aug 2019',
            description: [
                'Led the development team at TechShaadi which developed its Mobile Apps and Back-end services.',
                'Played a key role in making technology related decisions and shaping the company\'s technical infrastructure.',
                'Engaged in customer pitches and analyzed pain points to improve the app functionality.',
            ],
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
                                            key={exp.company}
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
