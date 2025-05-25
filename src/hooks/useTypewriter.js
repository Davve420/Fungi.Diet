import { useState, useEffect } from 'react'

const useTypewriter = (text, speed = 100, key = 0) => {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const completeTyping = () => {
    if (text) {
      setDisplayText(text)
      setIsTyping(false)
      setCurrentIndex(text.length)
    }
  }

  useEffect(() => {
    if (!text) {
      setDisplayText('')
      setIsTyping(false)
      setCurrentIndex(0)
      return
    }

    setIsTyping(true)
    setCurrentIndex(0)
    setDisplayText('')

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (prevIndex >= text.length) {
          clearInterval(interval)
          setIsTyping(false)
          return prevIndex
        }
        setDisplayText(text.slice(0, prevIndex + 1))
        return prevIndex + 1
      })
    }, speed)

    return () => {
      clearInterval(interval)
    }
  }, [text, speed, key])

  return { displayText, isTyping, completeTyping }
}

export default useTypewriter 