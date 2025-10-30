import { client } from '@/lib/sanity/client'
import { allProjectsQuery } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/client'
import Image from 'next/image'
import Link from 'next/link'
import { TechIcon } from '@/components/ui/TechIcon'
import { LazyLoad } from '@/components/ui/LazyLoad'
import { ProjectSkeleton } from '@/components/ui/ProjectSkeleton'

async function getProjects() {
  try {
    const projects = await client.fetch(
      allProjectsQuery, 
      {}, 
      { 
        next: { 
          tags: ['projects', 'homepage'] 
        } 
      }
    )
    return projects
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="min-h-screen py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header with Lazy Load */}
        <LazyLoad delay={0.1} yOffset={30}>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A collection of data science, AI, and software engineering projects
            </p>
          </div>
        </LazyLoad>

        {/* Projects Grid with Staggered Lazy Load */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects && projects.length > 0 ? (
            projects.map((project: any, index: number) => (
              <LazyLoad 
                key={project._id} 
                delay={0.2 + (index * 0.1)}
                yOffset={40}
                duration={0.6}
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border border-gray-200 dark:border-gray-700 group">
                  {project.mainImage && (
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={urlFor(project.mainImage).width(600).height(300).url()}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.summary}
                    </p>
                    
                    {/* Technology Icons Grid with Lazy Load */}
                    {project.tech && project.tech.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                          Built With:
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((techIconUrl: string, techIndex: number) => (
                            <LazyLoad 
                              key={techIndex} 
                              delay={0.4 + (techIndex * 0.05)}
                              yOffset={20}
                              duration={0.4}
                            >
                              <TechIcon
                                iconUrl={techIconUrl}
                                alt={getTechNameFromUrl(techIconUrl)}
                                size="lg"
                              />
                            </LazyLoad>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex space-x-4 mt-6">
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-sm font-medium flex items-center space-x-2 hover:scale-105 transform"
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
                          className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300 text-sm font-medium flex items-center space-x-2 hover:scale-105 transform"
                        >
                          <span>💻</span>
                          <span>View Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </LazyLoad>
            ))
          ) : (
            // Show skeleton loaders when no projects
            [...Array(4)].map((_, index) => (
              <LazyLoad key={index} delay={0.2 + (index * 0.1)} yOffset={40}>
                <ProjectSkeleton />
              </LazyLoad>
            ))
          )}
        </div>

        {/* Empty State */}
        {projects.length === 0 && !projects.loading && (
          <LazyLoad delay={0.5} yOffset={30}>
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-3xl">📁</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
                No projects yet.
              </p>
              <Link 
                href="https://your-studio.sanity.studio" 
                target="_blank"
                className="inline-block text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium"
              >
                Add projects in Sanity Studio ›
              </Link>
            </div>
          </LazyLoad>
        )}

        {/* Back to Home */}
        <LazyLoad delay={0.6} yOffset={20}>
          <div className="text-center mt-12">
            <Link 
              href="/" 
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-300 inline-block hover:scale-105 transform"
            >
              ← Back to Home
            </Link>
          </div>
        </LazyLoad>
      </div>
    </div>
  )
}

// Helper function
function getTechNameFromUrl(url: string): string {
  try {
    const match = url.match(/devicon\/icons\/([^\/]+)\//)
    if (match && match[1]) {
      return match[1].charAt(0).toUpperCase() + match[1].slice(1)
    }
    
    const filename = url.split('/').pop()?.replace('.svg', '').replace('-original', '').replace('-plain', '')
    if (filename) {
      return filename.charAt(0).toUpperCase() + filename.slice(1)
    }
    
    return 'Technology'
  } catch {
    return 'Technology'
  }
}

export const revalidate = 300