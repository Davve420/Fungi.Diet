import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import useTypewriter from '../hooks/useTypewriter'
import { rabbit, logo } from '../assets/images'
import './NavBar.css'

const NavBar = ({ isRabbitAnimating }) => {
  const navigate = useNavigate()
  const [showPopup, setShowPopup] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)
  const [showCornerRabbit, setShowCornerRabbit] = useState(true)
  const [shouldType, setShouldType] = useState(false)
  const [showContinueText, setShowContinueText] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [key, setKey] = useState(0)
  const [showRabbitComment, setShowRabbitComment] = useState(false)
  const [shouldFadeOut, setShouldFadeOut] = useState(false)
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false)
  
  const messages = [
    "Hej! Mitt namn är Fungi Rabbit, jag är här för att hjälpa dig!",
    "Vill du ha hjälp med att:"
  ]

  const { displayText, isTyping, completeTyping } = useTypewriter(shouldType ? messages[currentMessageIndex] : '', 100, key)
  const { displayText: commentText, isTyping: isCommentTyping, completeTyping: completeCommentTyping } = useTypewriter(showRabbitComment ? "Detta är min personliga favorit. Vad tycker du?" : '', 100)
  const { displayText: welcomeText, isTyping: isWelcomeTyping } = useTypewriter(showWelcomeMessage ? "Välkommen till Fungi Diet! Klicka på mig om du behöver hjälp." : '', 80)

  useEffect(() => {
    if (!isTyping && shouldType) {
      const timer = setTimeout(() => {
        setShowContinueText(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isTyping, shouldType])

  useEffect(() => {
    if (!isCommentTyping && showRabbitComment) {
      const fadeTimer = setTimeout(() => {
        setShouldFadeOut(true)
        const removeTimer = setTimeout(() => {
          setShowRabbitComment(false)
          setShouldFadeOut(false)
        }, 500)
        return () => clearTimeout(removeTimer)
      }, 5000)
      return () => clearTimeout(fadeTimer)
    }
  }, [isCommentTyping, showRabbitComment])

  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setShowWelcomeMessage(true)
    }, 1500)

    return () => clearTimeout(welcomeTimer)
  }, [])

  useEffect(() => {
    if (!isWelcomeTyping && showWelcomeMessage) {
      const hideTimer = setTimeout(() => {
        setShowWelcomeMessage(false)
      }, 4000)
      return () => clearTimeout(hideTimer)
    }
  }, [isWelcomeTyping, showWelcomeMessage])

  const resetPopup = () => {
    setShowPopup(false)
    setShowCornerRabbit(true)
    setCurrentMessageIndex(0)
    setShowContinueText(false)
    setShouldType(false)
    setKey(prev => prev + 1)
  }

  const handleRabbitClick = () => {
    setIsSpinning(true)
    resetPopup()
    setShowRabbitComment(false)
    setShowWelcomeMessage(false) // Dölj välkomstmeddelandet
    const popupTimer = setTimeout(() => {
      setShowPopup(true)
      setIsSpinning(false)
      setShowCornerRabbit(false)
      setCurrentMessageIndex(0)
      setShowContinueText(false)
      const typeTimer = setTimeout(() => {
        setShouldType(true)
      }, 100)
      return () => clearTimeout(typeTimer)
    }, 500)
    return () => clearTimeout(popupTimer)
  }

  const handlePopupClick = () => {
    if (isTyping) {
      completeTyping()
      return
    }
    
    if (currentMessageIndex < messages.length - 1) {
      setCurrentMessageIndex(prev => prev + 1)
      setShowContinueText(false)
    } else {
      handleClosePopup()
    }
  }

  const handleScreenClick = () => {
    if (showRabbitComment && !isCommentTyping) {
      setShowRabbitComment(false)
    }
    if (showWelcomeMessage && !isWelcomeTyping) {
      setShowWelcomeMessage(false)
    }
  }

  const handleOptionClick = (option) => {
    if (option === 'choose') {
      navigate('/product/2')
      setShowRabbitComment(true)
    }
    handleClosePopup()
  }

  const handleClosePopup = () => {
    resetPopup()
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} alt="Fungi.Diet Logo" className="nav-logo" />
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/commission" className="nav-link">Commission</Link>
          </div>
          <div className="rabbit-container" onClick={handleScreenClick}>
            <AnimatePresence>
              {showCornerRabbit && !isRabbitAnimating && (
                <motion.img 
                  src={rabbit} 
                  alt="Fungi.Diet Rabbit" 
                  className="rabbit-icon"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleRabbitClick}
                  style={{ cursor: 'pointer' }}
                  animate={isSpinning ? { rotate: 360, opacity: 0 } : { rotate: 0, opacity: 1 }}
                  initial={{ rotate: -360, opacity: 0 }}
                  exit={{ rotate: 360, opacity: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: "easeInOut",
                    rotate: { duration: 0.8 },
                    scale: { duration: 0.2 }
                  }}
                />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {showWelcomeMessage && (
                <motion.div 
                  className="rabbit-comment welcome-comment"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ 
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                >
                  <div className={`typewriter-text ${isWelcomeTyping ? 'typing' : ''}`}>
                    {welcomeText}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {showRabbitComment && (
                <motion.div 
                  className="rabbit-comment"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ 
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                >
                  <div className={`typewriter-text ${isCommentTyping ? 'typing' : ''}`}>
                    {commentText}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {showPopup && (
          <motion.div 
            className="rabbit-popup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handlePopupClick}
          >
            <div className="popup-content">
              <button className="close-button" onClick={handleClosePopup}>
                ×
              </button>
              <motion.img 
                src={rabbit} 
                alt="Fungi.Diet Rabbit"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
              <div className={`typewriter-text ${isTyping ? 'typing' : ''}`}>
                {displayText}
              </div>
              {showContinueText && currentMessageIndex === 0 && (
                <motion.p 
                  className="continue-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ duration: 0.5 }}
                >
                  Klicka för att gå vidare
                </motion.p>
              )}
              {!isTyping && currentMessageIndex === 1 && (
                <motion.div 
                  className="option-buttons"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <button onClick={() => handleOptionClick('choose')}>
                    välja något
                  </button>
                  <button onClick={() => handleOptionClick('order')}>
                    din order
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavBar
