'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface LazyLoadProps {
  children: ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  className?: string
  triggerOnce?: boolean
  threshold?: number
}

export function LazyLoad({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  yOffset = 30, 
  className = '',
  triggerOnce = true,
  threshold = 0.1
}: LazyLoadProps) {
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
    rootMargin: '-50px 0px',
  })

  const variants = {
    hidden: { 
      opacity: 0, 
      y: yOffset,
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}