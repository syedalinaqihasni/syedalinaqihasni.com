export default {
  name: 'social',
  title: 'Social Links',
  type: 'document',
  fields: [
    {
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          { title: 'GitHub', value: 'github' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'Twitter', value: 'twitter' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'Medium', value: 'medium' },
          { title: 'Dev.to', value: 'devto' },
          { title: 'Reddit', value: 'reddit' },
          { title: 'WhatsApp', value: 'whatsapp' },
          { title: 'Email', value: 'email' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Display name for the link',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'displayOnHeader',
      title: 'Display on Header',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'displayOnFooter',
      title: 'Display on Footer',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'displayOnHomepage',
      title: 'Display on Homepage',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'displayOnLinkTree',
      title: 'Display on Links Page',
      type: 'boolean',
      initialValue: true,
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
      title: 'platform',
      subtitle: 'url',
    },
  },
};