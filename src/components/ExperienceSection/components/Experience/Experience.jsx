import React, { Component } from 'react';
import './style.css';

export default class Experience extends Component {
    render() {
        return (
            <div className="wow fadeInUp color-white media" data-wow-delay={`${this.props.wowDelay}s`}>
                <div className="media-object media-left">
                    <i className="fa fa-laptop"></i>
                </div>
                <div className="media-body">
                    <h3 className="media-heading">{this.props.company} - {this.props.title}<small className="exp-small">{this.props.duration}</small></h3>
                    <p className="color-white">{this.props.description}</p>
                </div>
            </div>
        )
    }
}