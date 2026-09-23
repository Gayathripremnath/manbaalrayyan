import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
// import img4 from "../assets/img4.png";
// import img6 from "../assets/img6.png";

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
    image: img1,
    category: "O&M",
  },
  {
    number: "05",
    title: "High Capacity RO Plant",
    client: "CCED - PDO",
    location: "Fahud, Oman",
    year: "2026",
    details: "Supply of 100 m³/day high RO water treatment system.",
    image: img2,
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

const projectRegister = `
1|Supply and installation of containerized RO plant|500 m3/day|Al Ghazal International LLC|Salalah|2018
2|Supply and installation of RO plant for MOD|5 m3/hr|Nizwa Gate LLC|Jaloni|2018
3|Supply, installation, testing and commissioning of 150 KLD MBBR-based sewage treatment plant|150 KLD|Al Ghazal Investment|Jalan Bani Bu Hassan|2018
4|Supply, installation and testing of softener system|30 m3/hr|Royal Oman Police|Al Khoud|2019
5|Supply and installation of forensic RO plant with ED (high purity)|10 m3/hr|Royal Oman Police|Ghala|2019
6|Supply and installation of MMF|50 m3/hr|Royal Oman Police|Ibri|2019
7|Supply and installation of RO plants|5 m3/hr|Al Rubie Farm|Suwaiq|2019
8|Supply and installation of RO plants|5 m3/hr|Said Farm|Musannah|2019
9|Supply and installation of RO plants|2 x 400 m3/day|Ace Alpha|Nimr|2019
10|Supply and installation of filters and softeners with complete automation at ROP Club House|60 m3/hr|Service & Trade|Rusayl|2019
11|Supply of GRP storage tanks|100 m3|House of Trading|Muscat|2019
12|AMC of effluent treatment plant and RO plant|500 m3/day|Al Manar ENOF LLC|Duqm|2019
13|Supply, installation, testing and commissioning of 500 KLD activated sludge process effluent treatment plant|500 KLD|Jalan Fish Meal & Oil Industry|Jalan Bani Bu Hassan|2020
14|Installation and testing of flow meter for STP HAYA pumping station|—|OWATCO|Al Khoud|2020
15|AMC of softener plant|400 m3/day|Royal Oman Police|Al Khoud|2020
16|Installation and testing of control panels|—|Delta International|Khasab|2020
17|Installation and testing of control panels|—|Delta International|Khasab|2020
18|Installation and testing of control panels|—|Delta International|Jebel Akhdar|2020
19|Installation of GRP panel tank|500 m3|Royal Oman Police|Awqad|2020
20|Installation of GRP panel tank|500 m3|Sea Dreams|Al Khoud|2020
21|Supply, installation and testing of PLC-operated softener system|30 m3/hr|Royal Oman Police|Al Khoud|2020
22|Supply and installation of RO plants|1000 LPH|Tariq House|Seeb|2020
23|Supply and installation of RO plant for laboratory|200 LPH|ROP Hospital|Qurm|2020
24|Fabrication and installation of equipment for power plant at SC Sohar|15 MW|Sanvira Carbon Limited|Sohar|2021
25|Installation and testing of 200 KLD extended aeration STP with complete automation and PLC system at Sohar Camp|200 KLD|Al Naba Infrastructure|Sohar|2021
26|Installation and testing of DN 100 and 160 GRP PE pipeline for STP HAYA|—|Ibsarine Trading|Muscat|2021
27|Upgrade of pumping station with SCADA and supply, installation and testing of pumping system and piping for PAEW|1050 m3/hr|Ibsarine Trading|Sohar|2021
28|Installation and testing of control panels|—|Ray International|PDO site|2021
29|Supply, installation of 1500 m piping and testing of two bore wells|10 m3/hr|Ibsarine Trading|Sohar|2021
30|Supply, installation and testing of RDU RO plant for MOH|10 m3/hr|Ibsarine Trading|Jalan Bani Bu Hassan|2021
31|AMC of RO plant|400 m3/day|Royal Oman Police|Khasab|2021
32|Supply and installation of sewage pumps|—|Al Naba Infrastructure|Sohar|2021
33|Supply of 2000 GPD RO plant for Arab University|5 m3/hr|Gulf International Contracting|Rumais|2021
34|Supply, installation and testing of RDU RO plant|5 m3/hr|Ministry of Health|Al Jazer|2021
35|Supply and installation of cooling water system for RDU RO|5 m3/hr|Ministry of Health|Nizwa|2021
36|Installation and testing of 200 KLD STP at Sohar Camp|200 KLD|Al Naba Infrastructure|Sohar|2021
37|Operation and maintenance of RO plants at ROP New Hospital|2 x 400 m3/day|Royal Oman Police|Muscat|2022
38|Operation and maintenance of RO plants at multiple sites|400 m3/day|Royal Oman Police|Sur|2022
39|Supply and installation of RO plants|100 LPH|OSCO|Hatta|2022
40|Supply and installation of cooling water system for RDU RO|5 m3/hr|Ministry of Health|Nizwa|2022
41|Installation, piping and testing of two borewell pumps with remote monitoring|—|Royal Oman Police|Wattaya|2022
42|Supply, installation and testing of RDU RO plant for MOH with complete automation and PLC system|5 m3/hr|Sandrose|Mahoot|2022
43|Operation and maintenance of RO plants at multiple sites|400 m3/day|Royal Oman Police|Muscat|2022
44|Supply, installation and testing of 250 LPH RO plant|250 LPH|Unicorn LLC|Al Numan|2022
45|Supply, installation and testing of two RO plants for canteen|5 m3/hr|AOMC - Oman Airports|Muscat|2022
46|Supply, installation and revamping of 800 gm/hr electrochlorination system for HAYA|800 gm/hr|Al Nama|Darsait|2022
47|Operation and maintenance of RO plants at multiple sites|400 m3/day|Royal Oman Police|Duqm|2023
48|Operation and maintenance of RO plants at ROP New Hospital|2 x 400 m3/day|Royal Oman Police|Muscat|2023
49|Operation and maintenance of RO plants at multiple sites|400 m3/day|Royal Oman Police|Sur|2023
50|Supply, installation and testing of dosing system for RO pretreatment|400 m3/day|Royal Oman Police|Salalah|2023
51|Supply and installation of RO plants|200 LPH|Design Unit|Muscat|2024
52|Supply and installation of RO plants|7.5 m3/hr|Abulla Farm|Barka|2024
53|Supply and installation of 6 KLD MBBR-based STP|6 KLD|Veolia - Sur|Sur|2024
54|Supply and installation of automation for MFM meters at 37 locations in Salalah Port|Automation|Al Tohid|Salalah|2024
55|Supply and installation of 50 m3/hr multimedia filters|50 m3/hr|Royal Oman Police|Rub Al Khali|2024
56|Supply, fabrication and installation of duplex RO headers|400 m3/day|Royal Oman Police|Haima|2024
58|Supply, fabrication and installation of duplex RO headers|400 m3/day|Royal Oman Police|Diba|2024
59|Supply, fabrication and installation of duplex RO headers|400 m3/day|Royal Oman Police|Wadi Wali|2024
60|Design, fabrication and installation of 400 m3/day multimedia filter in MSE|400 m3/day|Royal Oman Police|Rub Al Khali|2024
61|Installation, testing and commissioning of multimedia filter|400 m3/day|Khimji Ramdas|Mudhaibi|2024
62|Supply, installation, testing and commissioning of 10 m/hr RO plant|10 m3/day|Bousher Villa|Muscat|2024
63|Supply of portable RDU RO plant|110 LPH|Ministry of Health|Mahoot|2025
64|Fabrication, supply, installation, testing and commissioning of 50 m3/hr media filtration system|1 x 25 m3/hr|Khimji Ramdas|Ibra|2025
65|Supply, installation, testing and commissioning of 250 LPH high-purity RO for laboratory|250 LPH|Ministry of Health|Wadi Bani Khalid|2025
66|Operation and maintenance of two 400 m3/day RO plants for Med City, Muscat|400 m3/day|Royal Oman Police|Muscat|2025
67|Supply, installation, testing and commissioning of 100 m3/day high RO|100 m3/day|CCD - PDO|Fahud|2026
68|Supply, installation and commissioning of 200 LPH RO plant|200 LPH|Domestic, Nizwa|Nizwa|2026
69|Operation and maintenance of RO plants in Dhakliyah region|400 m3/day|Royal Oman Police|Dakhliyah|2025
70|Construction of tanker filling station with pumping station, piping and automatic billing system|3 x 250 m3/hr|Nama Water|Salalah|2025
71|Design, supply, installation, testing and commissioning of water treatment plant (RO, softener, laboratory RO)|600 m3/day|Saif Al Harasi, Sumai GH, MOH|Sumai|2025
72|Design, supply, installation, testing and commissioning of sewage treatment plant for Al Nama Hospital|95 m3/day|L&T|Mudhaibi|2025
73|Design, supply, installation, testing and commissioning of water treatment plant (RO, softener, laboratory RO)|600 m3/day|L&T, Al Nama Hospital, MOH|Mudhaibi|2025
74|Supply, installation, testing and commissioning of 5 m3/hr RDU RO|5 m3/hr|Sandrose / Ministry of Health|Barka|2026
75|Supply, installation, testing and commissioning of 5 m3/hr RDU RO|5 m3/hr|Precision Skills / Ministry of Health|Bala|2026
76|Operation and maintenance of RO plants in Dhahir region|400 m3/day|Royal Oman Police|Dahirah|2026
`.trim()
  .split("\n")
  .map((row) => {
    const [number, description, capacity, client, location, year] = row.split("|");
    return {
      number,
      description,
      capacity,
      client,
      location,
      year,
      ongoing: Number(number) >= 69,
    };
  });

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
  const [projectSearch, setProjectSearch] = React.useState("");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);
  const filteredRegister = projectRegister.filter((project) =>
    [project.number, project.description, project.capacity, project.client, project.location, project.year]
      .join(" ")
      .toLowerCase()
      .includes(projectSearch.trim().toLowerCase()),
  );
  const completedRegister = filteredRegister.filter((project) => !project.ongoing);
  const ongoingRegister = filteredRegister.filter((project) => project.ongoing);

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

      {/* COMPLETE PROJECT REGISTER */}
      <section className="project-register-section" aria-labelledby="project-register-title">
        <div className="project-register-heading">
          <div>
            <span className="section-tag">PROJECT HISTORY</span>
            <h2 id="project-register-title">Complete Project Register</h2>
          </div>
          <p>Search the supplied project list by work, client, location or year.</p>
        </div>

        <div className="project-register-tools">
          <label className="project-register-search">
            <span className="sr-only">Search projects</span>
            <input
              type="search"
              value={projectSearch}
              onChange={(event) => setProjectSearch(event.target.value)}
              placeholder="Search projects, clients, locations, years..."
            />
          </label>
          <span>{filteredRegister.length} of {projectRegister.length} projects</span>
        </div>

        <div className="project-register-scroll">
          <table className="project-register-table">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Project description</th>
                <th scope="col">Capacity</th>
                <th scope="col">Client</th>
                <th scope="col">Location</th>
                <th scope="col">Year</th>
              </tr>
            </thead>
            <tbody>
              {completedRegister.map((project) => (
                <tr key={project.number}>
                  <td>{project.number}</td>
                  <td>{project.description}</td>
                  <td>{project.capacity}</td>
                  <td>{project.client}</td>
                  <td>{project.location}</td>
                  <td>{project.year}</td>
                </tr>
              ))}
              {ongoingRegister.length > 0 && (
                <tr className="project-register-group">
                  <th colSpan="6" scope="colgroup">Ongoing Projects</th>
                </tr>
              )}
              {ongoingRegister.map((project) => (
                <tr key={project.number}>
                  <td>{project.number}</td>
                  <td>{project.description}</td>
                  <td>{project.capacity}</td>
                  <td>{project.client}</td>
                  <td>{project.location}</td>
                  <td>{project.year}</td>
                </tr>
              ))}
              {filteredRegister.length === 0 && (
                <tr>
                  <td className="project-register-empty" colSpan="6">No matching projects found.</td>
                </tr>
              )}
            </tbody>
          </table>
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
