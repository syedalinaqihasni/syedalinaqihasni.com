export default {
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          { title: 'DevOps', value: 'devops' },
          { title: 'Design', value: 'design' },
          { title: 'Soft Skills', value: 'soft' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'level',
      title: 'Level',
      type: 'number',
      description: 'Skill proficiency level (0-100)',
      validation: (Rule: any) => Rule.required().min(0).max(100),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this skill on the home page',
      initialValue: false,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order in the display list (lower numbers appear first)',
      initialValue: 100,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'logo',
    },
  },
};