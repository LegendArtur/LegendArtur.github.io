
import { Experience } from '@/types'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Briefcase, MapPin, CalendarDays } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ExperienceSectionProps {
  experiences: Experience[]
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

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  })
}

function calculateDuration(startDate: string, endDate?: string) {
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

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section className="py-24 bg-neutral-950" id="experience">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Briefcase className="inline-block w-8 h-8 mr-2 align-middle text-blue-500" />
            Experience
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My professional journey and key achievements
          </motion.p>
        </div>

        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
        >
          <AnimatePresence>
            {experiences.map((experience) => (
              <motion.div
                key={experience._id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.7 }}
              >
                <Card className="bg-neutral-900 border border-neutral-800 rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
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
                          <h3 className="text-xl font-semibold text-white mb-1">
                            {experience.title}
                          </h3>
                          <p className="text-lg text-neutral-300 mb-2">
                            {experience.company} · {employmentTypeLabels[experience.employmentType]}
                          </p>
                          <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-400 mb-2">
                            <span>
                              <CalendarDays className="inline-block w-4 h-4 mr-1 align-middle text-blue-500" />
                              {formatDate(experience.startDate)} - {experience.current ? 'Present' : experience.endDate ? formatDate(experience.endDate) : 'Present'}
                            </span>
                            <span>·</span>
                            <span>{calculateDuration(experience.startDate, experience.endDate)}</span>
                          </div>
                          {(experience.location || experience.workType) && (
                            <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-400">
                              {experience.location && <span><MapPin className="inline-block w-4 h-4 mr-1 align-middle text-blue-500" />{experience.location}</span>}
                              {experience.workType && experience.location && <span>·</span>}
                              {experience.workType && <span>{workTypeLabels[experience.workType]}</span>}
                            </div>
                          )}
                        </div>
                      </div>
                      {experience.description && (
                        <div className="prose prose-sm max-w-none mb-4 text-neutral-300 prose-invert">
                          <PortableText value={experience.description} />
                        </div>
                      )}
                      {experience.achievements && experience.achievements.length > 0 && (
                        <div className="mb-4">
                          <ul className="list-disc list-inside space-y-2 text-neutral-300">
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
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-950 text-blue-400 border border-blue-900"
                              style={skill.color ? { backgroundColor: `${skill.color}20`, color: skill.color } : {}}
                            >
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
