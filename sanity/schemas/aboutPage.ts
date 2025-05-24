// ./schemas/aboutPage.ts

export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    },
    {
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
    },
    {
      name: 'aboutImage',
      title: 'About Image',
      type: 'image',
      options: {
        hotspot: true, // Allows cropping and responsive focal point
      },
    },
    {
      name: 'storyTitle',
      title: 'Story Title',
      type: 'string',
    },
    {
      name: 'storyParagraphs',
      title: 'Story Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    },
    {
      name: 'journey',
      title: 'Journey Timeline',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'year', title: 'Year', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'tools',
      title: 'Tools & Technologies',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'category', title: 'Category', type: 'string' },
            {
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    },
  ],
};
