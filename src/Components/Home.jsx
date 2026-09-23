import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
// import img4 from '../assets/img4.png';
// import img5 from '../assets/img5.png';
// import img6 from '../assets/img6.png';

import ropLogo from "../assets/rop-a.jpg";
import namaLogo from "../assets/nama.png";
import healthLogo from "../assets/health.png";

import defenceLogo from "../assets/defence.jpg";
import omanAirportsLogo from "../assets/airport.png";
import alAnsariLogo from "../assets/alansari.jpg";
// import gulfInternationalLogo from "../assets/gulf-international.png";
import sandroseLogo from "../assets/sandrose.png";
import galfarLogo from "../assets/galfar.png";
import ltLogo from "../assets/L@T.png";
import saifHarrasiLogo from "../assets/saifalharasi.jpg";
import alNabaLogo from "../assets/AlNabaHolding.png";
import crownePlazaLogo from "../assets/crowneplaza.png";
import hashemiRawasLogo from "../assets/hasemi&rawas.png";
import minaPetroleumLogo from "../assets/MinaPetroleum.png";
import deltaLogo from "../assets/DeltaInternational.png";
import khimjiLogo from "../assets/KhimjiRamadas.png";

const selectedProjects = [
  { image: img1, country: 'UAE', title: 'Marina 101', className: 'selected-project--marina' },
  { image: img1, country: 'UAE', title: 'Atria', className: 'selected-project--atria' },
  { image: img2, country: 'UAE', title: 'Sky Hills Residences', className: 'selected-project--sky' },
  { image: img1, country: 'UAE', title: 'Mohammad Bin Rashid Library', className: 'selected-project--library' },
  { image: img3, country: 'UAE', title: 'Verde', className: 'selected-project--verde' },
  { image: img2, country: 'UAE', title: 'The Address Hotel', className: 'selected-project--address' },
  { image: img3, country: 'Bahrain ', title: 'Al Ezzel Power Plant', className: 'selected-project--power' },
  { image: img2, country: 'Qatar', title: 'Anti Doping Lab', className: 'selected-project--lab' },
];

export default function Home() {
  const scrollTopButtonRef = useRef(null);
  const [activeAboutTab, setActiveAboutTab] = useState('vision');
  const [activeClientSlide, setActiveClientSlide] = useState(0);

  useEffect(() => {
    const clientSliderTimer = window.setInterval(() => {
      setActiveClientSlide((currentSlide) => (currentSlide + 1) % 6);
    }, 3500);

    return () => window.clearInterval(clientSliderTimer);
  }, []);

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
      >
        <div className="hero-video">
  <img
    className="hero-video-bg"
    src={img1}
    alt=""
    aria-hidden="true"
  />

  <div className="hero-video-overlay"></div>
</div>
        <div className="hero-content">
          <div className="hero-copy">
            <div className="badge-tag">// WATER & WASTEWATER SOLUTIONS</div>

<h1 className="hero-title animate-up">
  Engineering smarter water solutions for a sustainable future.
</h1>

<p className="hero-intro">
  Manba Al Rayyan Trading & Services LLC delivers reliable solutions in
  water treatment, wastewater treatment, desalination, RO systems and
  renal dialysis water treatment across Oman.
</p>

<a className="hero-cta" href="#services">
  Explore our solutions <span>↗</span>
</a>
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

   <div className="about-image image-one">
  <img src={img1} alt="Industrial equipment" />
</div>

     <div className="about-image image-two">
    <img src={img2} alt="Engineering equipment" />
  </div>

    <div className="about-image image-three">
    <img src={img3} alt="Industrial facility" />
  </div>

  {/* IMAGE 4 — CHANGE HERE */}
  <div className="about-image image-four">
    <img src={img1} alt="Water treatment equipment" />
  </div>

  </motion.div>


  {/* RIGHT CONTENT */}
<motion.div className="about-modern-content">

  {/* SECTION LABEL */}
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


  {/* TITLE */}
  <motion.h2
    className="about-modern-title"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    viewport={{ once: true }}
  >
    About Manba Al Rayyan
  </motion.h2>


  {/* DESCRIPTION */}
  <motion.p
    className="about-modern-description"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.15 }}
    viewport={{ once: true }}
  >
    Manba Al Rayyan Trading & Services LLC is a foreign investment
    company operating in Oman, providing reliable engineering,
    construction, trading and technical services.
  </motion.p>


  <motion.p
    className="about-modern-description"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    viewport={{ once: true }}
  >
    With <strong>25+ satisfied clients</strong>, we are committed to
    quality, innovation and sustainable solutions, with expertise in
    water and wastewater treatment, desalination, engineering and
    equipment supply.
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
        <strong>25+</strong>
        <span>Satisfied Clients</span>
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
        <strong>2015</strong>
        <span>Established</span>
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
      className={`about-tab ${
        activeAboutTab === 'vision' ? 'active' : ''
      }`}
      onClick={() => setActiveAboutTab('vision')}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Vision
    </motion.button>

    <motion.button
      className={`about-tab ${
        activeAboutTab === 'mission' ? 'active' : ''
      }`}
      onClick={() => setActiveAboutTab('mission')}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Mission
    </motion.button>

  </motion.div>


  {/* TAB CONTENT */}
  <motion.div
    className="about-tab-content"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    key={activeAboutTab}
  >

    <p>
      {activeAboutTab === 'vision'
        ? 'To deliver quality engineered systems and sustainable solutions in water and wastewater treatment with a strong commitment to environmental care.'
        : 'To drive innovation, develop our workforce and deliver effective engineering solutions that exceed client expectations.'
      }
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
        <span>🏢</span>
      </div>

      <div>
        <small>Trusted Business Partner</small>
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
        <div className="badge-tag">// OUR EXPERTISE</div>

