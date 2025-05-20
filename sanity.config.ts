import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '@/sanity/schemas';

export default defineConfig({
  name: 'portfolio-content',
  title: 'Portfolio Content',
  
  projectId: 'your-project-id', // Replace with your Sanity project ID
  dataset: 'production',
  
  plugins: [
    deskTool(),
    visionTool(),
  ],
  
  schema: {
    types: schemaTypes,
  },
  
  basePath: '/studio',
});