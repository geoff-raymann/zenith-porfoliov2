'use client'

import Image from 'next/image'
import { useState } from 'react'

interface TechIconProps {
  iconUrl: string
  alt: string
  size?: 'sm' | 'md' | 'lg'
}

const DEFAULT_ICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'

export function TechIcon({ iconUrl, alt, size = 'md' }: TechIconProps) {
  const [imgSrc, setImgSrc] = useState(iconUrl)

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const imageSizes = {
    sm: 16,
    md: 20,
    lg: 28
  }

  return (
    <div className="relative group">
      <div className={`${sizeClasses[size]} bg-white dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110`}>
        <Image
          src={imgSrc}
          alt={alt}
          width={imageSizes[size]}
          height={imageSizes[size]}
          className="rounded-sm"
          onError={() => setImgSrc(DEFAULT_ICON)}
        />
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
        {alt}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  )
}