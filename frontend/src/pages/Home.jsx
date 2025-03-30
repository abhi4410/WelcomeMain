import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  // Animation refs for scroll-based animations
  const { ref: collectionsRef, inView: collectionsInView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  const { ref: sellersRef, inView: sellersInView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  const { ref: policyRef, inView: policyInView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Hero isScrolled={isScrolled} />
      
      <div ref={collectionsRef}>
        <LatestCollection inView={collectionsInView} />
      </div>
      
      <div ref={sellersRef}>
        <BestSeller inView={sellersInView} />
      </div>
      
      <div ref={policyRef}>
        <OurPolicy inView={policyInView} />
      </div>
    </div>
  )
}

export default Home
