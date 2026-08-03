'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { FEATURED_SERVICES } from '@/constants/services';

const styles = {
  grid: 'grid grid-cols-1 md:grid-cols-3 gap-8',
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
};

export default function FeaturedServices() {
  return (
    <div className={styles?.grid}>
      {FEATURED_SERVICES.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className={styles?.card}>
            <CardContent className={styles?.cardContent}>
              <div className={styles?.serviceIcon}>{service.icon}</div>
              <h3 className={styles?.serviceTitle}>{service.title}</h3>
              <p className={styles?.serviceDescription}>{service.description}</p>
              
              <div className={styles?.featuresList}>
                {service.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className={styles?.featureItem}>
                    <Check className="h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
                {service.features?.length > 3 && (
                  <div className={styles?.featureItem}>
                    <span className="text-muted-foreground">
                      +{service.features?.length - 3} more features
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
              </div>

              <div className={styles?.priceInfo}>
                <span className={styles?.price}>From {service.startingPrice}</span>
                <span className={styles?.deliveryTime}>{service.deliveryTime}</span>
              </div>

              <Button className="w-full" asChild>
                <Link href="https://www.syedalinaqihasni.com/services">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}