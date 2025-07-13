import {PortableTextBlock} from 'sanity'

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

export interface SanityFile {
  _type: 'file'
  asset: {
    _id: string
    url: string
    originalFilename: string
  }
}

export interface Profile {
  _id: string
  name: string
  title: string
  shortBio: string
  bio: PortableTextBlock[]
  profileImage?: SanityImage
  location?: string
  email?: string
  phone?: string
  website?: string
  linkedin?: string
  github?: string
  twitter?: string
  availability?: 'available' | 'open' | 'not-looking' | 'employed'
  preferredRoles?: string[]
  resumeFile?: SanityFile
}

export interface Skill {
  _id: string
  name: string
  category: 'languages' | 'frontend' | 'backend' | 'mobile' | 'cloud' | 'databases' | 'ai' | 'tools'
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  icon?: SanityImage
  color?: string
  yearsOfExperience?: number
  featured: boolean
}

export interface Experience {
  _id: string
  title: string
  company: string
  companyLogo?: SanityImage
  employmentType: 'fulltime' | 'parttime' | 'internship' | 'contract' | 'freelance'
  location?: string
  workType?: 'remote' | 'hybrid' | 'onsite'
  startDate: string
  endDate?: string
  current: boolean
  description?: PortableTextBlock[]
  achievements?: string[]
  skills?: Skill[]
  order?: number
}

export interface Project {
  _id: string
  title: string
  slug: {
    current: string
  }
  description: string
  longDescription?: PortableTextBlock[]
  mainImage: SanityImage
  gallery?: Array<SanityImage & {caption?: string; alt?: string}>
  technologies?: Skill[]
  projectType: 'professional' | 'personal' | 'opensource' | 'academic' | 'hackathon'
  status: 'development' | 'completed' | 'maintained' | 'archived'
  startDate?: string
  endDate?: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  order?: number
}

export interface SkillsByCategory {
  languages: Skill[]
  frontend: Skill[]
  backend: Skill[]
  mobile: Skill[]
  cloud: Skill[]
  databases: Skill[]
  ai: Skill[]
  tools: Skill[]
}
