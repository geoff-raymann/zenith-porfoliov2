import Link from 'next/link'
import { LazyLoad } from '@/components/ui/LazyLoad'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <LazyLoad delay={0.1} yOffset={30}>
          {/* Animated 404 Number */}
          <div className="relative mb-8">
            <h1 className="text-9xl sm:text-[12rem] font-bold text-gray-300 dark:text-gray-700 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-6xl sm:text-8xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                404
              </h2>
            </div>
          </div>
        </LazyLoad>

        <LazyLoad delay={0.3} yOffset={20}>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h3>
        </LazyLoad>

        <LazyLoad delay={0.5} yOffset={20}>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto leading-relaxed">
            Oops! The page you're looking for seems to have wandered off into the digital void. 
            Let's get you back on track.
          </p>
        </LazyLoad>

        <LazyLoad delay={0.7} yOffset={20}>
          {/* Animated Illustration */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48">
              {/* Floating elements */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce"></div>
              </div>
              <div className="absolute bottom-8 left-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg animate-pulse"></div>
              </div>
              <div className="absolute bottom-12 right-8">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-ping"></div>
              </div>
              
              {/* Central question mark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl text-gray-400 dark:text-gray-600 animate-pulse">?</span>
              </div>
            </div>
          </div>
        </LazyLoad>

        <LazyLoad delay={0.9} yOffset={20}>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link 
              href="/"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
            >
              🏠 Back to Home
            </Link>
            
            <Link 
              href="/projects"
              className="inline-block border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              💼 View Projects
            </Link>
            
            <Link 
              href="/contact"
              className="inline-block border-2 border-green-300 dark:border-green-600 text-green-700 dark:text-green-300 px-8 py-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              📧 Get Help
            </Link>
          </div>
        </LazyLoad>

        <LazyLoad delay={1.1} yOffset={20}>
          {/* Quick Stats or Fun Facts */}
          <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              While you're here...
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl mb-1">🚀</div>
                <div>Fast Loading</div>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl mb-1">🎨</div>
                <div>Modern Design</div>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl mb-1">📱</div>
                <div>Responsive</div>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl mb-1">⚡</div>
                <div>High Performance</div>
              </div>
            </div>
          </div>
        </LazyLoad>

        <LazyLoad delay={1.3} yOffset={20}>
          {/* Search Suggestion */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Can't find what you're looking for?{' '}
              <Link 
                href="/contact" 
                className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium"
              >
                Contact me
              </Link>{' '}
              and I'll help you out!
            </p>
          </div>
        </LazyLoad>
      </div>
    </div>
  )
}