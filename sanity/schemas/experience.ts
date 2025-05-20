export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'remote',
      title: 'Remote Position',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Leave blank for current position',
    },
    {
      name: 'current',
      title: 'Current Position',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'skills',
      title: 'Skills Used',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order in the timeline (lower numbers appear first)',
      initialValue: 0,
    },
  ],
  preview: {
    select: {
      title: 'jobTitle',
      subtitle: 'company',
      media: 'companyLogo',
    },
  },
};