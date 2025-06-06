import { ImageResponse } from 'next/og'
import { events } from '@/constants/events';

export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image({ params }: { params: { slug: string } }) {
  const event = events.find((p) => p.slug === params.slug);
 
  return new ImageResponse(
    (
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
        {event?.title}
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