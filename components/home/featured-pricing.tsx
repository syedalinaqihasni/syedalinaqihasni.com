"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Plan } from "@/constants/pricing";
import { properCaseToDash } from "@/lib/utils";

const styles = {
  grid: "grid grid-cols-1 md:grid-cols-3 gap-8",
  card: "relative h-full hover:shadow-lg transition-shadow duration-300",
  popularCard: "border-primary shadow-lg scale-105",
  popularBadge: "absolute -top-3 left-1/2 transform -translate-x-1/2",
  cardContent: "p-6",
  planName: "text-xl font-bold mb-2",
  planDescription: "text-muted-foreground mb-4",
  priceWrapper: "mb-6",
  price: "text-3xl font-bold",
  period: "text-muted-foreground ml-2",
  featuresList: "space-y-2 mb-6",
  featureItem: "flex items-center gap-2 text-sm",
  button: "w-full",
  popularButton: "w-full bg-primary hover:bg-primary/90",
};

export default function FeaturedPricing({ plans }: { plans: Plan[] }) {
  return (
    <div className={styles?.grid}>
      {plans.map((plan, index) => (
        <motion.div
          key={plan?.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card
            className={`${styles?.card} ${
              plan?.popular ? styles?.popularCard : ""
            }`}
          >
            {plan?.popular && (
              <Badge className={styles?.popularBadge}>Most Popular</Badge>
            )}
            <CardContent className={styles?.cardContent}>
              <h3 className={styles?.planName}>{plan?.name}</h3>
              <p className={styles?.planDescription}>{plan?.description}</p>

              <div className={styles?.priceWrapper}>
                <span className={styles?.price}>{plan?.pricing}</span>
                <span className={styles?.period}>/{plan?.period}</span>
              </div>

              <div className={styles?.featuresList}>
                {plan?.features.slice(0, 5).map((feature, idx) => (
                  <div key={idx} className={styles?.featureItem}>
                    <Check className="h-4 w-4 text-green-500" />
                    <Link
                      href={`https://www.syedalinaqihasni.com/term-and-conditions#${properCaseToDash(feature)}`}
                    >
                      <span>{feature}</span>
                    </Link>
                  </div>
                ))}
                {plan?.features?.length > 5 && (
                  <div className={styles?.featureItem}>
                    <span className="text-muted-foreground">
                      +{plan?.features?.length - 5} more features
                    </span>
                  </div>
                )}
              </div>

              <Button
                className={
                  plan?.popular ? styles?.popularButton : styles?.button
                }
                asChild
              >
                <Link href="https://www.syedalinaqihasni.com/pricing">
                  View Details
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
