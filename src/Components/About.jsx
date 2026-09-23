
import { useState } from "react";
import { motion } from "framer-motion";
import "./About.css";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

// Uncomment these only if the files exist
// import img4 from "../assets/img4.png";
// import img6 from "../assets/img6.png";


const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <main className="about-page">

      {/* =========================
          PAGE BANNER
      ========================= */}
      <section className="about-page-banner">
        <div className="about-banner-overlay">
          <div className="about-banner-content">

            <span>ABOUT US</span>

            <h1>About Manba Al Rayyan</h1>

            <div className="about-banner-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <strong>About Us</strong>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          ABOUT INTRO
      ========================= */}
      <section className="about-intro">

        {/* IMAGE GALLERY */}
        <motion.div
          className="about-gallery"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="about-gallery-item about-gallery-one">
            <img
              src={img1}
              alt="Water treatment plant"
            />
          </div>

          <div className="about-gallery-item about-gallery-two">
            <img
              src={img2}
              alt="Water treatment equipment"
            />
          </div>

          <div className="about-gallery-item about-gallery-three">
            <img
              src={img3}
              alt="Industrial water treatment"
            />
          </div>

          {/* 
          Add this when img4 is available

          <div className="about-gallery-item about-gallery-four">
            <img
              src={img4}
              alt="Water treatment system"
            />
          </div>
          */}

          <div className="about-gallery-badge">
            <span>ABOUT OUR COMPANY</span>
          </div>

        </motion.div>


        {/* CONTENT */}
        <motion.div
          className="about-intro-content"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="about-label">
            <span></span>
            <strong>ABOUT US</strong>
          </div>


          <h1 className="about-intro-title">
            About Manba Al Rayyan
          </h1>


          <p className="about-intro-text">
            Manba Al Rayyan Trading & Services LLC is a foreign investment
            company operating in the Sultanate of Oman, providing reliable
            engineering, construction, trading and technical services.
          </p>


          <p className="about-intro-text">
            With a team of experienced professionals and more than
            <strong> 25 satisfied clients</strong>, we are committed to
            quality, innovation and sustainable solutions across various
            sectors.
          </p>


          {/* STATISTICS */}
          <div className="about-statistics">

            <div className="about-stat">

              <div className="about-stat-icon">
                ✓
              </div>

              <div>
                <strong>25+</strong>
                <span>Satisfied Clients</span>
              </div>

            </div>


            <div className="about-stat">

              <div className="about-stat-icon">
                ◎
              </div>

              <div>
                <strong>2015</strong>
                <span>Established</span>
              </div>

            </div>

          </div>


          {/* VISION / MISSION TABS */}
          <div className="about-tabs">

            <button
              className={activeTab === "vision" ? "active" : ""}
              onClick={() => setActiveTab("vision")}
            >
              Vision
            </button>


            <button
              className={activeTab === "mission" ? "active" : ""}
              onClick={() => setActiveTab("mission")}
            >
              Mission
            </button>

          </div>


          {/* TAB CONTENT */}
          <div className="about-tab-content">

            {activeTab === "vision" ? (

              <p>
                To provide our clients with quality engineered systems
                and sustainable solutions in water and wastewater treatment,
                while maintaining a strong commitment to environmental care.
              </p>

            ) : (

              <p>
                To deliver reliable and innovative solutions while empowering
                our workforce through continuous training, modern technologies
                and engineering excellence.
              </p>

            )}

          </div>


          <a
            href="#company-overview"
            className="about-intro-button"
          >
            Explore More
            <span>↗</span>
          </a>

        </motion.div>

      </section>



      {/* =========================
          COMPANY OVERVIEW
      ========================= */}
      <section
        className="about-overview"
        id="company-overview"
      >

        <div className="about-container">

          <div className="about-section-heading">

            <div className="about-label">
              <span></span>
              <strong>WHO WE ARE</strong>
            </div>

            <h2>
              Engineering and service solutions
              built around our clients' needs.
            </h2>

          </div>


          <div className="about-overview-grid">

            <div className="about-overview-text">

              <p>
                Manba Al Rayyan Trading & Services LLC operates in the
                Sultanate of Oman with expertise in engineering,
                construction, desalination, water treatment and
                wastewater treatment.
              </p>


              <p>
                Our experienced team provides solutions covering
                design and engineering, equipment supply and installation,
                chemicals and consumables, imports and exports and
                sustainable technical solutions.
              </p>


              <p>
                We focus on delivering practical, reliable and
                high-quality solutions tailored to the technical
                and operational requirements of each client.
              </p>

            </div>


            <div className="about-overview-points">

              <div className="about-overview-point">

                <span>01</span>

                <div>
                  <h3>
                    Engineering Excellence
                  </h3>

                  <p>
                    Technical solutions designed around
                    project requirements and performance.
                  </p>
                </div>

              </div>


              <div className="about-overview-point">

                <span>02</span>

                <div>
                  <h3>
                    Reliable Service
                  </h3>

                  <p>
                    Professional support focused on quality,
                    efficiency and client satisfaction.
                  </p>
                </div>

              </div>


              <div className="about-overview-point">

                <span>03</span>

                <div>
                  <h3>
                    Sustainable Approach
                  </h3>

                  <p>
                    Solutions focused on responsible use
                    of water, energy and resources.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =========================
          OUR EXPERTISE
      ========================= */}
      <section className="about-expertise">

        <div className="about-container">

          <div className="about-section-heading about-heading-center">

            <div className="about-label">
              <span></span>
              <strong>OUR EXPERTISE</strong>
            </div>

            <h2>
              Integrated services for engineering,
              construction and water treatment.
            </h2>

          </div>


          <div className="about-expertise-grid">

            <div className="about-expertise-card">

              <span>01</span>

              <h3>
                Design & Engineering
              </h3>

              <p>
                Engineering and technical solutions for
                water, wastewater and desalination applications.
              </p>

            </div>


            <div className="about-expertise-card">

              <span>02</span>

              <h3>
                Supply & Installation
              </h3>

              <p>
                Supply and installation of equipment,
                systems and associated components.
              </p>

            </div>


            <div className="about-expertise-card">

              <span>03</span>

              <h3>
                Chemicals & Consumables
              </h3>

              <p>
                Supply of chemicals, consumables and
                essential products for treatment systems.
              </p>

            </div>


            <div className="about-expertise-card">

              <span>04</span>

              <h3>
                Technical Services
              </h3>

              <p>
                Professional technical support and
                service solutions for client requirements.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* =========================
          OUR CLIENTS
      ========================= */}
      <section className="about-clients">

        <div className="about-container">

          <div className="about-section-heading about-heading-center">

            <div className="about-label">
              <span></span>
              <strong>OUR CLIENTS</strong>
            </div>

            <h2>
              Trusted by leading organizations
              across Oman.
            </h2>

            <p>
              We are proud to have developed strong professional
              relationships with leading organizations and companies.
            </p>

          </div>


          <div className="about-client-grid">

            <div>Royal Oman Police</div>
            <div>Nama Water</div>
            <div>Ministry of Health</div>
            <div>Ministry of Defence</div>
            <div>Oman Airports</div>
            <div>Al Ansari Trading</div>
            <div>Gulf International Contracting</div>
            <div>Sandrose</div>
            <div>Galfar</div>
            <div>L&amp;T</div>
            <div>Saif Al Harrasi</div>
            <div>Al Naba Holding</div>
            <div>Crowne Plaza Hotel</div>
            <div>Al Hashemi &amp; Al Rawas</div>
            <div>Mina Petroleum</div>
            <div>Delta International</div>
            <div>Khimji Ramdas</div>

          </div>

        </div>

      </section>



      {/* =========================
          OUR SOLUTIONS
      ========================= */}
      <section className="about-solutions">

        <div className="about-container">

          <div className="about-solutions-grid">

            {/* IMAGE */}
            <div className="about-solutions-image">

              {/* 
              Add img6 when available

              <img
                src={img6}
                alt="Water treatment solutions"
              />
              */}

              <img
                src={img3}
                alt="Water treatment solutions"
              />

            </div>


            {/* CONTENT */}
            <div className="about-solutions-content">

              <div className="about-label">
                <span></span>
                <strong>OUR SOLUTIONS</strong>
              </div>


              <h2>
                Water treatment solutions
                built around real needs.
              </h2>


              <p>
                We provide solutions for industrial, municipal
                and specialized water treatment applications,
                with a focus on reliable and sustainable results.
              </p>


              <div className="about-solution-list">

                <div>
                  <span>✓</span>
                  <p>Packaged RO &amp; STP Plants</p>
                </div>


                <div>
                  <span>✓</span>
                  <p>Industrial Water Treatment</p>
                </div>


                <div>
                  <span>✓</span>
                  <p>Municipal Water Treatment</p>
                </div>


                <div>
                  <span>✓</span>
                  <p>Desalination Solutions</p>
                </div>


                <div>
                  <span>✓</span>
                  <p>Refurbishment &amp; Retrofitting</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =========================
          SUSTAINABILITY
      ========================= */}
      <section className="about-sustainability">

        <div className="about-container">

          <div className="about-sustainability-content">

            <div className="about-label">
              <span></span>
              <strong>SUSTAINABILITY</strong>
            </div>


            <h2>
              Creating efficient solutions
              with environmental responsibility.
            </h2>


            <p>
              Sustainability is an important part of our approach.
              We support solutions that focus on efficient water
              and power usage, environmental care and responsible
              resource management.
            </p>

          </div>


          <div className="about-sustainability-grid">

            <div>
              <span>01</span>
              <h3>Green Environment Projects</h3>
            </div>


            <div>
              <span>02</span>
              <h3>Energy Auditing</h3>
            </div>


            <div>
              <span>03</span>
              <h3>Renewable Energy Projects</h3>
            </div>


            <div>
              <span>04</span>
              <h3>Water &amp; Power Audits</h3>
            </div>

          </div>

        </div>

      </section>



      {/* =========================
          DWA PARTNERSHIP
      ========================= */}
      <section className="about-dwa">

        <div className="about-container">

          <div className="about-dwa-grid">

            <div className="about-dwa-content">

              <div className="about-label">
                <span></span>
                <strong>DWA PARTNERSHIP</strong>
              </div>


              <h2>
                Authorized distributor for
                DWA medical devices in Oman.
              </h2>


              <p>
                Manba Al Rayyan Trading & Services LLC is the
                authorized distributor for DWA medical devices
                in Oman, supporting customers with quotation,
                tendering, distribution, installation,
                maintenance and technical service.
              </p>


              <p>
                Our technical capabilities include support for
                reverse osmosis systems and medical water
                treatment solutions.
              </p>

            </div>


            <div className="about-dwa-points">

              <div>
                <span>✓</span>
                <p>Distribution &amp; Supply</p>
              </div>


              <div>
                <span>✓</span>
                <p>Installation Support</p>
              </div>


              <div>
                <span>✓</span>
                <p>Maintenance Services</p>
              </div>


              <div>
                <span>✓</span>
                <p>Technical Support</p>
              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =========================
          CTA
      ========================= */}
      <section className="about-contact">

        <div className="about-container">

          <div className="about-contact-box">

            <div>

              <div className="about-label">
                <span></span>
                <strong>LET'S WORK TOGETHER</strong>
              </div>


              <h2>
                Looking for a reliable
                engineering partner?
              </h2>


              <p>
                Talk to our team about your next water,
                wastewater, desalination or engineering project.
              </p>

            </div>


            <a
              href="mailto:martenquiries@gmail.com"
              className="about-contact-button"
            >
              Start a Conversation
              <span>↗</span>
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};


export default AboutUs;

