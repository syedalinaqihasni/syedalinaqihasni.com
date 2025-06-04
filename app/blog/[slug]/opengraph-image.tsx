import { ImageResponse } from 'next/og'
import { posts } from '@/constants/blogs';

 
// Image metadata
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
 
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {post?.title}
        <div
        style={{
          fontSize: 40,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {'Syed Ali Naqi Hasni'}
      </div>

      </div>
    )
  )
}