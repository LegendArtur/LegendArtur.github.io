import { motion } from 'framer-motion'
import { Button } from '../ui/button'


interface ContactSectionProps {
  profile: {
    name: string
    title: string
    email?: string
    linkedin?: string
    github?: string
    twitter?: string
  }
}

export default function ContactSection({ profile }: ContactSectionProps) {
  return (
    <section className="py-24 bg-neutral-950" id="contact">
      <div className="max-w-xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-lg text-neutral-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Interested in working together or just want to say hi?
        </motion.p>
        {profile.email && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <Button asChild size="lg" className="w-full text-lg font-semibold">
              <a href={`mailto:${profile.email}`}> 
                <span className="inline-block align-middle mr-2" style={{verticalAlign: 'middle'}}>
                  {/* Email SVG from simpleicons.org */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#0072c6"><path d="M12 13.065L.015 4.5A2.25 2.25 0 0 1 2.25 3h19.5a2.25 2.25 0 0 1 2.235 1.5zM23.985 5.935l-7.99 5.995 7.99 7.995A2.25 2.25 0 0 0 21.75 21H2.25a2.25 2.25 0 0 0-2.235-1.075l7.99-7.995z"/></svg>
                </span>
                Email Me
              </a>
            </Button>
          </motion.div>
        )}
        <motion.div
          className="flex justify-center gap-6 mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="text-blue-500 hover:text-blue-400">
              {/* GitHub SVG from simpleicons.org */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0072c6"><path d="M12 2.25C6.615 2.25 2.25 6.615 2.25 12c0 4.215 2.73 7.785 6.525 9.045.48.09.66-.21.66-.465 0-.225-.015-.81-.015-1.575-2.67.585-3.225-1.29-3.225-1.29-.435-1.11-1.065-1.41-1.065-1.41-.87-.6.06-.585.06-.585.96.06 1.47.99 1.47.99.855 1.47 2.235 1.05 2.79.81.09-.63.33-1.05.6-1.29-2.13-.24-4.365-1.065-4.365-4.74 0-1.05.375-1.92.99-2.595-.105-.24-.435-1.23.09-2.565 0 0 .81-.255 2.67.99.765-.21 1.59-.315 2.415-.315.825 0 1.65.105 2.415.315 1.86-1.245 2.67-.99 2.67-.99.525 1.335.195 2.325.09 2.565.615.675.99 1.545.99 2.595 0 3.69-2.235 4.5-4.365 4.74.345.3.66.885.66 1.785 0 1.29-.015 2.325-.015 2.64 0 .255.18.555.66.465C19.02 19.785 21.75 16.215 21.75 12c0-5.385-4.365-9.75-9.75-9.75z"/></svg>
            </a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-blue-500 hover:text-blue-400">
              {/* LinkedIn SVG from simpleicons.org */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0072c6"><path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.602 0 4.267 2.369 4.267 5.455v6.285zM5.337 7.433c-1.144 0-2.07-.928-2.07-2.07 0-1.143.926-2.07 2.07-2.07 1.143 0 2.07.927 2.07 2.07 0 1.142-.927 2.07-2.07 2.07zm1.777 13.019H3.56V9h3.554v11.452z"/></svg>
            </a>
          )}
          {profile.twitter && (
            <a href={profile.twitter} target="_blank" rel="noopener noreferrer" title="Twitter" className="text-blue-500 hover:text-blue-400">
              {/* Twitter SVG from simpleicons.org */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0072c6"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.855 2.01-.855 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636z"/></svg>
            </a>
          )}
        </motion.div>
      </div>
    </section>
  )
}
