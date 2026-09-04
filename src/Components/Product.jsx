import React from "react";
import { motion } from "framer-motion";
import "./Product.css";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img6 from "../assets/img6.png";

const products = [
  {
    number: "01",
    category: "RO SYSTEMS",
    title: "Reverse Osmosis Systems",
    description:
      "Reliable reverse osmosis systems designed for water purification and high-quality treated water applications.",
    image: img1,
    tags: ["RO", "Water Treatment"],
  },
  {
    number: "02",
    category: "WATER TREATMENT",
    title: "Media Filtration Systems",
    description:
      "Filtration solutions designed to remove suspended solids and improve water quality before further treatment.",
    image: img2,
    tags: ["Filtration", "Pre-Treatment"],
  },
  {
    number: "03",
    category: "WASTEWATER",
    title: "STP Solutions",
    description:
      "Sewage treatment solutions developed for effective wastewater treatment across different applications.",
    image: img3,
    tags: ["STP", "Wastewater"],
  },
  {
    number: "04",
    category: "EQUIPMENT",
    title: "Water Treatment Equipment",
    description:
      "A range of equipment and components supporting complete water treatment plant installation and operation.",
    image: img4,
    tags: ["Equipment", "Industrial"],
  },
  {
    number: "05",
    category: "CONSUMABLES",
    title: "Chemicals & Consumables",
    description:
      "Treatment chemicals and consumables required for maintaining efficient and consistent plant performance.",
    image: img6,
    tags: ["Chemicals", "Consumables"],
  },
];

const dwaProducts = [
  "modula reverse osmosis systems",
  "nephRO TP",
  "centRO",
  "HemoRO 4 ONE",
  "nephro SAFE / HDS",
  "CeCon 3000",
  "Media Supply Systems",
  "Ring-Main Solutions",
];

function Product() {
  return (
    <main className="product-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="product-hero">

        <div className="product-hero-background"></div>

        <div className="product-hero-content">

          <span className="product-eyebrow">
            PRODUCTS & EQUIPMENT
          </span>

          <h1>
            Technology for
            <br />
            <span>better water.</span>
          </h1>

          <p>
            Water treatment equipment, systems and technical products
            designed for dependable performance across diverse
            applications.
          </p>

          <div className="product-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <strong>Products</strong>
          </div>

        </div>

        <div className="product-hero-visual">
          <div className="product-hero-circle"></div>

          <img
            src={img1}
            alt="Water treatment equipment"
          />

          <div className="product-hero-label">
            <span>MANBA AL RAYYAN</span>
            <strong>WATER TECHNOLOGY</strong>
          </div>
        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="product-intro">

        <div className="product-intro-side">
          <span>PRODUCT RANGE</span>
          <strong>01</strong>
        </div>

        <div className="product-intro-main">

          <div className="product-intro-heading">
            <span className="product-section-label">
              ENGINEERED SOLUTIONS
            </span>

            <h2>
              Equipment that
              <br />
              <span>works harder.</span>
            </h2>
          </div>

          <div className="product-intro-description">

            <p>
              Our product portfolio supports water treatment,
              wastewater treatment and desalination applications.
            </p>

            <p>
              From complete treatment systems to individual equipment,
              chemicals and consumables, we provide solutions suited
              to project and operational requirements.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRODUCT SHOWCASE
      ===================================================== */}

      <section className="product-showcase">

        <div className="product-showcase-header">

          <div>
            <span className="product-section-label">
              OUR PRODUCTS
            </span>

            <h2>
              Built around
              <br />
              your application.
            </h2>
          </div>

          <p>
            Explore our core range of treatment systems, equipment
            and consumables.
          </p>

        </div>


        <div className="product-grid">

          {products.map((product, index) => (

            <motion.article
              className={`product-card product-card-${index + 1}`}
              key={product.number}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >

              <div className="product-card-image">

                <img
                  src={product.image}
                  alt={product.title}
                />

                <span className="product-card-number">
                  {product.number}
                </span>

                <div className="product-card-overlay">
                  <span>VIEW PRODUCT</span>
                  <b>↗</b>
                </div>

              </div>


              <div className="product-card-content">

                <span className="product-card-category">
                  {product.category}
                </span>

                <h3>{product.title}</h3>

                <p>{product.description}</p>

                <div className="product-tags">

                  {product.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES STRIP
      ===================================================== */}

      <section className="product-capabilities">

        <div className="product-capability-item">
          <span>01</span>
          <strong>RO TECHNOLOGY</strong>
          <p>Reverse osmosis systems for water purification.</p>
        </div>

        <div className="product-capability-item">
          <span>02</span>
          <strong>FILTRATION</strong>
          <p>Media filtration and pre-treatment solutions.</p>
        </div>

        <div className="product-capability-item">
          <span>03</span>
          <strong>WASTEWATER</strong>
          <p>Solutions for sewage and wastewater treatment.</p>
        </div>

        <div className="product-capability-item">
          <span>04</span>
          <strong>SUPPORT</strong>
          <p>Technical assistance and operational support.</p>
        </div>

      </section>


      {/* =====================================================
          DWA SECTION
      ===================================================== */}

      <section className="dwa-section">

        <div className="dwa-image">

          <img
            src={img4}
            alt="DWA water treatment systems"
          />

          <div className="dwa-image-badge">
            <span>AUTHORIZED</span>
            <strong>DWA</strong>
          </div>

        </div>


        <div className="dwa-content">

          <span className="product-section-label">
            DWA MEDICAL WATER TECHNOLOGY
          </span>

          <h2>
            Specialized systems
            <br />
            for <span>medical applications.</span>
          </h2>

          <p>
            Manba Al Rayyan is the authorized distributor for DWA
            medical water technology in Oman, supporting supply,
            distribution, installation, maintenance and technical
            services.
          </p>


          <div className="dwa-product-list">

            {dwaProducts.map((item, index) => (

              <div
                className="dwa-product-item"
                key={item}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{item}</strong>

                <b>↗</b>
              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY OUR PRODUCTS
      ===================================================== */}

      <section className="product-quality">

        <div className="product-quality-heading">

          <span className="product-section-label">
            WHY MANBA AL RAYYAN
          </span>

          <h2>
            Products backed
            <br />
            by <span>experience.</span>
          </h2>

        </div>


        <div className="product-quality-list">

          <div>
            <span>01</span>
            <h3>Application Focused</h3>
            <p>
              Products selected and supplied according to the
              requirements of each project.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Technical Support</h3>
            <p>
              Technical assistance supporting installation,
              commissioning and operation.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Complete Solutions</h3>
            <p>
              Equipment, systems and consumables can be integrated
              into complete treatment solutions.
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="product-cta">

        <div className="product-cta-number">
          02
        </div>

        <div className="product-cta-content">

          <span>NEED THE RIGHT EQUIPMENT?</span>

          <h2>
            Tell us what
            <br />
            <span>you need.</span>
          </h2>

        </div>

        <a
          href="mailto:martenquiries@gmail.com"
          className="product-cta-button"
        >
          Send an enquiry
          <span>↗</span>
        </a>

      </section>

    </main>
  );
}

export default Product;
