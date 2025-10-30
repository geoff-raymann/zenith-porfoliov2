import { client } from '@/lib/sanity/client'
import { allProjectsQuery } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/client'
import Image from 'next/image'
import Link from 'next/link'
import { TechIcon } from '@/components/ui/TechIcon'

async function getProjects() {
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
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="min-h-screen py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of data science, AI, and software engineering projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project: any) => (
            <div 
              key={project._id} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border border-gray-200 dark:border-gray-700"
            >
              {project.mainImage && (
                <div className="relative h-64">
                  <Image
                    src={urlFor(project.mainImage).width(600).height(300).url()}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.summary}
                </p>
                
                {/* Technology Icons Grid */}
                {project.tech && project.tech.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Built With:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((techIconUrl: string, index: number) => (
                        <TechIcon
                          key={index}
                          iconUrl={techIconUrl}
                          alt={getTechNameFromUrl(techIconUrl)}
                          size="lg"
                        />
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
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-sm font-medium flex items-center space-x-2"
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
                      className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300 text-sm font-medium flex items-center space-x-2"
                    >
                      <span>💻</span>
                      <span>View Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects yet. Add some projects in Sanity Studio!
            </p>
          </div>
        )}

        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-300 inline-block"
          >
            ← Back to Home
          </Link>
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

export const revalidate = 300