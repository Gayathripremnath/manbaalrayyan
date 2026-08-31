import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import heroVideo from '../assets/hero.mp4';

const selectedProjects = [
  { image: img5, country: 'UAE', title: 'Marina 101', className: 'selected-project--marina' },
  { image: img1, country: 'UAE', title: 'Atria', className: 'selected-project--atria' },
  { image: img6, country: 'UAE', title: 'Sky Hills Residences', className: 'selected-project--sky' },
  { image: img4, country: 'UAE', title: 'Mohammad Bin Rashid Library', className: 'selected-project--library' },
  { image: img3, country: 'UAE', title: 'Verde', className: 'selected-project--verde' },
  { image: img2, country: 'UAE', title: 'The Address Hotel', className: 'selected-project--address' },
  { image: img3, country: 'Bahrain', title: 'Al Ezzel Power Plant', className: 'selected-project--power' },
  { image: img6, country: 'Qatar', title: 'Anti Doping Lab', className: 'selected-project--lab' },
];

const heroSlides = [
  { image: img1, alt: 'Products prepared for business supply' },
  { image: img2, alt: 'Trading and sourcing support' },
  { image: img6, alt: 'Business operations and service delivery' },
];

export default function Home() {
  const scrollTopButtonRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);
  const [activeAboutTab, setActiveAboutTab] = useState('vision');

  useEffect(() => {
    if (isSliderPaused) return undefined;

    const sliderTimer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(sliderTimer);
  }, [isSliderPaused]);

  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -48px' });

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let animationFrameId = null;

    const updateScrollProgress = () => {
      if (animationFrameId !== null) return;

      animationFrameId = window.requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
        scrollTopButtonRef.current?.style.setProperty('--scroll-progress', `${Math.min(100, Math.max(0, progress))}%`);
        animationFrameId = null;
      });
    };

    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress);
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
      if (animationFrameId !== null) window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="home-wrapper">
      <button
        className="scroll-top-button"
        ref={scrollTopButtonRef}
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span aria-hidden="true">↑</span>
      </button>
      <section
        className="hero-section"
        onMouseEnter={() => setIsSliderPaused(true)}
        onMouseLeave={() => setIsSliderPaused(false)}
      >
        <div className="hero-video">
  <video
    className="hero-video-bg"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
  >
    <source src={heroVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="hero-video-overlay"></div>
</div>
        <div className="hero-content">
          <div className="hero-copy">
            <div className="badge-tag">// MANBA AL RAYYAN LLC</div>
            <h1 className="hero-title animate-up">Trading that moves business forward.</h1>
            <p className="hero-intro">Reliable sourcing, supply, and operational services for organisations that value quality, speed, and long-term partnerships.</p>
            <a className="hero-cta" href="#contact">Start a conversation <span>↗</span></a>
          </div>
          {/* <div className="hero-right-card">
            <span className="built-tag">[BUILT FOR BUSINESS]</span>
            <p>Manba Al Rayyan Trading &amp; Services LLC connects dependable products and practical services with the businesses that need them.</p>
            <div className="hero-card-line"><span>01</span> Source with confidence</div>
            <div className="hero-card-line"><span>02</span> Deliver with consistency</div>
          </div> */}
        </div>
{/* 
        <div className="client-banner">
          <p className="client-subtext">A dependable partner for procurement, supply, and essential business services.</p>
          <div className="client-logos">
            <span>Trading</span>
            <span>Procurement</span>
            <span>Logistics</span>
            <span>Operations</span>
          </div>
        </div> */}
      </section>

     {/* =========================
    ABOUT US SECTION
========================= */}
<motion.section
  className="about-modern-section"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{ once: true, margin: '-100px' }}
