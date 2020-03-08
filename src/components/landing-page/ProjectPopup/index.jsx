import React, { Component } from 'react';
import './style.css';

export default class DownloadSection extends Component {
    render() {
        return (
            <div id="popup-article" className="popup">
                <div className="popup__block">

                    <h1 className="popup__title" id="port-title">{this.props.project.title}</h1>
                    <div className="content" dangerouslySetInnerHTML={{ __html: this.props.project.content }} />

                    <a href={`#card-${this.props.project._id}`} className="popup__close">close</a>
                </div>
            </div>
        )
    }
}