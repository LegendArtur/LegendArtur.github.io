import {groq} from 'next-sanity'

// Profile queries
export const profileQuery = groq`
  *[_type == "profile"][0]{
    _id,
    name,
    title,
    shortBio,
    bio,
    profileImage,
    location,
    email,
    phone,
    website,
    linkedin,
    github,
    twitter,
    availability,
    preferredRoles,
    resumeFile{
      asset->{
        _id,
        url,
        originalFilename
      }
    }
  }
`

// Experience queries
export const experienceQuery = groq`
  *[_type == "experience"] | order(startDate desc){
    _id,
    title,
    company,
    companyLogo,
    employmentType,
    location,
    workType,
    startDate,
    endDate,
    current,
    description,
    achievements,
    skills[]->{
      _id,
      name,
      category,
      color,
      icon
    },
    order
  }
`

// Skills queries
export const skillsQuery = groq`
  *[_type == "skill"] | order(category asc, name asc){
    _id,
    name,
    category,
    proficiency,
    icon,
    color,
    yearsOfExperience,
    featured
  }
`

export const featuredSkillsQuery = groq`
  *[_type == "skill" && featured == true] | order(name asc){
    _id,
    name,
    category,
    proficiency,
    icon,
    color,
    yearsOfExperience
  }
`

// Projects queries
export const projectsQuery = groq`
  *[_type == "project"] | order(startDate desc){
    _id,
    title,
    slug,
    description,
    mainImage,
    technologies[]->{
      _id,
      name,
      category,
      color,
      icon
    },
    projectType,
    status,
    startDate,
    endDate,
    demoUrl,
    githubUrl,
    featured,
    order
  }
`

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(order asc, startDate desc){
    _id,
    title,
    slug,
    description,
    mainImage,
    technologies[]->{
      _id,
      name,
      category,
      color,
      icon
    },
    projectType,
    status,
    startDate,
    endDate,
    demoUrl,
    githubUrl
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    description,
    longDescription,
    mainImage,
    gallery,
    technologies[]->{
      _id,
      name,
      category,
      proficiency,
      icon,
      color
    },
    projectType,
    status,
    startDate,
    endDate,
    demoUrl,
    githubUrl,
    featured
  }
`

// Skills grouped by category
export const skillsByCategoryQuery = groq`
  {
    "languages": *[_type == "skill" && category == "languages"] | order(name asc),
    "frontend": *[_type == "skill" && category == "frontend"] | order(name asc),
    "backend": *[_type == "skill" && category == "backend"] | order(name asc),
    "mobile": *[_type == "skill" && category == "mobile"] | order(name asc),
    "cloud": *[_type == "skill" && category == "cloud"] | order(name asc),
    "databases": *[_type == "skill" && category == "databases"] | order(name asc),
    "ai": *[_type == "skill" && category == "ai"] | order(name asc),
    "tools": *[_type == "skill" && category == "tools"] | order(name asc)
  }
`
