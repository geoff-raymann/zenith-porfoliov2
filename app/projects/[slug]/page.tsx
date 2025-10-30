import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity/client'
import { urlFor } from '@/lib/sanity/client'
import Image from 'next/image'
import Link from 'next/link'
import { LazyLoad } from '@/components/ui/LazyLoad'
import { TechIcon } from '@/components/ui/TechIcon'

async function getProject(slug: string) {
  try {
    const project = await client.fetch(
      `*[_type == "project" && slug.current == $slug][0]{
        _id,
        title,
        slug,
        summary,
        description,
        mainImage,
        tech,
        demoUrl,
        repoUrl,
        featured,
        publishedAt
      }`,
      { slug }
    )
    
    if (!project) {
      notFound() // This will trigger the 404 page
    }
    
    return project
  } catch (error) {
    console.error('Error fetching project:', error)
    notFound()
  }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug)

  return (
    <div className="min-h-screen py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <LazyLoad delay={0.1} yOffset={20}>
          <div className="mb-8">
            <Link 
              href="/projects" 
              className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
            >
              <span>←</span>
              <span>Back to Projects</span>
            </Link>
          </div>
        </LazyLoad>

        {/* Project Header */}
        <LazyLoad delay={0.2} yOffset={30}>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {project.summary}
            </p>
          </div>
        </LazyLoad>

        {/* Project Image */}
        {project.mainImage && (
          <LazyLoad delay={0.3} yOffset={40}>
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={urlFor(project.mainImage).width(1200).height(600).url()}
                alt={project.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </LazyLoad>
        )}

        {/* Technology Stack */}
        {project.tech && project.tech.length > 0 && (
          <LazyLoad delay={0.4} yOffset={30}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Technology Stack
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {project.tech.map((techIconUrl: string, index: number) => (
                  <LazyLoad key={index} delay={0.5 + (index * 0.05)} yOffset={20}>
                    <TechIcon
                      iconUrl={techIconUrl}
                      alt={getTechNameFromUrl(techIconUrl)}
                      size="lg"
                    />
                  </LazyLoad>
                ))}
              </div>
            </div>
          </LazyLoad>
        )}

        {/* Project Description */}
        {project.description && (
          <LazyLoad delay={0.6} yOffset={30}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                About This Project
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>
            </div>
          </LazyLoad>
        )}

        {/* Action Buttons */}
        <LazyLoad delay={0.8} yOffset={30}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition duration-300 font-medium flex items-center space-x-2 hover:scale-105 transform"
              >
                <span>🌐</span>
                <span>View Live Demo</span>
              </a>
            )}
            {project.repoUrl && (
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-300 font-medium flex items-center space-x-2 hover:scale-105 transform"
              >
                <span>💻</span>
                <span>View Source Code</span>
              </a>
            )}
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

export async function generateStaticParams() {
  const projects = await client.fetch(
    `*[_type == "project"]{ slug }`
  )
  
  return projects.map((project: any) => ({
    slug: project.slug.current,
  }))
}

export const revalidate = 300