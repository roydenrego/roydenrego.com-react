import React, { Component } from 'react';
import './style.css';

import PortfolioCard from '../PortfolioCard';
import Loader from 'react-loaders';

import axios from 'axios';

export default class PortfolioSection extends Component {

    state = {
        isLoading: true,
        projects: [],
        error: null
    };

    constructor(props) {
        super(props);
    }

    async getProjects() {
        const response = await axios({
            url: '/v1/portfolio',
            baseURL: process.env.REACT_APP_BASE_URL,
            method: 'GET',
            auth: {
                username: process.env.REACT_APP_AUTH_USERNAME,
                password: process.env.REACT_APP_AUTH_PASSWORD
            },
        });
        try {
            let projects = response.data.data.map(obj => {
                obj.visible = true;
                return obj;
            });
            this.setState({
                projects,
                isLoading: false
            });
        } catch (error) {
            this.setState({ error, isLoading: false });
        }
    };

    componentDidMount() {
        this.getProjects();
    }

    filterClick(type) {
        let projects = [];
        if (type === 'all') {
            projects = this.state.projects.map(obj => {
                obj.visible = true;
                return obj;
            });
        }
        else {
            projects = this.state.projects.map(obj => {
                obj.visible = obj.project_type === type ? true : false;
                return obj;
            });
        }
        this.setState({
            projects
        });
    }

    cardClick(project) {
        this.props.showPopup(project);
    }

    render() {
        const { classes } = this.props;

        return (
            <section id="portfolio" className="parallax-section">
                <div className="container">

                    <div className="portfolio-content">

                        <div className="wow fadeInUp section-title" data-wow-delay="0.8s">
                            <h1>Portfolio</h1>
                            <p>Some of the projects I have worked on.</p>
                        </div>

                        <div className="portfolio-filters">
                            <input type="radio" id="reset" name="project_type"
                                onClick={((e) => this.filterClick('all'))}
                                defaultChecked />
                            <label htmlFor="reset">All</label>

                            <input type="radio" id="mobile" name="project_type"
                                onClick={((e) => this.filterClick('mobile-app'))} />
                            <label htmlFor="mobile">Mobile App</label>

                            <input type="radio" id="web" name="project_type"
                                onClick={((e) => this.filterClick('web-design'))} />
                            <label htmlFor="web">Web App</label>

                            <input type="radio" id="workshop" name="project_type"
                                onClick={((e) => this.filterClick('workshop'))} />
                            <label htmlFor="workshop">Workshops</label>
                        </div>

                        <div className="portfolio-container">

                            {!this.state.isLoading ? (
                                this.state.projects.map((project, index) => {
                                    return (
                                        <PortfolioCard
                                            key={`project-${index}`}
                                            project={project}
                                            index={index}
                                            visible={project.visible}
                                            cardClick={this.cardClick.bind(this)} />
                                    )
                                })
                            ) : (
                                    <Loader
                                        className="portfolio-loader"
                                        type="ball-beat" active />
                                )}

                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
