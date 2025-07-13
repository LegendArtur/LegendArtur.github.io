import {Experience} from '@/types'
import {urlFor} from '@/sanity/lib/image'
import {PortableText} from '@portabletext/react'
import Image from 'next/image'

interface ExperienceSectionProps {
  experiences: Experience[]
}

export default function ExperienceSection({experiences}: ExperienceSectionProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    })
  }

  const calculateDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate)
    const end = endDate ? new Date(endDate) : new Date()
    
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
    
    if (months < 12) {
      return `${months} mo${months !== 1 ? 's' : ''}`
    } else {
      const years = Math.floor(months / 12)
      const remainingMonths = months % 12
      if (remainingMonths === 0) {
        return `${years} yr${years !== 1 ? 's' : ''}`
      } else {
        return `${years} yr${years !== 1 ? 's' : ''} ${remainingMonths} mo${remainingMonths !== 1 ? 's' : ''}`
      }
    }
  }

  const employmentTypeLabels = {
    fulltime: 'Full-time',
    parttime: 'Part-time', 
    internship: 'Internship',
    contract: 'Contract',
    freelance: 'Freelance',
  }

  const workTypeLabels = {
    remote: 'Remote',
    hybrid: 'Hybrid',
    onsite: 'On-site',
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600">
            My professional journey and key achievements
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience._id}
              className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {experience.companyLogo && (
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 relative">
                      <Image
                        src={urlFor(experience.companyLogo).width(64).height(64).url()}
                        alt={`${experience.company} logo`}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                  </div>
                )}
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-lg text-gray-700 mb-2">
                        {experience.company} · {employmentTypeLabels[experience.employmentType]}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-2">
                        <span>
                          {formatDate(experience.startDate)} - {experience.current ? 'Present' : experience.endDate ? formatDate(experience.endDate) : 'Present'}
                        </span>
                        <span>·</span>
                        <span>
                          {calculateDuration(experience.startDate, experience.endDate)}
                        </span>
                      </div>
                      
                      {(experience.location || experience.workType) && (
                        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                          {experience.location && <span>📍 {experience.location}</span>}
                          {experience.workType && experience.location && <span>·</span>}
                          {experience.workType && <span>{workTypeLabels[experience.workType]}</span>}
                        </div>
                      )}
                    </div>
                  </div>

                  {experience.description && (
                    <div className="prose prose-sm max-w-none mb-4 text-gray-700">
                      <PortableText value={experience.description} />
                    </div>
                  )}

                  {experience.achievements && experience.achievements.length > 0 && (
                    <div className="mb-4">
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {experience.skills && experience.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill._id}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                          style={skill.color ? {backgroundColor: `${skill.color}20`, color: skill.color} : {}}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
