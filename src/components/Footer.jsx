import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-charcoal">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <img 
                src="/no-bg-logo.png" 
                alt="Texora Store LLC" 
              />
            </Link>
            <p className="footer-desc">
              Premium custom apparel manufacturing. Specializing in high-volume DTF printing, sublimation, and professional embroidery for brands that demand excellence.
            </p>
          </div>
          
          <div className="footer-col">
            <h3 className="footer-title">Navigation</h3>
            <ul className="footer-links">
              <li><Link to="/">Homepage</Link></li>
              <li><Link to="/services">Capabilities</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3 className="footer-title">Capabilities</h3>
            <ul className="footer-links">
              <li><Link to="/services#dtf">DTF Printing</Link></li>
              <li><Link to="/services#sublimation">Dye Sublimation</Link></li>
              <li><Link to="/services#embroidery">Embroidery</Link></li>
              <li><Link to="/services#screen">Screen Printing</Link></li>
            </ul>
          </div>
          
          <div className="footer-col contact-col">
            <h3 className="footer-title">Inquiries</h3>
            <ul className="footer-contact">
              <li>
                <strong>Email:</strong> <br/><a href="mailto:info@texora.store">info@texora.store</a>
              </li>
              <li>
                <strong>Phone:</strong> <br/><a href="tel:228-212-8213">228-212-8213</a>
              </li>
              <li>
                <strong>Facility:</strong> <br/>United States
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Texora Store LLC. All rights reserved.</p>
          <div className="social-links">
            <a href="#">IG</a>
            <a href="#">FB</a>
            <a href="#">LI</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
