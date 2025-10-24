import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Zenith Portfolio - Data Scientist & AI Engineer',
  description: 'Professional portfolio showcasing data science projects and AI engineering work.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}