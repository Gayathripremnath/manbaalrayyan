import React from "react";
import { motion } from "framer-motion";
import "./Solutions.css";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img6 from "../assets/img6.png";

const solutions = [
  {
    number: "01",
    title: "Packaged RO Solutions",
    short: "Reliable reverse osmosis systems for different water treatment requirements.",
    description:
      "We provide packaged reverse osmosis solutions designed around specific water quality and treatment requirements. Our solutions cover compact systems through larger water treatment applications.",
    image: img1,
    points: [
      "Packaged RO plant solutions",
      "Water purification applications",
      "High-purity water requirements",
      "System design and integration",
    ],
  },
  {
    number: "02",
    title: "Packaged STP Solutions",
    short: "Practical wastewater treatment solutions for commercial and institutional applications.",
    description:
      "Our packaged sewage treatment solutions are developed to provide effective wastewater treatment with integrated equipment and systems suited to project requirements.",
    image: img2,
    points: [
      "Packaged STP systems",
      "Wastewater treatment",
      "Integrated treatment equipment",
      "Installation and technical support",
    ],
  },
  {
    number: "03",
    title: "Industrial Water Treatment",
    short: "Engineered water treatment solutions for industrial environments.",
    description:
      "We deliver industrial water treatment solutions combining appropriate treatment technologies, equipment and engineering support to meet the requirements of different industrial applications.",
    image: img3,
    points: [
      "Industrial water treatment",
      "Pre-treatment systems",
      "Filtration solutions",
      "RO and water purification",
    ],
  },
  {
    number: "04",
    title: "Municipal Water Treatment",
    short: "Water treatment solutions designed for municipal and public-sector requirements.",
    description:
      "Our municipal water treatment solutions support reliable water treatment infrastructure with suitable filtration, purification and supporting systems.",
    image: img4,
    points: [
      "Municipal water treatment",
      "Filtration systems",
      "Water purification",
      "Project-specific engineering",
    ],
  },
  {
    number: "05",
    title: "Desalination",
    short: "Technology-driven solutions for converting saline water into usable water.",
    description:
      "Desalination is one of our core areas of exposure. We provide solutions based on reverse osmosis and supporting treatment systems for water desalination applications.",
    image: img6,
    points: [
      "Reverse osmosis desalination",
      "Pre-treatment systems",
      "Water purification",
      "Complete system integration",
    ],
  },
  {
    number: "06",
    title: "Refurbishment & Retrofitting",
    short: "Upgrade existing treatment systems for better reliability and performance.",
    description:
      "We support refurbishment and retrofitting of existing water treatment systems by upgrading equipment and integrating improved solutions according to project requirements.",
    image: img1,
    points: [
      "Existing system assessment",
      "Equipment replacement",
      "System upgrades",
      "Retrofitting solutions",
    ],
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Solutions = () => {
  return (
    <main className="solutions-page">

      {/* HERO */}
      <section className="solutions-hero">
        <div className="solutions-hero-bg"></div>

        <div className="solutions-hero-content">
          <motion.span
            className="solutions-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            OUR SOLUTIONS
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Water solutions
            <br />
            <span>built around your needs.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            From desalination and water treatment to wastewater systems,
            Manba Al Rayyan delivers practical and integrated solutions
            for diverse water requirements.
          </motion.p>

          <motion.div
            className="solutions-breadcrumb"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a href="/">Home</a>
            <span>/</span>
            <strong>Solutions</strong>
          </motion.div>
        </div>

        <div className="hero-number">06</div>
      </section>

      {/* INTRO */}
      <section className="solutions-intro">
        <div className="solutions-container intro-grid">

          <motion.div
            className="intro-label"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span>01</span>
            <p>ENGINEERED<br />SOLUTIONS</p>
          </motion.div>

          <motion.div
            className="intro-content"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="section-tag">WATER & WASTEWATER</span>

            <h2>
              One partner.
              <br />
              <span>Multiple water solutions.</span>
            </h2>

            <p>
              Manba Al Rayyan Trading & Services LLC provides solutions
              across desalination, industrial and municipal water
              treatment, packaged RO and STP systems, and the
              refurbishment of existing treatment facilities.
            </p>

            <p>
              Each solution can be developed according to the specific
              application, site requirements and treatment objectives.
            </p>
          </motion.div>

        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="solutions-list">

        <div className="solutions-container">

          <div className="solutions-heading">
            <div>
              <span className="section-tag">WHAT WE SOLVE</span>
              <h2>Solutions for every stage of water treatment.</h2>
            </div>

            <p>
              Explore our core solution areas and discover how our
              engineering, equipment and technical capabilities come
              together for water and wastewater projects.
            </p>
          </div>

          {solutions.map((solution, index) => (
            <motion.article
              className={`solution-item ${
                index % 2 !== 0 ? "reverse" : ""
              }`}
              key={solution.number}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >

              {/* IMAGE */}
              <div className="solution-image">
                <img src={solution.image} alt={solution.title} />

                <div className="solution-image-overlay"></div>

                <span className="solution-number">
                  {solution.number}
                </span>
              </div>

              {/* CONTENT */}
              <div className="solution-content">

                <span className="solution-index">
                  SOLUTION {solution.number}
                </span>

                <h3>{solution.title}</h3>

                <p className="solution-short">
                  {solution.short}
                </p>

                <p className="solution-description">
                  {solution.description}
                </p>

                <div className="solution-points">
                  {solution.points.map((point, i) => (
                    <div className="solution-point" key={i}>
                      <span>+</span>
                      <p>{point}</p>
                    </div>
                  ))}
                </div>

                <a href="/contact" className="solution-link">
                  Discuss this solution
                  <span>↗</span>
                </a>

              </div>

            </motion.article>
          ))}

        </div>
      </section>

      {/* PRE-FILTRATION */}
      <section className="prefiltration-section">

        <div className="solutions-container prefiltration-grid">

          <motion.div
            className="prefiltration-content"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="section-tag light">SUPPORTING TECHNOLOGY</span>

            <h2>
              The right treatment
              <br />
              <span>starts with pre-treatment.</span>
            </h2>

            <p>
              Effective water treatment often begins with appropriate
              pre-filtration and conditioning. Our solutions can
              incorporate filtration and dosing systems as required
              by the application.
            </p>

            <div className="prefiltration-features">

              <div>
                <strong>01</strong>
                <span>Multimedia Filtration</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Cartridge Filtration</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Dosing & Pre-treatment</span>
              </div>

            </div>
          </motion.div>

          <motion.div
            className="prefiltration-visual"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="visual-circle circle-one"></div>
            <div className="visual-circle circle-two"></div>

            <div className="visual-center">
              <span>WATER</span>
              <strong>01</strong>
              <small>PRE-TREATMENT</small>
            </div>
          </motion.div>

        </div>

      </section>

      {/* CTA */}
      <section className="solutions-cta">

        <div className="solutions-container">

          <motion.div
            className="cta-box"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <span className="section-tag">LET'S TALK</span>

              <h2>
                Have a water
                <br />
                <span>challenge?</span>
              </h2>

              <p>
                Tell us about your project and let our team explore
                the right solution for your requirements.
              </p>
            </div>

            <a href="/contact" className="cta-button">
              Contact Us
              <span>↗</span>
            </a>
          </motion.div>

        </div>

      </section>

    </main>
  );
};

export default Solutions;