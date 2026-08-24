import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';

const serviceImages = [
  { image: img1, label: 'Supply solutions', title: 'Products that keep teams moving.' },
  { image: img2, label: 'Trading support', title: 'Reliable sourcing for every requirement.' },
  { image: img3, label: 'Business operations', title: 'Practical support behind the scenes.' },
  { image: img4, label: 'Project supply', title: 'Coordinated with care from start to finish.' },
  { image: img5, label: 'Regional reach', title: 'Connecting businesses across markets.' },
  { image: img6, label: 'Long-term value', title: 'Built for dependable partnerships.' },
];

const heroSlides = [
  { image: img1, alt: 'Products prepared for business supply' },
  { image: img2, alt: 'Trading and sourcing support' },
  { image: img3, alt: 'Business operations and service delivery' },
];

export default function Home() {
  const scrollTopButtonRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);

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
        <div className="hero-slider" aria-label="Featured images" aria-live="polite">
          {heroSlides.map((slide, index) => (
            <img
              className={`hero-slide ${index === activeSlide ? 'is-active' : ''}`}
              src={slide.image}
              alt={slide.alt}
              key={slide.image}
              aria-hidden={index !== activeSlide}
            />
          ))}
          <div className="hero-slider-controls">
            <button
              type="button"
              className="hero-slider-arrow"
              aria-label="Previous slide"
              onClick={() => setActiveSlide((activeSlide - 1 + heroSlides.length) % heroSlides.length)}
            >
              <span aria-hidden="true">←</span>
            </button>
            <div className="hero-slider-dots">
              {heroSlides.map((slide, index) => (
                <button
                  type="button"
                  className={`hero-slider-dot ${index === activeSlide ? 'is-active' : ''}`}
                  aria-label={`Show slide ${index + 1}`}
                  aria-current={index === activeSlide ? 'true' : undefined}
                  onClick={() => setActiveSlide(index)}
                  key={slide.image}
                />
              ))}
            </div>
            <button
              type="button"
              className="hero-slider-arrow"
              aria-label="Next slide"
              onClick={() => setActiveSlide((activeSlide + 1) % heroSlides.length)}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
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

      <section className="about-section scroll-reveal" id="about" aria-labelledby="about-title" data-reveal>
        <div className="about-copy">
          <div className="about-eyebrow">Engineering pure excellence</div>
          <h2 id="about-title">Manba Al Rayyan Trading &amp; Services LLC</h2>
          <p>Established with a team of experienced professionals in the field of Design, Engineering, Construction and Services. The company is at the heart of the Muscat city and is focused to deliver its clients and partners a complete commitment on their needs.</p>
          <p><strong>Leadership is the key to success</strong> and MARTS, lead by a team of professional experts.</p>
          <div className="about-highlight">&quot;We have our major business into desalination, water and waste water treatment.&quot;</div>
          <p>We have vast experience in the filed of desalination, water and waste water treatment. MARTS, emerges as a perfect solution provider for any source of water at any form.</p>
          <a className="about-button" href="#contact">Read Details <span aria-hidden="true">↗</span></a>
        </div>
        <div className="about-image-wrap">
          <img src={img4} alt="Water treatment equipment and industrial systems" loading="lazy" />
        </div>
      </section>

     

      <section className="showcase-section scroll-reveal" aria-labelledby="showcase-title" data-reveal>
        <div className="showcase-heading">
          <div className="badge-tag">// OUR CAPABILITIES</div>
          <h2 id="showcase-title">A closer look at how we support business.</h2>
          <p>From product supply to coordinated operations, our work is shaped around practical outcomes and dependable delivery.</p>
        </div>
        <div className="showcase-grid">
          {serviceImages.map((item, index) => (
            <article className={`showcase-card showcase-card-${index + 1} scroll-reveal`} data-reveal key={item.image}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="showcase-overlay">
                <span>{item.label}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
       <section className="services-section scroll-reveal" id="services" data-reveal>
        <div className="section-header">
          <div className="badge-tag">// WHAT WE DO</div>
          <h2>Practical solutions for the way business works today.</h2>
          <p>From sourcing the right products to keeping day-to-day operations moving, we bring a responsive, detail-focused approach to every engagement.</p>
        </div>
        <div className="services-grid">
          <div className="service-card scroll-reveal" data-reveal>
            <div className="service-icon">01</div>
            <h3>General Trading</h3>
            <p>Quality products sourced through dependable supplier relationships and clear commercial communication.</p>
          </div>
          <div className="service-card scroll-reveal" data-reveal>
            <div className="service-icon">02</div>
            <h3>Procurement &amp; Sourcing</h3>
            <p>Practical procurement support that helps teams find the right fit, manage requirements, and stay on schedule.</p>
          </div>
          <div className="service-card scroll-reveal" data-reveal>
            <div className="service-icon">03</div>
            <h3>Logistics Coordination</h3>
            <p>Organised coordination from order to delivery, helping your supply chain stay visible and reliable.</p>
          </div>
          <div className="service-card scroll-reveal" data-reveal>
            <div className="service-icon">04</div>
            <h3>Business Services</h3>
            <p>Flexible operational support tailored to the needs of offices, projects, and growing enterprises.</p>
          </div>
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
