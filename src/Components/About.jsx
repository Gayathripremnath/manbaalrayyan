import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('vision');
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.2,
        ease: 'easeOut',
      },
    }),
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <div className="about-wrapper">
      {/* Header Section */}
      <motion.section
        className="about-header"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div className="header-label" variants={itemVariants}>
          <span className="label-accent">•</span>
          <span>ABOUT US</span>
        </motion.div>
        <motion.h1 className="about-title" variants={itemVariants}>
          About Manba Al Rayyan
        </motion.h1>
      </motion.section>

      {/* Main Content */}
      <motion.section
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Left Side - Images */}
        <motion.div className="about-images" variants={slideInVariants}>
          <div className="image-grid">
            <motion.div
              className="image-box large"
              variants={imageVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <img src="/api/placeholder/250/200" alt="Oil and gas industry" />
              <div className="image-overlay">
                <span>Our Operations</span>
              </div>
            </motion.div>
            <motion.div
              className="image-box medium"
              variants={imageVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <img src="/api/placeholder/200/180" alt="Industrial equipment" />
              <div className="image-overlay">
                <span>Equipment Supply</span>
              </div>
            </motion.div>
            <motion.div
              className="image-box medium"
              variants={imageVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <img src="/api/placeholder/200/180" alt="Manufacturing" />
              <div className="image-overlay">
                <span>Manufacturing</span>
              </div>
            </motion.div>
            <motion.div
              className="image-box small"
              variants={imageVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <img src="/api/placeholder/180/150" alt="Industrial site" />
              <div className="image-overlay">
                <span>Site Operations</span>
              </div>
            </motion.div>
            <motion.div
              className="image-box small"
              variants={imageVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <img src="/api/placeholder/180/150" alt="Project management" />
              <div className="image-overlay">
                <span>Project Management</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div className="about-text" variants={slideInRightVariants}>
          <motion.p className="about-description" variants={itemVariants}>
            Our experienced team along with our wide range of stocks and our liaisons with
            various approved and reputed manufacturers around the globe has enabled us to
            spread our wing all over the GCC countries in a short span of time. Today we have
            the capability to supply approved materials to regional companies through their
            approved vendors.
          </motion.p>

          {/* Statistics Cards */}
          <motion.div className="stats-container" variants={containerVariants}>
            <motion.div
              className="stat-card"
              custom={0}
              variants={statsVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="stat-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M12 28V14M20 28V10M28 28V18"
                    stroke="#3b5bdb"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="stat-content">
                <motion.div
                  className="stat-number"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  50+
                </motion.div>
                <p>Projects Supported</p>
              </div>
            </motion.div>

            <motion.div
              className="stat-card"
              custom={1}
              variants={statsVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="stat-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="8" stroke="#3b5bdb" strokeWidth="2" />
                  <path
                    d="M20 12V8M20 32V28M28 20H32M8 20H12"
                    stroke="#3b5bdb"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="stat-content">
                <motion.div
                  className="stat-number"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  $510m
                </motion.div>
                <p>Capital Invested</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Vision and Mission Section */}
          <motion.div className="vision-mission" variants={containerVariants}>
            <div className="tab-buttons">
              <motion.button
                className={`tab-btn ${activeTab === 'vision' ? 'active' : ''}`}
                onClick={() => setActiveTab('vision')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Vision
              </motion.button>
              <motion.button
                className={`tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
                onClick={() => setActiveTab('mission')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Mission
              </motion.button>
            </div>

            <motion.div
              className="tab-content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              key={activeTab}
            >
              {activeTab === 'vision' ? (
                <p>
                  Manba Al Rayyan's vision is to be an industry leader in manufacturing and supply of high
                  quality products in the oil and gas industry with benchmark in quality of stock of base
                  materials and contribute to sustainable development with a highly trained team of
                  experienced professionals.
                </p>
              ) : (
                <p>
                  Our mission is to deliver excellence through reliable sourcing, quality products, and
                  dependable partnerships. We commit to supporting our clients' success with practical
                  solutions and long-term value creation across all GCC markets.
                </p>
              )}
            </motion.div>
          </motion.div>

          {/* Read More Button */}
          <motion.button
            className="read-more-btn"
            onClick={() => setIsReadMoreOpen(!isReadMoreOpen)}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(59, 91, 219, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            variants={itemVariants}
          >
            Read More
            <motion.span
              animate={{ rotate: isReadMoreOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} />
            </motion.span>
          </motion.button>

          {/* Expanded Content */}
          <motion.div
            className="expanded-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isReadMoreOpen ? 1 : 0,
              height: isReadMoreOpen ? 'auto' : 0,
            }}
            transition={{ duration: 0.4 }}
          >
            <p>
              We work with the region's most recognized and trusted manufacturers to bring you
              products that meet the highest international standards. Our commitment to excellence
              ensures that every project receives the attention and resources it deserves, from
              initial planning through successful completion.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* CEO Section */}
      <motion.section
        className="ceo-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div className="ceo-content" variants={slideInVariants}>
          <motion.div
            className="ceo-avatar"
            variants={imageVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <div className="avatar-placeholder">
              <span>MB</span>
            </div>
          </motion.div>
          <motion.div className="ceo-info" variants={itemVariants}>
            <p className="ceo-title">CEO of Manba Al Rayyan</p>
            <p className="ceo-quote">
              "Excellence in supply and commitment to our partners' success."
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;
