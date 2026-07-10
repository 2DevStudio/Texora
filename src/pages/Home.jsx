import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import CountUpModule from 'react-countup';
const CountUp = CountUpModule.default || CountUpModule;
import './Home.css';

const Home = () => {
  const processRef = React.useRef(null);
  const viewportRef = React.useRef(null);
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: processScroll } = useScroll({
    target: processRef,
    offset: ["start start", "end end"]
  });
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const xTranslation = useTransform(processScroll, [0, 1], ["-75%", "0%"]);

  React.useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    let isDown = false;
    let startX;
    let scrollStart;

    const handleMouseDown = (e) => {
      isDown = true;
      el.classList.add('dragging');
      startX = e.pageX - el.offsetLeft;
      scrollStart = window.scrollY;
    };

    const handleMouseLeave = () => {
      isDown = false;
      el.classList.remove('dragging');
    };

    const handleMouseUp = () => {
      isDown = false;
      el.classList.remove('dragging');
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 2.5; // Drag sensitivity
      window.scrollTo(0, scrollStart - walk);
    };

    el.addEventListener('mousedown', handleMouseDown);
    el.addEventListener('mouseleave', handleMouseLeave);
    el.addEventListener('mouseup', handleMouseUp);
    el.addEventListener('mousemove', handleMouseMove);

    // Touch support
    let touchStartX;
    const handleTouchStart = (e) => {
      isDown = true;
      touchStartX = e.touches[0].pageX - el.offsetLeft;
      scrollStart = window.scrollY;
    };

    const handleTouchMove = (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - el.offsetLeft;
      const walk = (x - touchStartX) * 2.5;
      window.scrollTo(0, scrollStart - walk);
    };

    el.addEventListener('touchstart', handleTouchStart);
    el.addEventListener('touchend', handleMouseUp);
    el.addEventListener('touchmove', handleTouchMove);

    return () => {
      el.removeEventListener('mousedown', handleMouseDown);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('mouseup', handleMouseUp);
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchend', handleMouseUp);
      el.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const apparelItems = [
    "T-Shirts", "Hoodies", "Vests", "Jackets", "Caps & Hats", 
    "Beanies", "Zippers & Uppers", "Jumpers", "Sweatshirts", 
    "Polo Shirts", "Tank Tops"
  ];

  const processSteps = [
    { 
      num: "01", 
      title: "CONCEPT & DESIGN", 
      desc: "Every masterpiece starts with a vision. We collaborate closely with you to brainstorm concepts, select premium fabrics, and craft detailed tech packs and vector blueprints that define your brand's unique identity.", 
      img: "/concept_step.png" 
    },
    { 
      num: "02", 
      title: "PRINTING & EMBROIDERY", 
      desc: "We bring designs to life using state-of-the-art machinery. From thick, textured puff prints and bold screen printing to high-density precision embroidery, we ensure every thread and drop of ink is flawless.", 
      img: "/print_step.png" 
    },
    { 
      num: "03", 
      title: "QUALITY CONTROL", 
      desc: "Excellence is in the details. Every single garment goes through a rigorous inspection process under high-fidelity studio lighting, checking stitch durability, print alignment, and sizing accuracy before approval.", 
      img: "/quality_step.png" 
    },
    { 
      num: "04", 
      title: "PACKAGING & DELIVERY", 
      desc: "First impressions matter. Your finished custom apparel is carefully folded, wrapped in premium protective tissue, placed in sleek custom-branded packaging, and shipped with real-time tracking straight to your door.", 
      img: "/delivery_step.png" 
    }
  ];

  return (
    <div className="home-page">
      {/* Cinematic Hero Section */}
      <section className="hero-section bg-charcoal">
        <div className="hero-bg-image"></div>
        <div className="hero-overlay"></div>
        <div className="container hero-container relative-z text-center">
          <motion.div 
            className="hero-content mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p variants={fadeInUp} className="hero-kicker text-accent">PREMIUM APPAREL</motion.p>
            <motion.h1 variants={fadeInUp} className="hero-title">
              <span className="hero-title-line">PREMIUM CUSTOM APPAREL</span>
              <span className="hero-title-line">PRINTED TO IMPRESS</span>
            </motion.h1>
            <motion.div variants={fadeInUp} className="hero-cta justify-center">
              <Link to="/contact" className="btn-primary">
                Order Now
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Scroll Down Indicator */}
        <motion.div 
          className="scroll-down-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="scroll-down-line"></div>
          <span className="scroll-down-text">Scroll</span>
        </motion.div>
      </section>

      {/* Floating Trust Cards */}
      <section className="trust-cards-section">
        <div className="container">
          <motion.div 
            className="trust-cards-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="trust-card stitch-border">
              <h3 className="stat-number text-accent">
                <CountUp end={25} duration={2.5} enableScrollSpy scrollSpyOnce />k+
              </h3>
              <p>Happy Customers</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="trust-card stitch-border">
              <h3 className="stat-number text-accent">
                <CountUp end={15} duration={2} enableScrollSpy scrollSpyOnce />+
              </h3>
              <p>Years Experience</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="trust-card stitch-border">
              <h3 className="stat-number text-accent">
                <CountUp end={99} duration={2.5} enableScrollSpy scrollSpyOnce />%
              </h3>
              <p>Satisfaction Rate</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="services-showcase section-padding bg-texture-weave">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="kicker text-accent">CAPABILITIES</p>
            <h2 className="section-title">MANUFACTURING<br/>SERVICES</h2>
          </motion.div>

          <motion.div 
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="service-card">
              <div className="service-img-wrap">
                <img src="/dtf.png" alt="DTF Printing" />
              </div>
              <div className="service-info">
                <h3>DTF PRINTING</h3>
                <p className="text-secondary">Direct-to-film technology for vibrant, durable prints on any fabric.</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="service-card mt-lg">
              <div className="service-img-wrap">
                <img src="/sublimation.png" alt="Sublimation" />
              </div>
              <div className="service-info">
                <h3>SUBLIMATION</h3>
                <p className="text-secondary">Full-color dye sublimation for activewear and polyester fabrics.</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="service-card">
              <div className="service-img-wrap">
                <img src="/embroidery.jpg" alt="Embroidery" />
              </div>
              <div className="service-info">
                <h3>EMBROIDERY</h3>
                <p className="text-secondary">Premium stitching for logos, patches, and detailed designs.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="service-card mt-lg">
              <div className="service-img-wrap bg-charcoal">
                <img src="/screen_printing.jpg" alt="Screen Printing" style={{opacity: 0.8}} />
              </div>
              <div className="service-info">
                <h3>SCREEN PRINTING</h3>
                <p className="text-secondary">Classic screen printing for bulk orders with bold, lasting colors.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section - Scroll-Pinned Horizontal Train Showcase */}
      <section className="process-runway-section" ref={processRef}>
        <div className="sticky-timeline-wrapper">
          <div className="container runway-container">
            <div className="runway-header text-center">
              <span className="kicker text-accent">THE PROCESS</span>
              <h2 className="section-title text-inverse">HOW WE BUILD YOUR BRAND</h2>
            </div>

            <div className="train-track-viewport" ref={viewportRef}>
              <motion.div className="train-carriages" style={{ x: xTranslation }}>
                {processSteps.slice().reverse().map((step, idx) => (
                  <div key={idx} className="train-compartment-wrapper">
                    {/* Metal coupler line linking compartments (except last) */}
                    {idx < processSteps.length - 1 && (
                      <div className="train-coupler">
                        <div className="coupler-link"></div>
                      </div>
                    )}
                    
                    <div className="train-compartment">
                      <div className="compartment-content">
                        <div className="compartment-text">
                          <span className="step-num text-accent">{step.num}</span>
                          <h3>{step.title}</h3>
                          <p className="text-light">{step.desc}</p>
                        </div>
                        <div className="compartment-image">
                          <img src={step.img} alt={step.title} />
                          <div className="image-overlay-glow"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Railroad Track Visual */}
            <div className="railroad-track">
              <div className="rail rail-top"></div>
              <div className="rail-ties">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i} className="rail-tie"></div>
                ))}
              </div>
              <div className="rail rail-bottom"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Apparel Categories */}
      <section className="apparel-categories section-padding">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="kicker text-accent">CATALOG</p>
            <h2 className="section-title">APPAREL WE<br/>PRINT ON</h2>
          </motion.div>
          <motion.div 
            className="apparel-tags"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {apparelItems.map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="apparel-tag stitch-border">
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-padding bg-texture-weave border-top">
        <div className="container relative-z">
          <motion.div 
            className="cta-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="cta-content">
              <p className="kicker text-accent">START YOUR PROJECT</p>
              <h2 className="cta-title">READY TO UPGRADE<br/>YOUR APPAREL?</h2>
            </div>
            <div className="cta-action">
              <Link to="/contact" className="btn-primary">
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
