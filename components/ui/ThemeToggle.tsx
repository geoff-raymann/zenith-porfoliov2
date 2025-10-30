'use client'

import { useTheme } from '@/components/providers/ThemeProvider'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Sun Icon for Light Mode */}
      <div className={`transition-all duration-300 ${theme === 'light' ? 'scale-100 rotate-0' : 'scale-0 -rotate-90'}`}>
        <span className="text-yellow-500 text-xl">☀️</span>
      </div>
      
      {/* Moon Icon for Dark Mode */}
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${theme === 'dark' ? 'scale-100 rotate-0' : 'scale-0 rotate-90'}`}>
        <span className="text-blue-400 text-xl">🌙</span>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
      </div>
    </button>
  )
}