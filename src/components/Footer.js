import React from 'react';
import '../styles/Style.css';
import {Link} from 'react-router-dom';
//import ArrRight from '../images/arrow-right.png'

const Footer = () => {
    return (
        <div className="footer-wrap">
            <div className="footer-main">
                <div className="fut foot-about">
                    <Link to="" className="text-white">About</Link>
                    <Link to="" className="text-white small">Our Mission</Link>
                    <Link to="" className="text-white small">Our Vision</Link>
                    <Link to="" className="text-white small">Meet the Team</Link>
                    <Link to="" className="text-white small">Partners</Link>
                </div>
                <div className="fut foot-content">
                    <Link to="" className="text-white ">Content</Link>
                    <Link to="" className="text-white small">Blog</Link>
                    <Link to="" className="text-white small">Privacy Policy</Link>
                    <Link to="" className="text-white small">Help</Link>
                    <Link to="" className="text-white small">Contact Us</Link>
                </div>
                <div className="fut foot-follow">
                    <Link to="" className="text-white">Follow</Link>
                    <Link to="" className="text-white small">Facebook</Link>
                    <Link to="" className="text-white small">Twitter</Link>
                    <Link to="" className="text-white small">Instagram</Link>
                </div>
                <div className="foot-sub">
                    <span className="sub-txt text-white">Subscribe To Our Newsletter</span>
                    <form className="sub-form">
                        <input type="email" placeholder="Email Address" className="sub-input" required/>
                        <button className="sub-input">&rarr;</button>
                    </form>
                </div>
            </div>
            <p className="rights text-white">2020 Learnr. All Rights Reserved.</p>
        </div>
    );
}

export default Footer;