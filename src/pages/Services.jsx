import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
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
      className="services-page bg-texture-weave"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Services Header */}
      <section className="services-hero-section bg-charcoal">
        <div className="services-hero-bg"></div>
        <div className="services-hero-overlay"></div>
        
        {/* Blueprint sewing pattern overlay on the left */}
        <svg className="blueprint-overlay desktop-only" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 800" preserveAspectRatio="none">
          <circle cx="50" cy="400" r="250" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="5,5" fill="none" />
          <circle cx="50" cy="400" r="350" stroke="rgba(255,255,255,0.03)" strokeWidth="1" fill="none" />
          <line x1="50" y1="50" x2="50" y2="750" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="10,10" />
          <line x1="0" y1="400" x2="500" y2="400" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="10,10" />
          <path d="M 50,200 L 300,280 L 220,600 Z" stroke="rgba(5, 150, 105, 0.15)" strokeWidth="1" strokeDasharray="6,4" fill="none" />
          <text x="60" y="195" fill="rgba(5, 150, 105, 0.4)" fontSize="10" fontFamily="monospace">SEW GAP: 12.5mm</text>
          <text x="230" y="615" fill="rgba(255,255,255,0.2)" fontSize="10" fontFamily="monospace">GRID SCALE: 1:1</text>
          <path d="M 0,100 L 100,100 M 0,200 L 100,200 M 0,300 L 100,300 M 0,500 L 100,500 M 0,600 L 100,600 M 0,700 L 100,700" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        </svg>

        <motion.div 
          className="container services-hero-container relative-z"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="services-hero-content">
            <motion.p variants={fadeInUp} className="services-hero-kicker text-accent">PORTFOLIO & CAPABILITIES</motion.p>
            <motion.h1 variants={fadeInUp} className="services-hero-title">
              <span className="hero-title-line">PRECISION ENGINEERING</span>
              <span className="hero-title-line">MEETS APPAREL<span className="text-accent">.</span></span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="services-hero-desc">
              We utilize the latest technologies in the industry to ensure your custom apparel is vibrant, durable, and exactly how you envisioned it. Walk through our production capabilities below.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* DTF Section */}
      <section id="dtf" className="service-editorial section-padding bg-light border-top">
        <div className="container">
          <motion.div 
            className="editorial-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="editorial-content">
              <span className="step-num text-accent">01</span>
              <h2>DIRECT TO FILM (DTF)</h2>
              <p className="text-secondary mt-4">
                DTF printing is a revolutionary technology that allows for vibrant, full-color designs to be printed onto a special film and then heat-transferred onto garments.
              </p>
              <ul className="service-benefits mt-4">
                <li className="stitch-border">Works on any fabric (cotton, polyester, blends)</li>
                <li className="stitch-border">Extremely durable and stretchable</li>
                <li className="stitch-border">Vibrant colors on dark garments</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="editorial-visuals">
              <div className="visual-large">
                <img src="/dtf.png" alt="DTF Printing" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Embroidery Section (Before / After Style) */}
      <section id="embroidery" className="service-editorial section-padding bg-charcoal bg-texture-weave">
        <div className="container">
          <motion.div 
            className="editorial-grid reverse"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="editorial-content">
              <span className="step-num text-accent">02</span>
              <h2 className="text-inverse">CUSTOM EMBROIDERY</h2>
              <p className="text-light mt-4">
                For a professional, premium look, nothing beats traditional embroidery. We use state-of-the-art multi-head machines to stitch your logo directly into the garment.
              </p>
              
              <div className="before-after-grid mt-4">
                <div className="ba-item">
                  <span className="kicker text-accent">DIGITIZED DESIGN</span>
                  <div className="ba-box">
                    <img src="/digitized_embroidery.png" alt="Digitized Design" />
                  </div>
                </div>
                <div className="ba-item">
                  <span className="kicker text-accent">FINISHED GARMENT</span>
                  <div className="ba-box">
                    <img src="/finished_embroidery.png" alt="Finished Embroidery" />
                  </div>
                </div>
              </div>

            </motion.div>
            <motion.div variants={fadeInUp} className="editorial-visuals">
              <div className="visual-large">
                <img src="/embroidery.jpg" alt="Embroidery close up" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sublimation Section */}
      <section id="sublimation" className="service-editorial section-padding border-top bg-light">
        <div className="container">
          <motion.div 
            className="editorial-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="editorial-content">
              <span className="step-num text-accent">03</span>
              <h2>DYE SUBLIMATION</h2>
              <p className="text-secondary mt-4">
                Sublimation printing uses heat to essentially bring ink and fabric together as one. The ink is transformed into a gas and bonds directly to the polyester fibers.
              </p>
              <ul className="service-benefits mt-4">
                <li className="stitch-border">Zero "hand feel"</li>
                <li className="stitch-border">Will never crack, peel, or fade</li>
                <li className="stitch-border">Ideal for sports jerseys and activewear</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="editorial-visuals">
              <div className="visual-large">
                <img src="/sublimation.png" alt="Sublimation" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Screen Printing Section */}
      <section id="screen-printing" className="service-editorial section-padding bg-charcoal bg-texture-weave border-top">
        <div className="container">
          <motion.div 
            className="editorial-grid reverse"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="editorial-content">
              <span className="step-num text-accent">04</span>
              <h2 className="text-inverse">SCREEN PRINTING</h2>
              <p className="text-light mt-4">
                Screen printing is the gold standard for bulk apparel orders. It involves creating a stencil (or screen) and using it to apply layers of ink directly onto the garment surface.
              </p>
              <ul className="service-benefits mt-4">
                <li className="stitch-border">Most cost-effective for large quantities</li>
                <li className="stitch-border">Unmatched wash durability and color vibrancy</li>
                <li className="stitch-border">Ideal for t-shirts, hoodies, and team uniforms</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="editorial-visuals">
              <div className="visual-large">
                <img src="/screen_printing.jpg" alt="Screen Printing Process" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section section-padding">
        <div className="container text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            EXPERIENCE THE QUALITY.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-4"
          >
            <Link to="/contact" className="btn-primary">
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
