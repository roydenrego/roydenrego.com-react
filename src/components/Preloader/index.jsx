import React, { Component } from 'react';
import './style.css';

export default class Preloader extends Component {
    render() {
        return (
            <div className="preloader">
                <div className="spinner">
                    <span className="spinner-rotate"></span>
                </div>
            </div>
        )
    }
}