<h2>
  Complete water and wastewater solutions from design to operation.
</h2>

<p>
  From engineering and equipment supply to installation, commissioning
  and maintenance, we provide integrated solutions for water,
  wastewater and desalination applications.
</p>

where
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
              <img src={img1} alt="Installation & Contracting" />
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

      <section
  className="clients-section"
  aria-labelledby="clients-title"
>
  <motion.div
    className="clients-inner"
    initial={{ opacity: 0, y: 26 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.65,
      ease: "easeOut"
    }}
    viewport={{
      once: true,
      margin: "-80px"
    }}
  >

    {/* LABEL */}
    <div className="clients-label">
      <span aria-hidden="true" />
      Our Clients
    </div>


    {/* TITLE */}
    <h2 id="clients-title">
      We approach each client with dedication at the core
      of every engagement,
      <br className="clients-title-break" />
      achieving great successes.
    </h2>


    {/* CLIENT LOGOS */}
    <div
      className="clients-logos"
      aria-label="Clients we have worked with"
    >

      <div
        className="clients-logos-track"
        style={{
          "--client-slide": activeClientSlide
        }}
      >

        {/* =========================
            SET 1
        ========================= */}
        <React.Fragment>

          {/* ROYAL OMAN POLICE */}
          <div
            className="client-logo"
            aria-label="Royal Oman Police"
          >
            <img
              src={ropLogo}
              alt="Royal Oman Police"
              style={{
    width: "150px",
    height: "75px",
    objectFit: "contain"
  }}
            />
          </div>


          {/* NAMA WATER */}
          <div
            className="client-logo"
            aria-label="Nama Water"
          >
            <img
              src={namaLogo}
              alt="Nama Water"
                          style={{
    width: "150px",
    height: "75px",
    objectFit: "contain"
  }}
            />
          </div>


          {/* MINISTRY OF HEALTH */}
          <div
            className="client-logo"
            aria-label="Ministry of Health"
          >
            <img
              src={healthLogo}
              alt="Ministry of Health"
                          style={{
    width: "150px",
    height: "75px",
    objectFit: "contain"
  }}
            />
          </div>


          {/* MINISTRY OF DEFENCE */}
          <div
            className="client-logo"
            aria-label="Ministry of Defence"
          >
            <img
              src={defenceLogo}
              alt="Ministry of Defence"
              style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }}
            />
          </div>


          {/* OMAN AIRPORTS */}
          <div
            className="client-logo"
            aria-label="Oman Airports"
          >
            <img
              src={omanAirportsLogo}
              alt="Oman Airports"
                          style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }}
            />
          </div>


          {/* AL ANSARI TRADING */}
          <div
            className="client-logo"
            aria-label="Al Ansari Trading"
          >
            <img
              src={alAnsariLogo}
              alt="Al Ansari Trading"
              style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }}
            />
          </div>


          {/* GULF INTERNATIONAL CONTRACTING */}
          <div
            className="client-logo"
            aria-label="Gulf International Contracting"
          >
            <img
              src={healthLogo}
              alt="Gulf International Contracting"
              style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }}  
            />
          </div>


          {/* SANDROSE */}
          <div
            className="client-logo"
            aria-label="Sandrose"
          >
            <img
              src={sandroseLogo}
              alt="Sandrose"
                          style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }}
            />
          </div>


          {/* GALFAR */}
          <div
            className="client-logo"
            aria-label="Galfar"
          >
            <img
              src={galfarLogo}
              alt="Galfar"
                          style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }}
            />
          </div>


          {/* L&T */}
          <div
            className="client-logo"
            aria-label="L&T"
          >
            <img
              src={ltLogo}
              alt="L&T"
                          style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }}
            />
          </div>


          {/* SAIF AL HARRASI */}
          <div
            className="client-logo"
            aria-label="Saif Al Harrasi"
          >
            <img
              src={healthLogo}
              alt="Saif Al Harrasi"
                          style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }}
            />
          </div>


          {/* AL NABA HOLDING */}
          <div
            className="client-logo"
            aria-label="Al Naba Holding"
          >
            <img
              src={alAnsariLogo}
              alt="Al Naba Holding"
                          style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }}
            />
          </div>


          {/* CROWNE PLAZA */}
          <div
            className="client-logo"
            aria-label="Crowne Plaza Hotel"
          >
            <img
              src={crownePlazaLogo}
              alt="Crowne Plaza Hotel"
                          style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }}
            />
          </div>


          {/* AL HASHEMI & AL RAWAS */}
          <div
            className="client-logo"
            aria-label="Al Hashemi and Al Rawas"
          >
            <img
              src={hashemiRawasLogo}
              alt="Al Hashemi and Al Rawas"
                          style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }}
            />
          </div>


          {/* MINA PETROLEUM */}
          <div
            className="client-logo"
            aria-label="Mina Petroleum"
          >
            <img
              src={minaPetroleumLogo}
              alt="Mina Petroleum"
                          style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }}
            />
          </div>


          {/* DELTA INTERNATIONAL */}
          <div
            className="client-logo"
            aria-label="Delta International"
          >
            <img
              src={deltaLogo}
              alt="Delta International"
                          style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }}
            />
          </div>


          {/* KHIMJI RAMDAS */}
          <div
            className="client-logo"
            aria-label="Khimji Ramdas"
          >
            <img
              src={khimjiLogo}
              alt="Khimji Ramdas"
                          style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }}
            />
          </div>

        </React.Fragment>


        {/* =========================
            SET 2
            Duplicate for carousel
        ========================= */}
        <React.Fragment>

          <div className="client-logo">
            <img src={ropLogo} alt="Royal Oman Police"
                        style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }} />

          </div>

          <div className="client-logo">
            <img src={namaLogo} alt="Nama Water"
                        style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }} />
          </div>

          <div className="client-logo">
            <img src={healthLogo} alt="Ministry of Health"      
                   style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }}/>
          </div>

          <div className="client-logo">
            <img src={defenceLogo} alt="Ministry of Defence" 
                        style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }}/>
          </div>

          <div className="client-logo">
            <img src={omanAirportsLogo} alt="Oman Airports"
                        style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }} />
          </div>

          <div className="client-logo">
            <img src={alAnsariLogo} alt="Al Ansari Trading"
              style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }} />
          </div>

          <div className="client-logo">
            <img
              src={healthLogo}
              alt="Gulf International Contracting"
              style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }}
            />
          </div>

          <div className="client-logo">
            <img src={sandroseLogo} alt="Sandrose"
                        style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }} />
          </div>

          <div className="client-logo">
            <img src={galfarLogo} alt="Galfar" 
                        style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }}/>
          </div>

          <div className="client-logo">
            <img src={ltLogo} alt="L&T" 
                        style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }}/>
          </div>

          <div className="client-logo">
            <img src={saifHarrasiLogo} alt="Saif Al Harrasi"            style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }} />
          </div>

          <div className="client-logo">
            <img src={alNabaLogo} alt="Al Naba Holding"
                        style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }} />
          </div>

          <div className="client-logo">
            <img src={crownePlazaLogo} alt="Crowne Plaza Hotel"
                        style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }} />
          </div>

          <div className="client-logo">
            <img
              src={hashemiRawasLogo }
              alt="Al Hashemi and Al Rawas"
              style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }}
            />
          </div>

          <div className="client-logo">
            <img
              src={minaPetroleumLogo}
              alt="Mina Petroleum"
              style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }}
            />
          </div>

          <div className="client-logo">
            <img
              src={deltaLogo}
              alt="Delta International"
                          style={{
    width: "150px",
    height: "70px",
    objectFit: "contain"
  }}
            />
          </div>

          <div className="client-logo">
            <img
              src={khimjiLogo}
              alt="Khimji Ramdas"
                          style={{
    width: "200px",
    height: "75px",
    objectFit: "contain"
  }}
            />
          </div>

        </React.Fragment>

      </div>
    </div>


    {/* PAGINATION */}
    <div
      className="clients-pagination"
      aria-label="Client logo carousel controls"
    >

      {Array.from(
        { length: 6 },
        (_, index) => (
          <button
            className={
              activeClientSlide === index
                ? "is-active"
                : ""
            }
            key={index}
            type="button"
            aria-label={`Show client slide ${index + 1}`}
            aria-current={
              activeClientSlide === index
                ? "true"
                : undefined
            }
            onClick={() =>
              setActiveClientSlide(index)
            }
          />
        )
      )}

    </div>

  </motion.div>
</section>

      <section className="project-cta-section" aria-labelledby="project-cta-title">
        <motion.div
          className="project-cta-content"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="project-cta-label">Get in touch</p>
          <h2 id="project-cta-title">Ready to power your next project?</h2>
          <p className="project-cta-description">From specification to commissioning — our team across the Middle East is ready to engineer the right solution for you.</p>
          <div className="project-cta-actions">
            <a className="project-cta-button project-cta-button--primary" href="mailto:info@example.com">Get a Quote <span aria-hidden="true">→</span></a>
            <a className="project-cta-button project-cta-button--secondary" href="#company-profile"><span aria-hidden="true">⇩</span> Company Profile</a>
          </div>
        </motion.div>
      </section>
      {/* Business enquiries section removed from the home page.

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
      */}
    </div>
  );
}
