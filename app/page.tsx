import { client } from '@/lib/sanity/client'
import { featuredProjectsQuery, bioQuery, recommendationsQuery } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/client'
import Image from 'next/image'
import Link from 'next/link'

async function getData() {
  const [projects, bio, recommendations] = await Promise.all([
    client.fetch(featuredProjectsQuery, {}, { 
      next: { 
        tags: ['homepage', 'projects'] 
      } 
    }),
    client.fetch(bioQuery, {}, { 
      next: { 
        tags: ['homepage', 'bio'] 
      } 
    }),
    client.fetch(recommendationsQuery, {}, { 
      next: { 
        tags: ['homepage', 'recommendations'] 
      } 
    }),
  ])
  return { projects, bio, recommendations }
}

export default async function Home() {
  const { projects, bio, recommendations } = await getData()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center max-w-4xl mx-auto">
          {bio?.profileImage && (
            <div className="mb-8">
              <Image
                src={urlFor(bio.profileImage).width(200).height(200).url()}
                alt={bio.name}
                width={200}
                height={200}
                className="rounded-full mx-auto w-32 h-32 object-cover border-4 border-white dark:border-gray-700 shadow-lg"
              />
            </div>
          )}
          
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {bio?.name || "Zenith Portfolio"}
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            {bio?.tagline || "Data Scientist & AI Engineer"}
          </p>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            {bio?.description || "Building intelligent solutions with data and machine learning"}
          </p>
          
          <div className="space-x-4">
            <Link 
              href="/projects" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 inline-block"
            >
              View Projects
            </Link>
            <Link 
              href="/contact" 
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-300 inline-block"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {projects && projects.length > 0 && (
        <section className="py-20 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              Showcasing my latest data science and AI engineering work
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project: any) => (
                <div 
                  key={project._id} 
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                >
                  {project.mainImage && (
                    <div className="relative h-48">
                      <Image
                        src={urlFor(project.mainImage).width(400).height(200).url()}
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
                    
                    {project.tech && project.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 3).map((tech: string) => (
                          <span 
                            key={tech} 
                            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex space-x-3">
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.repoUrl && (
                        <a 
                          href={project.repoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-sm font-medium"
                        >
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/projects" 
                className="border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition duration-300 inline-block"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Recommendations Section */}
      {recommendations && recommendations.length > 0 && (
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              What People Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recommendations.slice(0, 2).map((rec: any) => (
                <div 
                  key={rec._id} 
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg"
                >
                  <p className="text-gray-600 dark:text-gray-300 italic mb-6 text-lg">
                    "{rec.quote}"
                  </p>
                  
                  <div className="flex items-center">
                    {rec.avatar && (
                      <Image
                        src={urlFor(rec.avatar).width(60).height(60).url()}
                        alt={rec.authorName}
                        width={60}
                        height={60}
                        className="rounded-full mr-4"
                      />
                    )}
                    
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {rec.authorName}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {rec.position} at {rec.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}