"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PRICING_TABS, PRICING_PAGE_CONSTANT } from "@/constants/pricing";
import { properCaseToDash } from "@/lib/utils";

const styles = {
  container: "container mx-auto px-4 py-32 md:py-40",
  wrapper: "max-w-6xl mx-auto",
  header: "text-center mb-16",
  title: "text-4xl md:text-5xl font-bold mb-6",
  description: "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto",
  tabsList: "flex gap-4 w-full max-w-3xl mx-auto mb-12",
  grid: "grid grid-cols-1 md:grid-cols-3 gap-8",
  card: "relative h-full hover:shadow-lg transition-shadow duration-300",
  popularCard: "border-primary shadow-lg scale-105",
  popularBadge: "absolute -top-3 left-1/2 transform -translate-x-1/2",
  cardContent: "p-6",
  planName: "text-2xl font-bold mb-2",
  planDescription: "text-muted-foreground mb-6",
  priceWrapper: "mb-6",
  price: "text-4xl font-bold",
  period: "text-muted-foreground ml-2",
  featuresList: "space-y-3 mb-8",
  featureItem: "flex items-start gap-3",
  limitationsList: "space-y-2 mb-6",
  limitationItem: "flex items-start gap-3 text-sm text-muted-foreground",
  button: "w-full",
  popularButton: "w-full bg-primary hover:bg-primary/90",
  faqSection: "mt-20",
  faqTitle: "text-3xl font-bold text-center mb-8",
  ctaSection: "text-center mt-20 bg-muted/50 rounded-lg p-8 md:p-12",
  ctaTitle: "text-3xl font-bold mb-4",
  ctaDescription: "text-lg text-muted-foreground mb-8 max-w-2xl mx-auto",
};

export default function PricingPage() {
  return (
    <div className={styles?.container}>
      <div className={styles?.wrapper}>
        <div className={styles?.header}>
          <h1 className={styles?.title}>{PRICING_PAGE_CONSTANT.title}</h1>
          <p className={styles?.description}>
            {PRICING_PAGE_CONSTANT.description}
          </p>
        </div>

        <Tabs defaultValue={PRICING_TABS[0].id} className="space-y-8">
          <TabsList className={styles?.tabsList}>
            {PRICING_TABS.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="whitespace-nowrap"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {PRICING_TABS.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              <div className={styles?.grid}>
                {tab.plans.map((plan) => (
                  <Card
                    key={plan?.id}
                    className={`${styles?.card} ${
                      plan?.popular ? styles?.popularCard : ""
                    }`}
                  >
                    {plan?.popular && (
                      <Badge className={styles?.popularBadge}>
                        Most Popular
                      </Badge>
                    )}
                    <CardContent className={styles?.cardContent}>
                      <Link href={`/pricing/${plan?.slug}`}>
                        <h3 className={styles?.planName}>{plan?.name}</h3>
                      </Link>
                      <p className={styles?.planDescription}>
                        {plan?.description}
                      </p>

                      <div className={styles?.priceWrapper}>
                        <span className={styles?.price}>{plan?.pricing}</span>
                        <span className={styles?.period}>/{plan?.period}</span>
                      </div>

                      <div className={styles?.featuresList}>
                        {plan?.features.map((feature, index) => (
                          <div key={index} className={styles?.featureItem}>
                            <Check className="h-5 w-5 text-green-500 mt-0.5" />
                            <Link
                              href={`/term-and-conditions#${properCaseToDash(
                                feature
                              )}`}
                            >
                              <span>{feature}</span>
                            </Link>
                          </div>
                        ))}
                      </div>

                      {plan?.limitations?.length > 0 && (
                        <div className={styles?.limitationsList}>
                          {plan?.limitations.map((limitation, index) => (
                            <div key={index} className={styles?.limitationItem}>
                              <X className="h-4 w-4 text-red-500 mt-0.5" />
                              <span>{limitation}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <Button
                        className={
                          plan?.popular ? styles?.popularButton : styles?.button
                        }
                        asChild
                      >
                        <Link href="/contact">{plan?.buttonText}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className={styles?.faqSection}>
          <h2 className={styles?.faqTitle}>
            {PRICING_PAGE_CONSTANT.faq.title}
          </h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {PRICING_PAGE_CONSTANT.faq.items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className={styles?.ctaSection}>
          <h2 className={styles?.ctaTitle}>
            {PRICING_PAGE_CONSTANT.cta.title}
          </h2>
          <p className={styles?.ctaDescription}>
            {PRICING_PAGE_CONSTANT.cta.description}
          </p>
          <Button size="lg" asChild>
            <Link href={PRICING_PAGE_CONSTANT.cta.buttonLink}>
              {PRICING_PAGE_CONSTANT.cta.buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
