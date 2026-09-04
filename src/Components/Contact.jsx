import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const contactItems = [
  {
    number: "01",
    label: "CALL US",
    value: "+968 24265028",
    href: "tel:+96824265028",
  },
  {
    number: "02",
    label: "EMAIL",
    value: "martenquiries@gmail.com",
    href: "mailto:martenquiries@gmail.com",
  },
  {
    number: "03",
    label: "VISIT US",
    value: "Rusayl Industrial Area, Oman",
    href: "#location",
  },
];

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const company = form.company.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const service = form.service.value;
    const message = form.message.value;

    const subject = `Website Enquiry - ${service}`;

    const body = `
Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}
Service: ${service}

Message:
${message}
    `;

    window.location.href =
      `mailto:martenquiries@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="modern-contact">

      {/* =========================
          HERO
      ========================= */}

      <section className="contact-modern-hero">
        <div className="contact-hero-glow"></div>

        <div className="contact-hero-inner">

          <motion.div
            className="contact-hero-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-eyebrow">
              <span></span>
              CONTACT MANBA AL RAYYAN
            </div>

            <h1>
              Let's create
              <br />
              <strong>better water solutions.</strong>
            </h1>

            <p>
              Have a project, requirement or technical enquiry?
              Tell us what you need and our team will help you find
              the right solution.
            </p>

            <div className="contact-breadcrumb">
              <a href="/">Home</a>
              <span>→</span>
              <strong>Contact</strong>
            </div>
          </motion.div>

          <motion.div
            className="hero-contact-mark"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span>WATER</span>
            <span>ENGINEERING</span>
          </motion.div>

        </div>
      </section>


      {/* =========================
          QUICK CONTACT CARDS
      ========================= */}

      <section className="contact-cards-wrapper">

        <div className="contact-cards">

          {contactItems.map((item, index) => (
            <motion.a
              href={item.href}
              className="contact-info-card"
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="contact-card-top">
                <span>{item.number}</span>
                <span className="card-arrow">↗</span>
              </div>

              <div>
                <small>{item.label}</small>
                <h3>{item.value}</h3>
              </div>
            </motion.a>
          ))}

        </div>

      </section>


      {/* =========================
          MAIN CONTACT AREA
      ========================= */}

      <section className="modern-contact-main">

        {/* LEFT SIDE */}

        <motion.div
          className="contact-message"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="contact-section-label">
            <span></span>
            START A CONVERSATION
          </div>

          <h2>
            Tell us about
            <br />
            <em>your project.</em>
          </h2>

          <p>
            From RO and desalination systems to wastewater treatment,
            filtration, STP and operation & maintenance, our team can
            support your water treatment requirements.
          </p>

          <div className="contact-points">

            <div>
              <span>01</span>
              <p>
                Understand your technical requirements
              </p>
            </div>

            <div>
              <span>02</span>
              <p>
                Develop the right treatment solution
              </p>
            </div>

            <div>
              <span>03</span>
              <p>
                Deliver reliable long-term support
              </p>
            </div>

          </div>

        </motion.div>


        {/* RIGHT FORM */}

        <motion.div
          className="modern-form-box"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="form-header">
            <div>
              <span>01 / ENQUIRY</span>
              <h3>Send us a message</h3>
            </div>

            <div className="form-circle">
              ↗
            </div>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="modern-input-row">

              <div className="modern-input">
                <label>YOUR NAME</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="modern-input">
                <label>COMPANY</label>

                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                />
              </div>

            </div>


            <div className="modern-input-row">

              <div className="modern-input">
                <label>EMAIL ADDRESS</label>

                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="modern-input">
                <label>PHONE NUMBER</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+968"
                />
              </div>

            </div>


            <div className="modern-input">
              <label>SERVICE REQUIRED</label>

              <select
                name="service"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a service
                </option>

                <option value="Design & Engineering">
                  Design & Engineering
                </option>

                <option value="Supply & Installation">
                  Supply & Installation
                </option>

                <option value="Water Treatment">
                  Water Treatment
                </option>

                <option value="RO & Desalination">
                  RO & Desalination
                </option>

                <option value="STP Solutions">
                  STP Solutions
                </option>

                <option value="Operation & Maintenance">
                  Operation & Maintenance
                </option>

                <option value="DWA Medical Water Systems">
                  DWA Medical Water Systems
                </option>

                <option value="Other">
                  Other
                </option>

              </select>
            </div>


            <div className="modern-input">
              <label>YOUR MESSAGE</label>

              <textarea
                name="message"
                rows="5"
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>


            <button
              type="submit"
              className="modern-submit"
            >
              <span>Send Enquiry</span>
              <strong>↗</strong>
            </button>

          </form>

        </motion.div>

      </section>


      {/* =========================
          LOCATION
      ========================= */}

      <section
        className="contact-location"
        id="location"
      >

        <div className="location-content">

          <div className="contact-section-label light">
            <span></span>
            FIND US
          </div>

          <h2>
            Based in Oman.
            <br />
            <em>Connected to possibilities.</em>
          </h2>

          <p>
            Plot No. 1070, Way No. 4902,
            Postal Code 124, PO Box 24,
            Rusayl Industrial Area,
            Sultanate of Oman.
          </p>

          <div className="location-details">

            <div>
              <small>PHONE</small>
              <strong>+968 24265028</strong>
            </div>

            <div>
              <small>EMAIL</small>
              <strong>martenquiries@gmail.com</strong>
            </div>

          </div>

        </div>


        <div className="location-visual">

          <div className="location-ring ring-one"></div>
          <div className="location-ring ring-two"></div>
          <div className="location-ring ring-three"></div>

          <div className="location-center">
            <span>OMAN</span>
            <strong>+</strong>
          </div>

        </div>

      </section>


      {/* =========================
          FINAL CTA
      ========================= */}

      <section className="contact-final">

        <div className="final-number">
          02
        </div>

        <div>
          <span>READY WHEN YOU ARE</span>

          <h2>
            Let's build something
            <br />
            <em>that makes a difference.</em>
          </h2>
        </div>

        <a
          href="mailto:martenquiries@gmail.com"
          className="final-mail"
        >
          Email Us
          <span>↗</span>
        </a>

      </section>

    </main>
  );
}

export default Contact;