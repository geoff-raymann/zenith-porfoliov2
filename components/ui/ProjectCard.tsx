import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  project: {
    _id: string
    title: string
    slug: {
      current: string
    }
    summary: string
    mainImage?: any
    tech: string[] // Array of icon URLs
    demoUrl?: string
    repoUrl?: string
    featured: boolean
  }
}

// Default fallback icon
const DEFAULT_TECH_ICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border border-gray-200 dark:border-gray-700">
      {project.mainImage && (
        <div className="relative h-48">
          <Image
            src={project.mainImage}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.summary}
        </p>
        
        {/* Technology Icons Grid */}
        {project.tech && project.tech.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((techIconUrl, index) => (
                <div
                  key={index}
                  className="relative group"
                  title={getTechNameFromUrl(techIconUrl)}
                >
                  <div className="w-10 h-10 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">
                    <Image
                      src={techIconUrl}
                      alt={getTechNameFromUrl(techIconUrl)}
                      width={24}
                      height={24}
                      className="rounded-sm"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = DEFAULT_TECH_ICON
                      }}
                    />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                    {getTechNameFromUrl(techIconUrl)}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex space-x-3">
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium flex items-center space-x-1"
            >
              <span>🌐</span>
              <span>Live Demo</span>
            </a>
          )}
          {project.repoUrl && (
            <a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-sm font-medium flex items-center space-x-1"
            >
              <span>💻</span>
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

// Helper function to extract technology name from URL
function getTechNameFromUrl(url: string): string {
  try {
    // Extract from Devicon URL pattern: .../icons/react/react-original.svg
    const match = url.match(/devicon\/icons\/([^\/]+)\//)
    if (match && match[1]) {
      return match[1].charAt(0).toUpperCase() + match[1].slice(1)
    }
    
    // Extract from other common patterns
    const filename = url.split('/').pop()?.replace('.svg', '').replace('-original', '').replace('-plain', '')
    if (filename) {
      return filename.charAt(0).toUpperCase() + filename.slice(1)
    }
    
    return 'Technology'
  } catch {
    return 'Technology'
  }
}