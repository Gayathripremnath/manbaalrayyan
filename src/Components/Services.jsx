import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img6 from "../assets/img6.png";

const services = [
  {
    number: "01",
    title: "Design & Engineering",
    text: "Complete engineering solutions for water, wastewater and desalination systems, developed to meet project requirements and operating conditions.",
    image: img1,
  },
  {
    number: "02",
    title: "Supply & Installation",
    text: "Supply, installation and integration of treatment equipment and systems with a focus on reliable performance and efficient commissioning.",
    image: img2,
  },
  {
    number: "03",
    title: "Chemicals & Consumables",
    text: "Water treatment chemicals, consumables and essential process materials for maintaining efficient and dependable plant operation.",
    image: img3,
  },
  {
    number: "04",
    title: "Operation & Maintenance",
    text: "Skilled operation and maintenance support with trained personnel, safety procedures, technical assistance and responsive service.",
    image: img4,
  },
  {
    number: "05",
    title: "Imports & Exports",
    text: "Import and export of water treatment equipment, systems, components and related products for industrial and commercial applications.",
    image: img6,
  },
];

const solutions = [
  "Packaged RO / STP Plants",
  "Industrial Water Treatment",
  "Municipal Water Treatment",
  "Desalination Systems",
  "Refurbishment & Retrofitting",
];

function Services() {
  return (
    <main className="services-page">

      {/* ================= BANNER ================= */}
      <section className="services-hero">
        <div className="services-hero-shape"></div>

        <div className="services-hero-content">
          <span className="services-eyebrow">OUR SERVICES</span>

          <h1>
            Water solutions
            <br />
            <span>built to perform.</span>
          </h1>

          <p>
            Engineering, equipment, installation and operational support
            for water, wastewater and desalination applications.
          </p>

          <div className="services-breadcrumb">
            <a href="/">Home</a>
            <span>—</span>
            <strong>Services</strong>
          </div>
        </div>

        <div className="services-hero-image">
          <img src={img1} alt="Water treatment system" />
        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="services-intro">
        <div className="services-intro-number">01</div>

        <div className="services-intro-content">
          <span className="section-label">WHAT WE DELIVER</span>

          <h2>
            From engineering
            <br />
            <span>to operation.</span>
          </h2>
        </div>

        <div className="services-intro-text">
          <p>
            Manba Al Rayyan Trading & Services LLC provides integrated
            water and wastewater solutions covering the complete project
            lifecycle.
          </p>

          <p>
            Our capabilities combine engineering expertise, equipment
            supply, installation, commissioning, operation and maintenance
            to deliver dependable treatment solutions.
          </p>
        </div>
      </section>


      {/* ================= SERVICE LIST ================= */}
      <section className="service-list-section">

        <div className="service-list-heading">
          <div>
            <span className="section-label">CORE SERVICES</span>
            <h2>One partner.<br />Complete solutions.</h2>
          </div>

          <p>
            Practical solutions designed around performance, reliability
            and long-term operation.
          </p>
        </div>

        <div className="service-list">

          {services.map((service, index) => (
            <motion.article
              className="service-row"
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >

              <div className="service-number">
                {service.number}
              </div>

              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <span className="service-arrow">↗</span>
              </div>

            </motion.article>
          ))}

        </div>
      </section>


      {/* ================= SOLUTIONS ================= */}
      <section className="solutions-section">

        <div className="solutions-top">
          <div>
            <span className="section-label light-label">
              WATER & WASTEWATER
            </span>

            <h2>
              Treatment solutions
              <br />
              for diverse applications.
            </h2>
          </div>

          <p>
            Our solutions cover packaged treatment plants, industrial and
            municipal applications, desalination and plant refurbishment.
          </p>
        </div>


        <div className="solutions-grid">

          <div className="solutions-image">
            <img src={img3} alt="Water treatment solution" />

            <div className="solutions-image-caption">
              <span>ENGINEERED FOR PERFORMANCE</span>
              <strong>Reliable treatment systems</strong>
            </div>
          </div>


          <div className="solutions-list">

            {solutions.map((solution, index) => (
              <motion.div
                className="solution-item"
                key={solution}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <span>0{index + 1}</span>

                <h3>{solution}</h3>

                <b>↗</b>
              </motion.div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= O&M ================= */}
      <section className="om-section">

        <div className="om-left">
          <span className="section-label">OPERATION & SUPPORT</span>

          <h2>
            Keeping your
            <br />
            <span>plant running.</span>
          </h2>

          <p>
            Our operation and maintenance services are supported by
            trained and integrated personnel, high safety standards,
            standard operating procedures and responsive technical
            assistance.
          </p>

          <a
            href="mailto:martenquiries@gmail.com"
            className="services-mail-btn"
          >
            Talk to our team
            <span>↗</span>
          </a>
        </div>


        <div className="om-right">

          <div className="om-card">
            <span>01</span>
            <h3>Trained Personnel</h3>
            <p>
              Skilled teams supporting day-to-day plant operation and
              maintenance activities.
            </p>
          </div>

          <div className="om-card">
            <span>02</span>
            <h3>Safety First</h3>
            <p>
              High safety standards and structured operating procedures
              for dependable plant performance.
            </p>
          </div>

          <div className="om-card">
            <span>03</span>
            <h3>Technical Response</h3>
            <p>
              Immediate response and technical support when operational
              requirements demand it.
            </p>
          </div>

        </div>

      </section>


      {/* ================= SUSTAINABILITY ================= */}
      <section className="sustainability-section">

        <div className="sustainability-number">02</div>

        <div className="sustainability-content">
          <span className="section-label">SUSTAINABLE SOLUTIONS</span>

          <h2>
            Better water.
            <br />
            <span>Smarter future.</span>
          </h2>

          <p>
            We support sustainable initiatives through green environment
            projects, energy auditing, renewable energy projects and
            water and power audits.
          </p>
        </div>

        <div className="sustainability-image">
          <img src={img6} alt="Sustainable water solution" />
        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="services-cta">

        <div className="cta-line"></div>

        <div className="cta-content">
          <span>HAVE A PROJECT IN MIND?</span>

          <h2>
            Let's build the
            <br />
            <strong>right solution.</strong>
          </h2>
        </div>

        <a
          href="mailto:martenquiries@gmail.com"
          className="cta-button"
        >
          Contact us
          <span>↗</span>
        </a>

      </section>

    </main>
  );
}

export default Services;