import {defineField, defineType} from 'sanity'

export const skill = defineType({
  name: 'skill',
  title: 'Skills & Technologies',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Programming Languages', value: 'languages'},
          {title: 'Frontend Frameworks', value: 'frontend'},
          {title: 'Backend Technologies', value: 'backend'},
          {title: 'Mobile Development', value: 'mobile'},
          {title: 'Cloud & DevOps', value: 'cloud'},
          {title: 'Databases', value: 'databases'},
          {title: 'AI & Machine Learning', value: 'ai'},
          {title: 'Tools & Other', value: 'tools'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'proficiency',
      title: 'Proficiency Level',
      type: 'string',
      options: {
        list: [
          {title: 'Beginner', value: 'beginner'},
          {title: 'Intermediate', value: 'intermediate'},
          {title: 'Advanced', value: 'advanced'},
          {title: 'Expert', value: 'expert'},
        ],
      },
    }),
    defineField({
      name: 'icon',
      title: 'Icon/Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'color',
      title: 'Brand Color',
      type: 'string',
      description: 'Hex color code for the skill (e.g., #3178C6 for TypeScript)',
    }),
    defineField({
      name: 'yearsOfExperience',
      title: 'Years of Experience',
      type: 'number',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Skill',
      type: 'boolean',
      description: 'Show this skill prominently on the homepage',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'icon',
    },
  },
})
