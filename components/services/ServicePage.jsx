import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { SERVICES, SERVICE_CATEGORIES, SERVICES_PAGE_CONSTANT } from '@/constants/services';


const styles = {
  container: 'container mx-auto px-4 py-32 md:py-40',
  wrapper: 'max-w-6xl mx-auto',
  header: 'text-center mb-16',
  title: 'text-4xl md:text-5xl font-bold mb-6',
  description: 'text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto',
  tabsList: 'grid w-full grid-cols-3 md:grid-cols-6 max-w-4xl mx-auto mb-12',
  grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
  card: 'h-full hover:shadow-lg transition-shadow duration-300',
  cardContent: 'p-6',
  serviceIcon: 'text-4xl mb-4',
  serviceTitle: 'text-xl font-semibold mb-3',
  serviceDescription: 'text-muted-foreground mb-6',
  featuresList: 'space-y-2 mb-6',
  featureItem: 'flex items-center gap-2 text-sm',
  techBadges: 'flex flex-wrap gap-2 mb-6',
  priceInfo: 'flex justify-between items-center mb-4',
  price: 'text-lg font-bold text-primary',
  deliveryTime: 'text-sm text-muted-foreground',
  ctaSection: 'text-center mt-20 bg-muted/50 rounded-lg p-8 md:p-12',
  ctaTitle: 'text-3xl font-bold mb-4',
  ctaDescription: 'text-lg text-muted-foreground mb-8 max-w-2xl mx-auto',
};

export default function ServicesPage() {
  return (
    <div className={styles?.container}>
      <div className={styles?.wrapper}>
        <div className={styles?.header}>
          <h1 className={styles?.title}>{SERVICES_PAGE_CONSTANT.title}</h1>
          <p className={styles?.description}>{SERVICES_PAGE_CONSTANT.description}</p>
        </div>

        <Tabs defaultValue="all" className="space-y-8">
          <TabsList className={styles?.tabsList}>
            {SERVICE_CATEGORIES.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {SERVICE_CATEGORIES.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className={styles?.grid}>
                {SERVICES
                  .filter(service => category.id === 'all' || service.category === category.id)
                  .map((service) => (
                    <Card key={service.id} className={styles?.card}>
                      <CardContent className={styles?.cardContent}>
                        <div className={styles?.serviceIcon}>{service.icon}</div>
                        <h3 className={styles?.serviceTitle}>{service.title}</h3>
                        <p className={styles?.serviceDescription}>{service.description}</p>
                        
                        <div className={styles?.featuresList}>
                          {service.features.slice(0, 4).map((feature, index) => (
                            <div key={index} className={styles?.featureItem}>
                              <Check className="h-4 w-4 text-green-500" />
                              <span>{feature}</span>
                            </div>
                          ))}
                          {service.features?.length > 4 && (
                            <div className={styles?.featureItem}>
                              <span className="text-muted-foreground">
                                +{service.features?.length - 4} more features
                              </span>
                            </div>
                          )}
                        </div>

                        <div className={styles?.techBadges}>
                          {service.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {service.technologies?.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{service.technologies?.length - 3}
                            </Badge>
                          )}
                        </div>

                        <div className={styles?.priceInfo}>
                          <span className={styles?.price}>{service.startingPrice}</span>
                          <span className={styles?.deliveryTime}>{service.deliveryTime}</span>
                        </div>

                        <Button className="w-full" asChild>
                          <Link href="/contact">
                            Get Quote
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className={styles?.ctaSection}>
          <h2 className={styles?.ctaTitle}>{SERVICES_PAGE_CONSTANT.cta.title}</h2>
          <p className={styles?.ctaDescription}>{SERVICES_PAGE_CONSTANT.cta.description}</p>
          <Button size="lg" asChild>
            <Link href={SERVICES_PAGE_CONSTANT.cta.buttonLink}>
              {SERVICES_PAGE_CONSTANT.cta.buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}