>

  {/* LEFT IMAGE COLLAGE */}
  <motion.div className="about-modern-images">

    <motion.div
      className="about-circle-text"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    >
      <svg viewBox="0 0 200 200">
        <defs>
          <path
            id="circlePath"
            d="M 100,100
               m -72,0
               a 72,72 0 1,1 144,0
               a 72,72 0 1,1 -144,0"
          />
        </defs>

        <text>
          <textPath href="#circlePath">
            ABOUT OUR COMPANY • ABOUT OUR COMPANY •
          </textPath>
        </text>
      </svg>

      <div className="about-circle-center"></div>
    </motion.div>

    <motion.div
      className="about-image image-one"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <img src={img1} alt="Industrial equipment" />
    </motion.div>

    <motion.div
      className="about-image image-two"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <img src={img2} alt="Engineering equipment" />
    </motion.div>

    <motion.div
      className="about-image image-three"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <img src={img3} alt="Industrial facility" />
    </motion.div>

    <motion.div
      className="about-image image-four"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <img src={img4} alt="Water treatment equipment" />
    </motion.div>

  </motion.div>


  {/* RIGHT CONTENT */}
  <motion.div className="about-modern-content">

    <motion.div
      className="about-section-label"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <span></span>
      <strong>ABOUT US</strong>
    </motion.div>

    <motion.h2
      className="about-modern-title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ once: true }}
    >
      About Manba Al Rayyan
    </motion.h2>

    <motion.p
      className="about-modern-description"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      viewport={{ once: true }}
    >
      Our experienced team, reliable supplier network and commitment
      to quality enable us to provide dependable products and practical
      solutions for businesses across regional markets.
    </motion.p>

    <motion.p
      className="about-modern-description"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
    >
      We support organisations through trading, procurement, sourcing
      and coordinated services, delivering solutions that are built
      around their exact requirements.
    </motion.p>


    {/* STATS */}
    <motion.div
      className="about-stats"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.25 }}
      viewport={{ once: true }}
    >

      <motion.div
        className="about-stat-card"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="stat-icon">
          ✓
        </div>

        <div>
          <strong>50+</strong>
          <span>Projects Supported</span>
        </div>
      </motion.div>

      <motion.div
        className="about-stat-card"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="stat-icon">
          ◉
        </div>

        <div>
          <strong>$10m</strong>
          <span>Capital Invested</span>
        </div>
      </motion.div>

    </motion.div>


    {/* VISION / MISSION */}
    <motion.div
      className="about-tabs"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >

      <motion.button
        className={`about-tab ${activeAboutTab === 'vision' ? 'active' : ''}`}
        onClick={() => setActiveAboutTab('vision')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Vision
      </motion.button>

      <motion.button
        className={`about-tab ${activeAboutTab === 'mission' ? 'active' : ''}`}
        onClick={() => setActiveAboutTab('mission')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Mission
      </motion.button>

    </motion.div>

    <motion.div
      className="about-tab-content"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      key={activeAboutTab}
    >
      <p>
        {activeAboutTab === 'vision' ? (
          <>
            Our vision is to become a trusted partner for trading,
            sourcing and business solutions by maintaining high standards
            of quality, reliability and customer satisfaction.
          </>
        ) : (
          <>
            Our mission is to deliver excellence through reliable sourcing, quality products, and
            dependable partnerships. We commit to supporting our clients' success with practical
            solutions and long-term value creation across all GCC markets.
          </>
        )}
      </p>
    </motion.div>


    {/* BOTTOM */}
    <motion.div
      className="about-bottom"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.35 }}
      viewport={{ once: true }}
    >

      <motion.div
        className="about-person"
        whileHover={{ scale: 1.05 }}
      >
        <div className="person-avatar">
          <span>👨🏻‍💼</span>
        </div>

        <div>
          <small>Managing Director</small>
          <strong>Manba Al Rayyan</strong>
        </div>
      </motion.div>

      <motion.a
        href="#contact"
        className="about-read-btn"
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.95 }}
      >
        Read More
        <span>↗</span>
      </motion.a>

    </motion.div>

  </motion.div>

