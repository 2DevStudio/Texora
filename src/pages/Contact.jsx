import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <motion.div 
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="contact-hero-section">
        <div className="container hero-container-inner">
          <motion.div 
            className="hero-text-block"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p variants={fadeInUp} className="kicker text-accent">GET IN TOUCH</motion.p>
            <motion.h1 variants={fadeInUp} className="hero-title text-inverse">CONTACT <span className="text-accent">US</span></motion.h1>
            <motion.div variants={fadeInUp} className="title-divider"></motion.div>
            <motion.p variants={fadeInUp} className="hero-description text-light">
              Ready to start your custom apparel project?<br/>
              We're here to help bring your vision to reality.<br/>
              Reach out today for a free quote.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content section-padding">
        <div className="container contact-container">
          
          <motion.div 
            className="contact-info card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="contact-title">Contact Information</h2>
            <p className="contact-desc">Fill out the form and our team will get back to you within 24 hours.</p>
            
            <div className="info-items">
              <div className="info-item">
                <div>
                  <h4>Phone</h4>
                  <p><a href="tel:228-212-8213">228-212-8213</a></p>
                </div>
              </div>
              
              <div className="info-item">
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:info@texora.store">info@texora.store</a></p>
                </div>
              </div>
              
              <div className="info-item">
                <div>
                  <h4>Location</h4>
                  <p>United States<br/>Serving customers nationwide</p>
                </div>
              </div>
            </div>
            
            <div className="contact-hours">
              <h4>Business Hours</h4>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-wrapper card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h2 className="contact-title">Send a Message</h2>
            
            {isSubmitted ? (
              <motion.div 
                className="success-message"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We will be in touch shortly.</p>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      placeholder="(228) 212-8213"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    rows="5"
                    placeholder="Tell us about what you want to create (garment type, print method, quantity)..."
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="btn-primary submit-btn" 
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
