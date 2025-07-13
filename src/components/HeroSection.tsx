import Image from 'next/image'
import Link from 'next/link'
import {Profile} from '@/types'
import {urlFor} from '@/sanity/lib/image'

interface HeroSectionProps {
  profile: Profile
}

export default function HeroSection({profile}: HeroSectionProps) {
  const availabilityColors = {
    available: 'bg-green-100 text-green-800',
    open: 'bg-blue-100 text-blue-800', 
    'not-looking': 'bg-gray-100 text-gray-800',
    employed: 'bg-yellow-100 text-yellow-800',
  }

  const availabilityText = {
    available: '🟢 Available for work',
    open: '🔵 Open to opportunities',
    'not-looking': '⚫ Not looking',
    employed: '🟡 Currently employed',
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          {profile.profileImage && (
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src={urlFor(profile.profileImage).width(200).height(200).url()}
                alt={profile.name}
                fill
                className="rounded-full object-cover border-4 border-white shadow-lg"
                priority
              />
            </div>
          )}
          
          {profile.availability && (
            <div className="mb-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${availabilityColors[profile.availability]}`}>
                {availabilityText[profile.availability]}
              </span>
            </div>
          )}

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            {profile.name}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            {profile.title}
          </h2>
          
          <div className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            <p>{profile.shortBio}</p>
          </div>

          {profile.location && (
            <p className="text-gray-500 mb-8">📍 {profile.location}</p>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {profile.github && (
            <Link
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              GitHub
            </Link>
          )}
          
          {profile.linkedin && (
            <Link
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              LinkedIn
            </Link>
          )}

          {profile.resumeFile && (
            <Link
              href={profile.resumeFile.asset.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </Link>
          )}

          {profile.email && (
            <Link
              href={`mailto:${profile.email}`}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </Link>
          )}
        </div>

        {profile.preferredRoles && profile.preferredRoles.length > 0 && (
          <div className="text-sm text-gray-500">
            <p>Interested in: {profile.preferredRoles.join(', ')}</p>
          </div>
        )}
      </div>
    </section>
  )
}
