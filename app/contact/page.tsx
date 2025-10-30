'use client'

import { useState } from 'react'
import { LazyLoad } from '@/components/ui/LazyLoad'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Header with Lazy Load */}
        <LazyLoad delay={0.1} yOffset={30}>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </div>
        </LazyLoad>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form with Lazy Load */}
          <LazyLoad delay={0.2} yOffset={40}>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition duration-300"
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition duration-300"
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none transition duration-300"
                    placeholder="Tell me about your project or inquiry..."
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-300 font-medium flex items-center justify-center space-x-2 hover:scale-105 transform"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <LazyLoad delay={0} yOffset={0}>
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center space-x-2 animate-fade-in">
                      <span className="text-lg">✅</span>
                      <div>
                        <p className="font-medium">Message sent successfully!</p>
                        <p className="text-sm">I'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </LazyLoad>
                )}

                {submitStatus === 'error' && (
                  <LazyLoad delay={0} yOffset={0}>
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg flex items-center space-x-2 animate-fade-in">
                      <span className="text-lg">❌</span>
                      <div>
                        <p className="font-medium">There was an error sending your message.</p>
                        <p className="text-sm">Please try again or email me directly.</p>
                      </div>
                    </div>
                  </LazyLoad>
                )}
              </form>
            </div>
          </LazyLoad>

          {/* Contact Info with Lazy Load */}
          <LazyLoad delay={0.3} yOffset={40}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Let's Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  I'm always interested in new opportunities, collaborations, and interesting projects. 
                  Whether you're a company looking to hire, a fellow developer wanting to collaborate, 
                  or just want to say hello - I'll do my best to get back to you within 24 hours!
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: '📧', title: 'Email', content: 'your.email@example.com', bg: 'bg-blue-100 dark:bg-blue-900' },
                  { icon: '💼', title: 'LinkedIn', content: 'linkedin.com/in/yourprofile', bg: 'bg-green-100 dark:bg-green-900' },
                  { icon: '🐙', title: 'GitHub', content: 'github.com/yourusername', bg: 'bg-gray-100 dark:bg-gray-700' }
                ].map((item, index) => (
                  <LazyLoad key={index} delay={0.4 + (index * 0.1)} yOffset={20}>
                    <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition duration-300">
                      <div className={`w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center`}>
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
                      </div>
                    </div>
                  </LazyLoad>
                ))}
              </div>

              {/* Response Time Info */}
              <LazyLoad delay={0.7} yOffset={20}>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-500 text-lg">💡</span>
                    <div>
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                        Typical Response Time
                      </h4>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">
                        I usually respond within 24 hours. For urgent matters, feel free to connect with me on LinkedIn.
                      </p>
                    </div>
                  </div>
                </div>
              </LazyLoad>
            </div>
          </LazyLoad>
        </div>
      </div>
    </div>
  )
}