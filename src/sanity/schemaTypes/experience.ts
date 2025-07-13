import {defineField, defineType} from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'employmentType',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          {title: 'Full-time', value: 'fulltime'},
          {title: 'Part-time', value: 'parttime'},
          {title: 'Internship', value: 'internship'},
          {title: 'Contract', value: 'contract'},
          {title: 'Freelance', value: 'freelance'},
        ],
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'workType',
      title: 'Work Type',
      type: 'string',
      options: {
        list: [
          {title: 'Remote', value: 'remote'},
          {title: 'Hybrid', value: 'hybrid'},
          {title: 'On-site', value: 'onsite'},
        ],
      },
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Leave empty if currently working here',
    }),
    defineField({
      name: 'current',
      title: 'Currently Working Here',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Number', value: 'number'},
          ],
        },
      ],
    }),
    defineField({
      name: 'achievements',
      title: 'Key Achievements',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of key achievements and accomplishments',
    }),
    defineField({
      name: 'skills',
      title: 'Skills & Technologies',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}]}],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'company',
      media: 'companyLogo',
    },
  },
  orderings: [
    {
      title: 'Start Date, New',
      name: 'startDateDesc',
      by: [{field: 'startDate', direction: 'desc'}],
    },
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
