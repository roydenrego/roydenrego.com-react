import React, { Component } from 'react';
import './style.css';

export default class Header extends Component {

    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">

                        <div className="col-md-12 col-sm-12">
                            <div className="wow fadeInUp footer-copyright" data-wow-delay="1.0s">
                                <p>Copyright &copy; {(new Date().getFullYear())} Royden Rego</p>
                            </div>
                            <ul className="wow fadeInUp social-icon" data-wow-delay="1.5s">
                                <li><a href="https://twitter.com/roydenrego" target="_blank" rel="noopener noreferrer" className="fa fa-twitter">Twitter</a></li>
                                <li><a href="https://github.com/roydenrego" target="_blank" rel="noopener noreferrer" className="fa fa-github">Github</a></li>
                                <li><a href="https://roydenrego.com" rel="noopener noreferrer" className="fa fa-dribbble">Website</a></li>
                                <li><a href="https://www.linkedin.com/in/roydenrego/" target="_blank" rel="noopener noreferrer" className="fa fa-linkedin">LinkedIn</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>
        )
    }
}