import React, { Component } from 'react';
import './style.css';

export default class Header extends Component {

    render() {
        return (
            <div className="navbar navbar-fixed-top custom-navbar" role="navigation">
                <div className="container">

                    <div className="navbar-header">
                        <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon icon-bar"></span>
                            <span className="icon icon-bar"></span>
                            <span className="icon icon-bar"></span>
                        </button>
                        <a href="#home" className="navbar-brand">Royden Rego</a>
                    </div>

                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#home" className="smoothScroll">Home</a></li>
                            <li><a href="#about" className="smoothScroll">About Me</a></li>
                            <li><a href="#experience" className="smoothScroll">Experiences</a></li>
                            <li><a href="#portfolio" className="smoothScroll">Portfolio</a></li>
                            <li><a href="#contact" className="smoothScroll">Contact</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}