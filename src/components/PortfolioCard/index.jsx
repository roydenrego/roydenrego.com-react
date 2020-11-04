import React, { Component } from 'react';
import './style.css';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export default class PortfolioCard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            project: props.project,
            index: props.index
        };
    }

    calculateDelay(index) {
        if (index === 0) {
            return 1.2;
        }

        return 1.2 + (index / 10);
    }

    getDisplayDate(str, type) {
        var d = new Date(str);
        if (type === 1) {
            return d.getDate();
        }
        else if (type === 2) {
            return monthNames[d.getMonth()];
        }
        else {
            return d.getFullYear();
        }
    }

    handleClick = () => {
        this.props.cardClick(this.state.project);
    }

    render() {
        return (
            <div key={`project-${this.state.index}`} className={`example-2 card wow fadeInUp${this.props.visible ? '' : ' card-disappear'}`} data-wow-delay={`${this.calculateDelay(this.state.index)}s`} id={`card-${this.state.project._id}`}>
                <div className="wrapper" style={{ background: `url(${this.state.project.image_url}) center/cover no-repeat` }}>
                    <div className="header">
                        <div className="date">
                            <span className="day">{this.getDisplayDate(this.state.project.created, 1)}</span>&nbsp;
                            <span className="month">{this.getDisplayDate(this.state.project.created, 2)}</span>&nbsp;
                            <span className="year">{this.getDisplayDate(this.state.project.created, 3)}</span>
                        </div>
                        <ul className="menu-content">
                            <li><button className="fa fa-user-o" title="Team Size"><span>{this.state.project.team_size}</span></button></li>
                            <li><button className="fa fa-calendar-o" title="Duration"><span>{this.state.project.duration}</span></button></li>
                        </ul>
                    </div>
                    <div className="data">
                        <div className="content">
                            <span className="author">{this.state.project.project_date}</span>
                            <h1 className="title">
                                <a href="#popup-article" onClick={this.handleClick}>{this.state.project.title}</a>
                            </h1>
                            <p className="text">{this.state.project.description}</p>
                            <a href="#popup-article" className="button">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}