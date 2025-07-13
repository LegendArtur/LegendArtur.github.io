import {Skill, SkillsByCategory} from '@/types'
import {urlFor} from '@/sanity/lib/image'
import Image from 'next/image'

interface SkillsSectionProps {
  skills: Skill[]
  skillsByCategory?: SkillsByCategory
}

export default function SkillsSection({skills, skillsByCategory}: SkillsSectionProps) {
  const categoryTitles = {
    languages: 'Programming Languages',
    frontend: 'Frontend Technologies',
    backend: 'Backend Technologies', 
    mobile: 'Mobile Development',
    cloud: 'Cloud & DevOps',
    databases: 'Databases',
    ai: 'AI & Machine Learning',
    tools: 'Tools & Other',
  }

  const proficiencyColors = {
    beginner: 'bg-gray-100 text-gray-800',
    intermediate: 'bg-blue-100 text-blue-800',
    advanced: 'bg-green-100 text-green-800',
    expert: 'bg-purple-100 text-purple-800',
  }

  const renderSkill = (skill: Skill) => (
    <div
      key={skill._id}
      className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-center space-x-3"
    >
      {skill.icon && (
        <div className="flex-shrink-0 w-8 h-8 relative">
          <Image
            src={urlFor(skill.icon).width(32).height(32).url()}
            alt={`${skill.name} icon`}
            fill
            className="object-contain"
          />
        </div>
      )}
      
      <div className="flex-grow min-w-0">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-900 truncate">
            {skill.name}
          </h3>
          {skill.proficiency && (
            <span className={`ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${proficiencyColors[skill.proficiency]}`}>
              {skill.proficiency}
            </span>
          )}
        </div>
        
        {skill.yearsOfExperience && (
          <p className="text-xs text-gray-500 mt-1">
            {skill.yearsOfExperience} year{skill.yearsOfExperience !== 1 ? 's' : ''} experience
          </p>
        )}
      </div>
    </div>
  )

  // If we have skills grouped by category, use that layout
  if (skillsByCategory) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600">
              Technologies I work with and my proficiency levels
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => {
              if (!categorySkills || categorySkills.length === 0) return null
              
              return (
                <div key={category}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    {categoryTitles[category as keyof typeof categoryTitles]}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {categorySkills.map(renderSkill)}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  // Fallback to simple grid layout
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600">
            Technologies I work with and my proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map(renderSkill)}
        </div>

        {/* Featured Skills */}
        {skills.some(skill => skill.featured) && (
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Featured Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills
                .filter(skill => skill.featured)
                .map(skill => (
                  <div
                    key={skill._id}
                    className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {skill.icon && (
                      <div className="w-12 h-12 mx-auto mb-3 relative">
                        <Image
                          src={urlFor(skill.icon).width(48).height(48).url()}
                          alt={`${skill.name} icon`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    <h4 className="text-sm font-medium text-gray-900">{skill.name}</h4>
                    {skill.yearsOfExperience && (
                      <p className="text-xs text-gray-500 mt-1">
                        {skill.yearsOfExperience}+ years
                      </p>
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
