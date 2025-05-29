import { motion } from 'framer-motion'
import { useState } from 'react'
import './Commission.css'

const Commission = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    // Netlify hanterar formuläret automatiskt
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="commission-page">
        <motion.div 
          className="thank-you-message"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Tack för din förfrågan! 🎨</h1>
          <p>Vi har mottagit din commission-förfrågan och kommer att kontakta dig inom 2-3 arbetsdagar.</p>
          <p>Ha en fantastisk dag!</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="commission-page">
      <motion.div 
        className="commission-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Beställ Unikt Konstverk</h1>
        <p className="commission-subtitle">
          Låt oss skapa något speciellt tillsammans! Berätta om din vision så hjälper vi dig att förverkliga den.
        </p>
      </motion.div>

      <motion.form 
        name="commission-request" 
        method="POST" 
        data-netlify="true"
        className="commission-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <input type="hidden" name="form-name" value="commission-request" />
        
        {/* Kontaktinformation */}
        <div className="form-section">
          <h3>Kontaktinformation</h3>
          <div className="form-row">
            <input 
              name="name" 
              type="text"
              placeholder="Ditt namn" 
              required 
              className="form-input"
            />
            <input 
              name="email" 
              type="email" 
              placeholder="Din email" 
              required 
              className="form-input"
            />
          </div>
          <input 
            name="phone" 
            type="tel"
            placeholder="Telefonnummer (valfritt)" 
            className="form-input full-width"
          />
        </div>

        {/* Projektdetaljer */}
        <div className="form-section">
          <h3>Projektdetaljer</h3>
          <select name="project-type" required className="form-select">
            <option value="">Välj typ av konstverk</option>
            <option value="painting">Målning</option>
            <option value="jewelry">Smycke</option>
            <option value="bag">Väska</option>
            <option value="sculpture">Skulptur</option>
            <option value="other">Annat</option>
          </select>
          
          <textarea 
            name="description" 
            placeholder="Beskriv din vision i detalj. Vad vill du att konstverket ska uttrycka? Finns det specifika element du vill ha med?"
            required 
            className="form-textarea"
            rows="5"
          />
          
          <div className="form-row">
            <input 
              name="budget" 
              type="text"
              placeholder="Budget (ungefär)" 
              className="form-input"
            />
            <input 
              name="timeline" 
              type="text"
              placeholder="När behöver du det klart?" 
              className="form-input"
            />
          </div>
        </div>

        {/* Stil och inspiration */}
        <div className="form-section">
          <h3>Stil & Inspiration</h3>
          <textarea 
            name="style-preferences" 
            placeholder="Beskriv din stilpreferens: färger, känsla, tema, storlek..."
            className="form-textarea"
            rows="4"
          />
          
          <div className="file-upload">
            <label htmlFor="inspiration-images" className="file-label">
              📎 Ladda upp inspirationsbilder (valfritt)
            </label>
            <input 
              id="inspiration-images"
              name="inspiration" 
              type="file" 
              accept="image/*" 
              multiple 
              className="file-input"
            />
          </div>
        </div>

        {/* Ytterligare information */}
        <div className="form-section">
          <h3>Övrigt</h3>
          <textarea 
            name="additional-info" 
            placeholder="Finns det något annat du vill att vi ska veta? Speciella önskemål, allergier (för smycken), etc."
            className="form-textarea"
            rows="3"
          />
        </div>

        <motion.button 
          type="submit" 
          className="submit-button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Skicka Förfrågan 🎨
        </motion.button>
      </motion.form>
    </div>
  )
}

export default Commission 