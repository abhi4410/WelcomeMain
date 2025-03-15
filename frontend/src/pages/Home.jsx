import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'

const Home = () => {
  // Keep the isScrolled state here to pass to App/Layout component
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Animation refs for scroll-based animations
  const { ref: collectionsRef, inView: collectionsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: sellersRef, inView: sellersInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: policyRef, inView: policyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: newsletterRef, inView: newsletterInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden" style={{ marginTop: '0px', position: 'relative' }}>
      {/* Hero section - ensure it doesn't cover the navbar */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
      </div>
      
      {/* Content sections */}
      <div ref={collectionsRef} style={{ position: 'relative', zIndex: 1 }}>
        <LatestCollection inView={collectionsInView} />
      </div>
      
      <div ref={sellersRef} style={{ position: 'relative', zIndex: 1 }}>
        <BestSeller inView={sellersInView} />
      </div>
      
      <div ref={policyRef} style={{ position: 'relative', zIndex: 1 }}>
        <OurPolicy inView={policyInView} />
      </div>
    </div>
  )
}

export default Home
