export interface Project {
  _id: string
  _type: 'project'
  title: string
  slug: {
    current: string
  }
  summary: string
  description: string
  mainImage: any
  tech: string[]
  demoUrl?: string
  repoUrl?: string
  featured: boolean
  publishedAt: string
}

export interface Recommendation {
  _id: string
  _type: 'recommendation'
  authorName: string
  position: string
  company: string
  quote: string
  avatar: any
  featured: boolean
}

export interface Skill {
  _id: string
  _type: 'skill'
  name: string
  icon: string
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  category: string
  description?: string // Make this optional
}

export interface Bio {
  _id: string
  _type: 'bio'
  name: string
  tagline: string
  description: string
  profileImage: any
  email: string
  cvFile: any
  socialLinks: {
    platform: string
    url: string
  }[]
}