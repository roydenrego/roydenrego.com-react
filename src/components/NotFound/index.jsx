import React, { Component } from 'react';
import './style.css';

export default class NotFound extends Component {

    render() {
        return (
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>Oops!</h1>
                        <h2>404 - Not Found</h2>
                    </div>
                    <a href="/#home">Go TO Homepage</a>
                </div>
            </div>
        )
    }
}