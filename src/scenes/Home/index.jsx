import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import React, { Component } from 'react';
import './style.css';

import Preloader from '../../components/landing-page/Preloader';
import Header from '../../components/landing-page/Header';
import Footer from '../../components/landing-page/Footer';

import HomeSection from '../../components/landing-page/HomeSection';
import AboutSection from '../../components/landing-page/AboutSection';
import ServiceSection from '../../components/landing-page/ServiceSection';
import ExperienceSection from '../../components/landing-page/ExperienceSection';
import EducationSection from '../../components/landing-page/EducationSection';
import DownloadSection from '../../components/landing-page/DownloadSection';
import ContactSection from '../../components/landing-page/ContactSection';

import NotFound from '../../components/landing-page/NotFound';

export default class Home extends Component {
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
                        <DownloadSection />
                        <ContactSection />
                    </Route>

                    <Route component={NotFound} />
                </Switch>

                <Footer />
            </Router>
        )
    }
}