import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import React, { Component } from 'react';
import './style.css';

import Preloader from '../../components/Preloader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import HomeSection from '../../components/HomeSection';
import AboutSection from '../../components/AboutSection';
import ServiceSection from '../../components/ServiceSection';
import ExperienceSection from '../../components/ExperienceSection';
import EducationSection from '../../components/EducationSection';
import PortfolioSection from '../../components/PortfolioSection';
import DownloadSection from '../../components/DownloadSection';
import ContactSection from '../../components/ContactSection';

import ProjectPopup from '../../components/ProjectPopup';

import NotFound from '../../components/NotFound';

export default class Home extends Component {

    state = {
        popupProject: {}
    };

    showPopup(project) {
        this.setState({
            popupProject: project
        })
    }

    render() {
        return (
            <Router>
                <Preloader />
                <Header />

                <Switch>
                    <Route exact path="/">
                        <HomeSection />
                        <AboutSection />
                        <ServiceSection />
                        <ExperienceSection />
                        <EducationSection />
                        <PortfolioSection
                            showPopup={this.showPopup.bind(this)} />
                        <DownloadSection />
                        <ContactSection />

                        <ProjectPopup
                            project={this.state.popupProject} />
                    </Route>

                    <Route component={NotFound} />
                </Switch>

                <Footer />
            </Router>
        )
    }
}