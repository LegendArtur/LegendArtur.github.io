
import { Project } from '@/types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Github, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProjectsSectionProps {
  projects: Project[]
  featured?: boolean
}

export default function ProjectsSection({ projects, featured = false }: ProjectsSectionProps) {
  const displayProjects = featured ? projects.filter(p => p.featured) : projects

  return (
    <section className="py-24 bg-neutral-950" id="projects">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-white mb-4 tracking-tight"
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
            {displayProjects.map((project) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.7 }}
              >
                <Card className="bg-neutral-900 border border-neutral-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow flex flex-col">
                  {project.mainImage && (
                    <div className="w-full h-40 relative mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={urlFor(project.mainImage).width(600).height(240).url()}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-neutral-300 mb-4 text-sm">
                    {project.description}
                  </p>
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech._id}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-950 text-blue-400 border border-blue-900"
                          style={tech.color ? { backgroundColor: `${tech.color}20`, color: tech.color } : {}}
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-4 mt-auto">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400 transition-colors"
                        title="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
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
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
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
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={urlFor(project.mainImage).width(400).height(300).url()}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {projectTypeLabels[project.projectType]}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech._id}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
                        style={tech.color ? {backgroundColor: `${tech.color}20`, color: tech.color} : {}}
                      >
                        {tech.name}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Demo
                      </Link>
                    )}
                    
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-gray-600 hover:text-gray-700"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        Code
                      </Link>
                    )}
                  </div>

                  {project.slug && (
                    <Link
                      href={`/projects/${project.slug.current}`}
                      className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!featured && projects.length > 6 && (
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View All Projects
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
