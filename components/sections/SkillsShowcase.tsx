'use client'

import { motion } from 'framer-motion'
import { Skill } from '@/types'
import Image from 'next/image'

// Default icon for fallback
const DEFAULT_ICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'

interface SkillsShowcaseProps {
  skills: Skill[]
}

export function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  // Sort categories by custom order
  const categoryOrder = [
    'Data Science & AI',
    'Programming Languages', 
    'Frameworks & Libraries',
    'Cloud & DevOps',
    'Databases',
    'Tools & Platforms'
  ]

  const sortedCategories = Object.entries(skillsByCategory).sort(([a], [b]) => {
    const indexA = categoryOrder.indexOf(a)
    const indexB = categoryOrder.indexOf(b)
    return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB)
  })

  const proficiencyConfig = {
    beginner: { 
      level: 1, 
      color: 'from-cyan-400 to-blue-500',
      glow: 'shadow-cyan-500/20',
      text: 'text-cyan-400'
    },
    intermediate: { 
      level: 2, 
      color: 'from-purple-400 to-pink-500', 
      glow: 'shadow-purple-500/20',
      text: 'text-purple-400'
    },
    advanced: { 
      level: 3, 
      color: 'from-orange-400 to-red-500',
      glow: 'shadow-orange-500/20',
      text: 'text-orange-400'
    },
    expert: { 
      level: 4, 
      color: 'from-green-400 to-emerald-500',
      glow: 'shadow-green-500/20',
      text: 'text-green-400'
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 font-mono text-sm tracking-widest">TECHNICAL ARSENAL</span>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-blue-200 mb-6">
            Digital Toolkit
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Advanced technologies and frameworks I leverage to build intelligent, 
            scalable, and cutting-edge solutions for the future.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-8"
        >
          {sortedCategories.map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              className="group"
            >
              {/* Category Card */}
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 p-8 hover:shadow-2xl hover:shadow-purple-500/10">
                {/* Category Header */}
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-white font-mono tracking-tight">
                    {category}
                  </h3>
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {categorySkills.map((skill, skillIndex) => {
                    const config = proficiencyConfig[skill.proficiency]
                    const iconUrl = skill.icon || DEFAULT_ICON
                    
                    return (
                      <motion.div
                        key={skill._id}
                        variants={skillVariants}
                        custom={skillIndex}
                        whileHover={{ 
                          scale: 1.02,
                          x: 10,
                          transition: { duration: 0.2 }
                        }}
                        className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group/skill"
                      >
                        <div className="flex items-center space-x-4">
                          {/* Real SVG Icon from CDN */}
                          <div className="relative">
                            <div className="w-10 h-10 relative transition-transform duration-300 group-hover/skill:scale-110">
                              <Image
                                src={iconUrl}
                                alt={skill.name}
                                width={40}
                                height={40}
                                className="rounded-lg"
                                onError={(e) => {
                                  // Fallback to default icon if URL fails
                                  const target = e.target as HTMLImageElement
                                  target.src = DEFAULT_ICON
                                }}
                              />
                            </div>
                            <div className="absolute inset-0 bg-cyan-400/20 rounded-lg blur-sm opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                          </div>
                          
                          {/* Skill Info */}
                          <div>
                            <h4 className="text-lg font-semibold text-white">
                              {skill.name}
                            </h4>
                            {skill.description && (
                              <p className="text-sm text-gray-400 mt-1 max-w-xs">
                                {skill.description}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Proficiency Indicator */}
                        <div className="flex items-center space-x-3">
                          {/* Level Bars */}
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4].map((level) => (
                              <div
                                key={level}
                                className={`w-2 h-6 rounded-full transition-all duration-500 ${
                                  level <= config.level
                                    ? `bg-gradient-to-b ${config.color} ${config.glow}`
                                    : 'bg-white/10'
                                }`}
                              />
                            ))}
                          </div>
                          
                          {/* Level Text */}
                          <span className={`text-sm font-mono font-bold ${config.text} min-w-20 text-right`}>
                            {skill.proficiency.toUpperCase()}
                          </span>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-4 p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{skills.length}+</div>
              <div className="text-cyan-400 text-sm font-mono">TECHNOLOGIES</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{Object.keys(skillsByCategory).length}</div>
              <div className="text-purple-400 text-sm font-mono">DOMAINS</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                {skills.filter(s => s.proficiency === 'expert' || s.proficiency === 'advanced').length}
              </div>
              <div className="text-green-400 text-sm font-mono">MASTERED</div>
            </div>
          </div>
        </motion.div>

        {/* CDN Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm mb-4">
            Using real technology icons from Devicon CDN
          </p>
          <div className="inline-flex items-center space-x-6 text-cyan-400 text-sm font-mono">
            <span>SVG ICONS</span>
            <div className="w-1 h-1 bg-white/20 rounded-full"></div>
            <span>HIGH RESOLUTION</span>
            <div className="w-1 h-1 bg-white/20 rounded-full"></div>
            <span>OFFICIAL LOGOS</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}