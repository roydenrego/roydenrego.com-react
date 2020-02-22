import React, { Component } from 'react';
import './style.css';

import Preloader from '../../components/landing-page/Preloader';
import Header from '../../components/landing-page/Header';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Preloader />
                <Header />
            </div>
        )
    }
}