</motion.section>

     

       <motion.section
        className="services-section scroll-reveal"
        id="services"
        data-reveal
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="badge-tag">// WHAT WE DO</div>
          <h2>Four pillars of service across the GCC and MENA region.</h2>
          <p>From product specification to final commissioning — we deliver every stage of an electrical project under one roof.</p>
        </motion.div>
        <motion.div
          className="services-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="service-card scroll-reveal"
            data-reveal
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
          >
            <div className="service-card-image">
              <img src={img1} alt="Supply & Trading" />
              <div className="service-card-number">01</div>
            </div>
            <div className="service-card-content">
              <h3>Supply &amp; Trading</h3>
              <p>Industrial and oilfield equipment, electrical and mechanical spares, and authorized Linkk &amp; Megaduct busduct trunking — backed by full GCC and MENA inventory.</p>
              <motion.a href="#" className="learn-more-link" whileHover={{ x: 5 }}>
                Learn more <span>→</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="service-card scroll-reveal"
            data-reveal
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
          >
            <div className="service-card-image">
              <img src={img2} alt="Testing & Commissioning" />
              <div className="service-card-number">02</div>
            </div>
            <div className="service-card-content">
              <h3>Testing &amp; Commissioning</h3>
              <p>On-shore and off-shore electrical and mechanical commissioning for oil, gas and utility projects.</p>
              <motion.a href="#" className="learn-more-link" whileHover={{ x: 5 }}>
                Learn more <span>→</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="service-card scroll-reveal"
            data-reveal
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
          >
            <div className="service-card-image">
              <img src={img3} alt="Engineering Services" />
              <div className="service-card-number">03</div>
            </div>
            <div className="service-card-content">
              <h3>Engineering Services</h3>
              <p>Specification, layout and custom engineering tailored to commercial and industrial installations.</p>
              <motion.a href="#" className="learn-more-link" whileHover={{ x: 5 }}>
                Learn more <span>→</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="service-card scroll-reveal"
            data-reveal
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
          >
            <div className="service-card-image">
              <img src={img4} alt="Installation & Contracting" />
              <div className="service-card-number">04</div>
            </div>
            <div className="service-card-content">
              <h3>Installation &amp; Contracting</h3>
              <p>Turn-key contracting from delivery through installation and final handover, across the GCC and MENA region.</p>
              <motion.a href="#" className="learn-more-link" whileHover={{ x: 5 }}>
                Learn more <span>→</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="services-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a href="#" className="all-services-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            All services <span>→</span>
          </motion.a>
        </motion.div>
      </motion.section>

      <section className="selected-work-section" aria-labelledby="selected-work-title">
        <motion.div
          className="selected-work-heading"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="selected-work-label">Selected work</div>
          <div className="selected-work-title-row">
            <h2 id="selected-work-title">Trusted on landmark<br />projects.</h2>
            <a href="#contact" className="selected-work-link">See all projects <span aria-hidden="true">→</span></a>
          </div>
        </motion.div>

        <div className="selected-work-grid">
          {selectedProjects.map((project, index) => (
            <motion.article
              className={`selected-project ${project.className}`}
              key={`${project.country}-${project.title}`}
              initial={{ opacity: 0, y: 34, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.055, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="selected-project-overlay">
                <span>{project.country}</span>
                <h3>{project.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="operations-section scroll-reveal" data-reveal>
  <div className="operations-content">
    <div className="badge-tag">// HOW WE WORK</div>
    <h2>From requirement to delivery, handled with clarity.</h2>
    <p>
      We listen to the requirement, source the right solution,
      and coordinate the details that keep your business moving.
    </p>

    <div className="operations-list">
      <div>
        <span>01</span>
        <strong>Understand</strong>
        <small>We start with your exact business requirement.</small>
      </div>

      <div>
        <span>02</span>
        <strong>Source</strong>
        <small>We connect you with practical products and services.</small>
      </div>

      <div>
        <span>03</span>
        <strong>Deliver</strong>
        <small>We keep communication clear through every step.</small>
      </div>
    </div>
  </div>

  <div className="operations-images">
    <img className="operations-image-main" src={img5} alt="" />
    <img className="operations-image-small" src={img6} alt="" />
  </div>
</section>

      <section className="consultation-section scroll-reveal" id="contact" data-reveal>
        <h2>Have a requirement? Let&apos;s find the right way forward.</h2>
        <div className="consultation-box">
          <div className="form-container scroll-reveal" data-reveal>
            <div className="badge-tag">// BUSINESS ENQUIRIES</div>
            <h3>Tell us what your business needs.</h3>
            <p>Share a few details and our team will get back to you about products, sourcing, or service support.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <input type="text" placeholder="Your name*" required />
                <input type="text" placeholder="Company" />
              </div>
              <input type="email" placeholder="Work email*" required />
              <textarea placeholder="How can we help?" rows="4"></textarea>
              <button type="submit" className="submit-btn">Send enquiry <span>↗</span></button>
            </form>
          </div>
          <div className="info-container scroll-reveal" data-reveal>
            <div className="info-card-details">
              <div className="info-item">
                <span>01</span>
                <div>
                  <h4>Operating region</h4>
                  <p>United Arab Emirates &amp; regional markets</p>
                </div>
              </div>
              <div className="info-item">
                <span>02</span>
                <div>
                  <h4>What to expect</h4>
                  <p>A considered response from our business team</p>
                </div>
              </div>
            </div>
            <div className="info-footer-meta">
              <div><span>✦</span> Trading &amp; Services LLC</div>
              <div><span>✦</span> Built around your requirements</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
