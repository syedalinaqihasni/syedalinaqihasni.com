import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Check } from "lucide-react";
import {ALL_SERVS,RELATED_JOB_TITLES,ALL_TECHNILOGIES,SERVICES} from '@/constants/services';
import Link from "next/link";
import {
  JOBS,
  JOB_CATEGORIES,
  JOBS_PAGE_CONSTANT,
} from "@/constants/jobs";
import { properCaseToDash } from "@/lib/utils";

const styles = {
  container: "container mx-auto px-4 py-32 md:py-40",
  wrapper: "max-w-6xl mx-auto",
  header: "text-center mb-16",
  title: "text-4xl md:text-5xl font-bold mb-6",
  description: "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto",
  tabsList: "grid w-full grid-cols-3 md:grid-cols-6 max-w-4xl mx-auto mb-12",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  card: "h-full hover:shadow-lg transition-shadow duration-300",
  cardContent: "p-6",
  jobIcon: "text-4xl mb-4",
  jobTitle: "text-xl font-semibold mb-3",
  jobDescription: "text-muted-foreground mb-6",
  featuresList: "space-y-2 mb-6",
  featureItem: "flex items-center gap-2 text-sm",
  techBadges: "flex flex-wrap gap-2 mb-6",
  priceInfo: "flex justify-between items-center mb-4",
  price: "text-lg font-bold text-primary",
  deliveryTime: "text-sm text-muted-foreground",
  ctaSection: "text-center mt-20 bg-muted/50 rounded-lg p-8 md:p-12",
  ctaTitle: "text-3xl font-bold mb-4",
  ctaDescription: "text-lg text-muted-foreground mb-8 max-w-2xl mx-auto",
};

export default function JobsPage() {
  return (
    <div className={styles?.container}>
      <div className={styles?.wrapper}>
        <div className={styles?.header}>
          <h1 className={styles?.title}>{JOBS_PAGE_CONSTANT.title}</h1>
          <p className={styles?.description}>
            {JOBS_PAGE_CONSTANT.description}
          </p>
        </div>

        <Tabs defaultValue="all" className="space-y-8">
          <TabsList className={styles?.tabsList}>
            {JOB_CATEGORIES.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {JOB_CATEGORIES.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className={styles?.grid}>
                {JOBS.filter(
                  (job) =>
                    category.id === "all" || job?.category === category.id
                )?.map((job) => (
                  <Card key={job?.id} className={styles?.card}>
                    <CardContent className={styles?.cardContent}>
                      <div className={styles?.jobIcon}>{job?.icon}</div>
                      <Link href={`/jobs/${job?.slug}`}>
                        <h3 className={styles?.jobTitle}>
                          {job?.title}
                        </h3>
                      </Link>
                      <p className={styles?.jobDescription}>
                        {job?.description}
                      </p>

                      <div className={styles?.featuresList}>
                        {job?.features?.slice(0, 4)?.map((feature, index) => (
                          <div key={index} className={styles?.featureItem}>
                            <Check className="h-4 w-4 text-green-500" />
                            <Link
                              href={`/jobs/${properCaseToDash(
                                feature
                              )}`}
                            >
                              <span>{feature}</span>
                            </Link>
                          </div>
                        ))}
                        {job?.features?.length > 4 && (
                          <div className={styles?.featureItem}>
                            <span className="text-muted-foreground">
                              +{job?.features?.length - 4} more features
                            </span>
                          </div>
                        )}
                      </div>

                      <div className={styles?.techBadges}>
                        {job?.technologies?.slice(0, 3)?.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {job?.technologies?.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{job?.technologies?.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className={styles?.priceInfo}>
                        <span className={styles?.price}>
                          {job?.startingPrice}
                        </span>
                        <span className={styles?.deliveryTime}>
                          {job?.deliveryTime}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <Link href={`/jobs/${job?.slug}`}>
                          <Button variant={"outline"}>More Details</Button>
                        </Link>
                        <Button className="w-50" asChild>
                          <Link href="/contact">
                            Get Quote
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className={styles?.ctaSection}>
          <h2 className={styles?.ctaTitle}>
            {JOBS_PAGE_CONSTANT.cta.title}
          </h2>
          <p className={styles?.ctaDescription}>
            {JOBS_PAGE_CONSTANT.cta.description}
          </p>
          <Button size="lg" asChild>
            <Link href={JOBS_PAGE_CONSTANT.cta.buttonLink}>
              {JOBS_PAGE_CONSTANT.cta.buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
