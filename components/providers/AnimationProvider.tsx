'use client'

import { useEffect, useRef } from 'react'

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const initialized = useRef(false)

  useEffect(() => {
    // Ensure page content is always visible
    const pageContent = document.querySelector('.page-content') as HTMLElement
    if (pageContent) {
      pageContent.style.opacity = '1'
      pageContent.style.transform = 'translateY(0)'
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion || initialized.current) {
      return
    }

    initialized.current = true

    // Dynamically import animation libraries only when needed
    const initializeAnimations = async () => {
      try {
        const [{ gsap }, { ScrollTrigger }, Lenis] = await Promise.all([
          import('gsap'),
          import('gsap/ScrollTrigger'),
          import('@studio-freight/lenis')
        ])

        // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger)

        // Initialize Lenis smooth scrolling
        const lenis = new Lenis.default({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          lerp: 0.1,
          infinite: false,
        })

        // Lenis scroll handler
        const raf = (time: number) => {
          lenis.raf(time)
          ScrollTrigger.update()
          requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        // Setup basic scroll animations
        const setupScrollAnimations = () => {
          // Fade in sections
          gsap.utils.toArray('.animate-section').forEach((section: any) => {
            gsap.fromTo(section, 
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: section,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse'
                }
              }
            )
          })

          // Stagger animations for cards
          gsap.utils.toArray('.animate-cards').forEach((container: any) => {
            const cards = container.querySelectorAll('.card-item')
            if (cards.length > 0) {
              gsap.fromTo(cards,
                { opacity: 0, y: 20 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  stagger: 0.1,
                  ease: 'power2.out',
                  scrollTrigger: {
                    trigger: container,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                  }
                }
              )
            }
          })

          // Scale on scroll
          gsap.utils.toArray('.scale-on-scroll').forEach((element: any) => {
            gsap.fromTo(element, 
              { scale: 0.95, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: element,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse'
                }
              }
            )
          })
        }

        // Setup entrance animation
        const setupEntrance = () => {
          const tl = gsap.timeline()
          
          // Animate navigation items
          const navItems = document.querySelectorAll('.nav-item')
          if (navItems.length > 0) {
            tl.fromTo(navItems, 
              { opacity: 0, y: -10 },
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out'
              }
            )
          }

          // Animate hero elements
          const heroElements = document.querySelectorAll('.hero-element')
          if (heroElements.length > 0) {
            tl.fromTo(heroElements,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out'
              },
              '-=0.3'
            )
          }
        }

        // Initialize animations with a small delay
        setTimeout(() => {
          setupEntrance()
          setupScrollAnimations()
        }, 300)

        // Cleanup function
        return () => {
          lenis.destroy()
          ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }

      } catch (error) {
        console.warn('Animation libraries failed to load:', error)
        // Ensure all elements are visible even if animations fail
        const animatedElements = document.querySelectorAll('.animate-section, .card-item, .scale-on-scroll, .hero-element, .nav-item')
        animatedElements.forEach((el: any) => {
          el.style.opacity = '1'
          el.style.transform = 'none'
        })
      }
    }

    // Start animation initialization after a brief delay
    const timer = setTimeout(initializeAnimations, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="page-content" style={{ opacity: 1, transform: 'translateY(0)' }}>
      {children}
    </div>
  )
} 