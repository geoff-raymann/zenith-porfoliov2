import Link from 'next/link'
import { LazyLoad } from '@/components/ui/LazyLoad'

interface NotFoundProps {
  title?: string
  message?: string
  showIllustration?: boolean
}

export function NotFound({ 
  title = "Page Not Found", 
  message = "The page you're looking for doesn't exist or has been moved.",
  showIllustration = true 
}: NotFoundProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md mx-auto text-center">
        <LazyLoad delay={0.1} yOffset={30}>
          {showIllustration && (
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900 dark:to-blue-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl">🔍</span>
              </div>
            </div>
          )}
        </LazyLoad>

        <LazyLoad delay={0.3} yOffset={20}>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h1>
        </LazyLoad>

        <LazyLoad delay={0.5} yOffset={20}>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {message}
          </p>
        </LazyLoad>

        <LazyLoad delay={0.7} yOffset={20}>
          <div className="space-y-3">
            <Link 
              href="/"
              className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
            >
              Go Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="block w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-300 font-medium"
            >
              Go Back
            </button>
          </div>
        </LazyLoad>
      </div>
    </div>
  )
}