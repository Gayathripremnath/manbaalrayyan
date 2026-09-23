import { motion } from "framer-motion";
import "./Product.css";

import roPlant from "../assets/RO Plant 1.jpg";
import mediaFilters from "../assets/media-filters.webp";
import treatmentPlant from "../assets/treatment-plant.webp";
import equipment from "../assets/Pump installation.jpeg";
import consumables from "../assets/Pretreatment.jpg";
import dwaSystem from "../assets/RO.jpg";

const products = [
  {
    number: "01",
    category: "RO SYSTEMS",
    title: "Reverse Osmosis Systems",
    description:
      "Complete RO plants and key components for industrial, commercial and medical water treatment.",
    image: roPlant,
    tags: ["RO plants", "Membranes", "Pressure tubes"],
  },
  {
    number: "02",
    category: "WATER TREATMENT",
    title: "Media Filtration Systems",
    description:
      "Pre-treatment systems that protect downstream equipment and improve feed-water quality.",
    image: mediaFilters,
    tags: ["Sand & carbon filters", "Multiport valves", "Softeners"],
  },
  {
    number: "03",
    category: "WASTEWATER",
    title: "STP Solutions",
    description:
      "Packaged modular and conventional sewage treatment plants for project-specific wastewater flows.",
    image: treatmentPlant,
    tags: ["Modular STP", "Conventional STP", "Wastewater"],
  },
  {
    number: "04",
    category: "EQUIPMENT",
    title: "Water Treatment Equipment",
    description:
      "Plant equipment and process components for water treatment, wastewater treatment and disinfection.",
    image: equipment,
    tags: ["Pumps", "Micron filters & MCF housings", "Instruments & analysers", "Valves", "Electrochlorination", "UV systems", "Anoxic mixers"],
  },
  {
    number: "05",
    category: "CONSUMABLES",
    title: "Chemicals & Consumables",
    description:
      "Process chemicals and filter media for reliable plant operation, cleaning and odour control.",
    image: consumables,
    tags: ["Antiscalants & biocides", "Cleaning & cooling tower chemicals", "Odor control systems & chemicals", "Filter media"],
  },
];

const dealershipProducts = [
  { brand: "DWA (Germany)", products: "RDU RO systems and medical water treatment systems" },
  { brand: "SWAM Blowers (India)", products: "Blowers for treatment plant aeration and process use" },
  { brand: "GOPANI Filtrations (India)", products: "Filter housings, cartridge filters and filtration systems" },
  { brand: "SuperAqua Electrolysis (Japan)", products: "Electrolysis systems for alkaline water" },
  { brand: "HAIWELL Automation (Hong Kong)", products: "Automation and control systems" },
  { brand: "WaterEquip (France)", products: "Screens and degritter systems" },
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
            src={roPlant}
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
            src={dwaSystem}
            alt="Reverse osmosis system for specialist water treatment"
          />

          <div className="dwa-image-badge">
            <span>AUTHORIZED</span>
            <strong>DWA</strong>
          </div>

        </div>


        <div className="dwa-content">

          <span className="product-section-label">
            DEALERSHIP PRODUCTS
          </span>

          <h2>
            Specialist brands
            <br />
            for <span>complete solutions.</span>
          </h2>

          <p>
            Our dealership portfolio brings specialist equipment and
            technology from Germany, India, Japan, Hong Kong and France
            to water and wastewater projects in Oman.
          </p>


          <div className="dwa-product-list">

            {dealershipProducts.map((item, index) => (

              <div
                className="dwa-product-item"
                key={item}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <strong>{item.brand}</strong>
                  <small>{item.products}</small>
                </div>

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
