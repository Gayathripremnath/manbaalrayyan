import React, { useEffect } from 'react';
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

export default function Home() {
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

  return (
    <div className="home-wrapper">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-copy">
            <div className="badge-tag">// MANBA AL RAYYAN LLC</div>
            <h1 className="hero-title animate-up">Trading that moves business forward.</h1>
            <p className="hero-intro">Reliable sourcing, supply, and operational services for organisations that value quality, speed, and long-term partnerships.</p>
            <a className="hero-cta" href="#contact">Start a conversation <span>↗</span></a>
          </div>
          <div className="hero-right-card">
            <span className="built-tag">[BUILT FOR BUSINESS]</span>
            <p>Manba Al Rayyan Trading &amp; Services LLC connects dependable products and practical services with the businesses that need them.</p>
            <div className="hero-card-line"><span>01</span> Source with confidence</div>
            <div className="hero-card-line"><span>02</span> Deliver with consistency</div>
          </div>
        </div>

        <div className="client-banner">
          <p className="client-subtext">A dependable partner for procurement, supply, and essential business services.</p>
          <div className="client-logos">
            <span>Trading</span>
            <span>Procurement</span>
            <span>Logistics</span>
            <span>Operations</span>
          </div>
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

      <section className="stats-section scroll-reveal" data-reveal>
        <div className="stats-container">
          <div className="stats-header-text">
            <div className="badge-tag">// WHY MANBA AL RAYYAN</div>
            <h2>Steady service. Clear communication. Business you can count on.</h2>
          </div>
          <div className="stats-grid">
            <div className="stat-card light scroll-reveal" data-reveal>
              <div className="mini-avatars">TR</div>
              <span className="stat-label">Commercial focus</span>
              <h3 className="stat-number">01</h3>
              <p>One accountable partner for trading and services.</p>
            </div>
            <div className="stat-card dark scroll-reveal" data-reveal>
              <span className="stat-label">Our approach</span>
              <h3 className="stat-number">Direct</h3>
              <p>Fast responses, straightforward terms, and no unnecessary complexity.</p>
            </div>
            <div className="stat-card light scroll-reveal" data-reveal>
              <span className="stat-label">Our standard</span>
              <h3 className="stat-number">Ready</h3>
              <p>Prepared to support routine requirements and new opportunities.</p>
            </div>
            <div className="stat-card image-bg scroll-reveal" data-reveal>
              <span className="stat-label">Our promise</span>
              <h3 className="stat-number">Trust</h3>
              <p>Relationships built for repeat business and shared growth.</p>
            </div>
          </div>
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
