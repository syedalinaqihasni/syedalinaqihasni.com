import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '@/sanity/schemas';
// import {codeInput} from '@sanity/code-input'

export default defineConfig({
  name: 'portfolio-content',
  title: 'Portfolio Content',
  
  projectId: 'laalbe0x', // Replace with your Sanity project ID
  dataset: 'production',
  
  plugins: [
    deskTool(),
    visionTool(),
    // codeInput()
  ],
  
  schema: {
    types: schemaTypes,
  },
  
  basePath: '/studio',
});