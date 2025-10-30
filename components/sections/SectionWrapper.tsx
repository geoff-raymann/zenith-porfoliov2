'use client'

import { LazyLoad } from '@/components/ui/LazyLoad'
import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
  yOffset?: number
}

export function SectionWrapper({ 
  children, 
  className = '',
  delay = 0,
  yOffset = 40 
}: SectionWrapperProps) {
  return (
    <LazyLoad 
      delay={delay}
      yOffset={yOffset}
      duration={0.8}
      className={className}
      triggerOnce={true}
      threshold={0.05}
    >
      {children}
    </LazyLoad>
  )
}