import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1>Om Fungi.Diet</h1>
          <p className="hero-subtitle">Upptäck naturens skatter genom konst och design</p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="story-content"
        >
          <h2>Vår Historia</h2>
          <p>
            Fungi.Diet föddes ur en passion för naturens underverk och en vilja att 
            skapa unika konstverk som hyllar svampens mystik och skönhet. Varje 
            skapelse är en hyllning till naturens mångfald och en inbjudan till att 
            upptäcka dess hemligheter.
          </p>
        </motion.div>
      </section>

      {/* Creator Section */}
      <section className="about-creator">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="creator-content"
        >
          <div className="creator-image">
            <img src="/src/assets/images/FungiFace.png" alt="Moa - Skaparen av Fungi.Diet" />
          </div>
          <div className="creator-info">
            <h2>Moa</h2>
            <p className="creator-title">Skaparen av Fungi.Diet</p>
            <p>
              Med en djup kärlek till naturen och en kreativ själ har Moa skapat 
              Fungi.Diet som en plats där konst möter naturens underverk. Varje 
              skapelse är en del av en större berättelse om vår koppling till 
              naturen och dess gåvor.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="about-contact">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-content"
        >
          <h2>Kontakta Oss</h2>
          <p>
            Har du frågor eller vill du veta mer om Fungi.Diet? 
            Tveka inte att höra av dig!
          </p>
          <div className="contact-links">
            <a href="mailto:contact@fungi.diet" className="contact-link">Email</a>
            <a href="https://instagram.com/fungi.diet" className="contact-link">Instagram</a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default About
  