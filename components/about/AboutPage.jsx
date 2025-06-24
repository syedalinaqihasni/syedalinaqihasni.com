import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ABOUT_PAGE_CONSTANT, JOURNEY, TOOLS } from '@/constants/about';

const AboutPage = () => {
  return (
    <>
       <div className={'container mx-auto px-4 py-32 md:py-40'}>
      <div className={'max-w-6xl mx-auto'}>
        <div className={'text-center mb-16'}>
          <h1 className={'text-4xl md:text-5xl font-bold mb-6'}>
            {ABOUT_PAGE_CONSTANT?.title}
          </h1>
          <p className={'text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto'}>
            {ABOUT_PAGE_CONSTANT?.description}
          </p>
        </div>
        <div className={'grid grid-cols-1 md:grid-cols-2 gap-12 mb-20'}>
          <div className={'relative h-[400px] rounded-lg overflow-hidden'}>
            <Image
              src={'https://www.syedalinaqihasni.com/images/about-us-syed-ali-naqi-hasni.jpg'}
              alt={'Profile Picture - Syed Ali Naqi Hasni'}
              fill
              className={'object-cover'}
            />
          </div>
          <div>
            <h2 className={'text-3xl font-bold mb-6'}>
              {ABOUT_PAGE_CONSTANT?.profile.heading}
            </h2>
            <div className={'prose dark:prose-invert'}>
              {ABOUT_PAGE_CONSTANT?.profile.paragraphs?.map((text, idx) => (
                <p
                  className={'text-lg mb-4'}
                  key={idx}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={'mb-20'}>
          <h2 className={'text-3xl font-bold text-center mb-12'}>
            {ABOUT_PAGE_CONSTANT?.journey.heading}
          </h2>
          <div className={'relative'}>
            <div className={'absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border'} />
            <div className={'space-y-12'}>
              {JOURNEY?.map((event, index) => (
                <div
                  key={event?.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={'flex-1 md:w-1/2'} />
                  <div className={'absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-background'} />
                  <Card className={'flex-1 md:w-1/2 mx-4'}>
                    <CardContent className={'p-6'}>
                      <div className={'font-bold text-xl mb-2'}>{event?.year}</div>
                      <h3 className={'text-lg font-semibold mb-2'}>
                        {event?.title}
                      </h3>
                      <p className={'text-muted-foreground'}>
                        {event?.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h2 className={'text-3xl font-bold text-center mb-12'}>
            {ABOUT_PAGE_CONSTANT?.tools.heading}
          </h2>
          <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'}>
            {TOOLS?.map((category) => (
              <Card key={category?.category}>
                <CardContent className={'p-6'}>
                  <h3 className={'font-bold text-xl mb-4'}>
                    {category?.category}
                  </h3>
                  <div className={'flex flex-wrap gap-2'}>
                    {category?.items?.map((item) => (
                      <Badge key={item} variant={'secondary'}>
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutPage
