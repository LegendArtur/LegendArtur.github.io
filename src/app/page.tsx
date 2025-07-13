import { client } from '@/sanity/lib/client'
import { profileQuery, experienceQuery, featuredSkillsQuery, featuredProjectsQuery } from '@/sanity/lib/queries'
import { Profile, Experience, Skill, Project } from '@/types'
import HeroSection from '@/components/HeroSection'
import ExperienceSection from '@/components/ExperienceSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import Link from 'next/link'

async function getPortfolioData() {
  const [profile, experiences, skills, projects] = await Promise.all([
    client.fetch<Profile>(profileQuery),
    client.fetch<Experience[]>(experienceQuery),
    client.fetch<Skill[]>(featuredSkillsQuery),
    client.fetch<Project[]>(featuredProjectsQuery),
  ])

  return {
    profile,
    experiences,
    skills,
    projects,
  }
}

export default async function Home() {
  const { profile, experiences, skills, projects } = await getPortfolioData()

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Portfolio Setup Required</h1>
          <p className="text-gray-600 mb-4">
            Please add your profile information in the Sanity Studio.
          </p>
          <Link
            href="/studio"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Open Sanity Studio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      <HeroSection profile={profile} />
      
      {experiences && experiences.length > 0 && (
        <ExperienceSection experiences={experiences} />
      )}
      
      {skills && skills.length > 0 && (
        <SkillsSection skills={skills} />
      )}
      
      {projects && projects.length > 0 && (
        <ProjectsSection projects={projects} featured />
      )}
      
      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new opportunities and exciting projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
              </a>
            )}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
                Connect on LinkedIn
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
