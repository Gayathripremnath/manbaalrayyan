import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img6 from "../assets/img6.png";

const projects = [
  {
    number: "01",
    title: "Portable RDU RO Plant",
    client: "Ministry of Health",
    location: "Mahoot, Oman",
    year: "2025",
    details: "Supply of 110 LPH portable RDU RO plant.",
    image: img1,
    category: "RO & Desalination",
  },
  {
    number: "02",
    title: "Media Filtration System",
    client: "Khimji Ramdas",
    location: "Ibra, Oman",
    year: "2025",
    details: "Supply of 50 m³/hr media filtration system.",
    image: img2,
    category: "Filtration",
  },
  {
    number: "03",
    title: "High Purity RO System",
    client: "Ministry of Health",
    location: "Wadi Bani Khalid, Oman",
    year: "2025",
    details: "Supply of 250 LPH high purity RO system for laboratory applications.",
    image: img3,
    category: "Water Treatment",
  },
  {
    number: "04",
    title: "RO Plant Operation & Maintenance",
    client: "Royal Oman Police",
    location: "Muscat, Oman",
    year: "2025",
    details: "Operation and maintenance of 2 × 400 m³/day RO plants.",
    image: img4,
    category: "O&M",
  },
  {
    number: "05",
    title: "High Capacity RO Plant",
    client: "CCED - PDO",
    location: "Fahud, Oman",
    year: "2026",
    details: "Supply of 100 m³/day high RO water treatment system.",
    image: img6,
    category: "RO & Desalination",
  },
  {
    number: "06",
    title: "Hospital Water Treatment Plant",
    client: "L&T / Al Nama Hospital / MOH",
    location: "Mudhaibi, Oman",
    year: "2025",
    details:
      "600 m³/day water treatment plant including RO, softener and laboratory RO.",
    image: img1,
    category: "Water Treatment",
  },
  {
    number: "07",
    title: "STP for Al Nama Hospital",
    client: "L&T",
    location: "Mudhaibi, Oman",
    year: "2025",
    details: "95 m³/day sewage treatment plant.",
    image: img2,
    category: "STP",
  },
  {
    number: "08",
    title: "Tanker Filling Station",
    client: "Nama Water",
    location: "Salalah, Oman",
    year: "2025",
    details:
      "Tanker filling station with pumping station, piping and automatic billing.",
    image: img3,
    category: "Water Infrastructure",
  },
];

const categories = [
  "All",
  "RO & Desalination",
  "Water Treatment",
  "Filtration",
  "STP",
  "O&M",
  "Water Infrastructure",
];

function Projects() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <main className="projects-page">

      {/* HERO */}
      <section className="projects-hero">
        <div className="projects-hero-overlay">
          <div className="projects-hero-content">
            <span>OUR PROJECTS</span>

            <h1>
              Experience That
              <br />
              Delivers Results.
            </h1>

            <p>
              Delivering reliable water and wastewater treatment solutions
              across Oman.
            </p>

            <div className="projects-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <strong>Projects</strong>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="projects-intro">
        <div className="projects-intro-left">
          <span className="section-tag">OUR EXPERIENCE</span>

          <h2>
            Projects built around
            <br />
            <em>real-world needs.</em>
          </h2>
        </div>

        <div className="projects-intro-right">
          <p>
            Manba Al Rayyan Trading & Services LLC has delivered water,
            wastewater and desalination solutions for government,
            healthcare, industrial and commercial clients across Oman.
          </p>

          <p>
            From compact RO systems to large-scale treatment plants and
            operation & maintenance services, every project is approached
            with a focus on reliability, efficiency and long-term performance.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="project-filter-section">
        <div className="project-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects-list-section">
        <div className="projects-list-header">
          <div>
            <span className="section-tag">SELECTED WORK</span>
            <h2>Featured Projects</h2>
          </div>

          <p>
            A selection of projects representing our capabilities in water
            treatment, RO, filtration, STP and technical services.
          </p>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />

                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-category">
                  {project.category}
                </div>
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span>{project.year}</span>
                  <span>{project.location}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.details}</p>

                <div className="project-client">
                  <span>CLIENT</span>
                  <strong>{project.client}</strong>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE STRIP */}
      <section className="projects-experience">
        <div className="experience-content">
          <span className="section-tag light">BUILT ON EXPERIENCE</span>

          <h2>
            Water solutions.
            <br />
            <span>Proven in the field.</span>
          </h2>

          <p>
            Our project experience covers RO plants, filtration systems,
            wastewater treatment, desalination, refurbishment, automation
            and operation & maintenance.
          </p>

          <a href="/contact" className="experience-btn">
            Discuss Your Project
            <span>↗</span>
          </a>
        </div>

        <div className="experience-decoration">
          <span>WATER</span>
          <span>ENGINEERING</span>
        </div>
      </section>

      {/* CTA */}
      <section className="projects-cta">
        <div>
          <span className="section-tag">HAVE A PROJECT IN MIND?</span>

          <h2>
            Let's build the
            <br />
            right solution.
          </h2>
        </div>

        <a href="/contact" className="projects-cta-btn">
          Contact Us
          <span>↗</span>
        </a>
      </section>

    </main>
  );
}

export default Projects;