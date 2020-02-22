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
                                <li><a href="https://www.facebook.com/roydenrego4" target="_blank" className="fa fa-facebook"></a></li>
                                <li><a href="https://twitter.com/roydenrego" target="_blank" className="fa fa-twitter"></a></li>
                                <li><a href="https://github.com/roydenrego" target="_blank" className="fa fa-github"></a></li>
                                <li><a href="https://roydenrego.com" className="fa fa-dribbble"></a></li>
                                <li><a href="https://www.linkedin.com/in/roydenrego/" target="_blank" className="fa fa-linkedin"></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>
        )
    }
}