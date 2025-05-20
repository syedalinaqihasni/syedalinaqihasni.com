export default {
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Speaking Engagement', value: 'speaking' },
          { title: 'Workshop', value: 'workshop' },
          { title: 'Conference', value: 'conference' },
          { title: 'Project Launch', value: 'launch' },
          { title: 'Award', value: 'award' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'virtual',
      title: 'Virtual Event',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'link',
      title: 'Event Link',
      type: 'url',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Feature this event on the home page',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'image',
    },
    prepare(selection: any) {
      const { title, subtitle, media } = selection;
      return {
        title,
        subtitle: subtitle ? new Date(subtitle).toDateString() : 'No date',
        media,
      };
    },
  },
};