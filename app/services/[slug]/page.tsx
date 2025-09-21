import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SERVICES } from "@/constants/services";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Check, ArrowRight, Quote, Briefcase } from "lucide-react";
import { dashToProperCase, properCaseToDash, toProperCase } from "@/lib/utils";
import HtmlRenderer from "@/components/HtmlRenderer";
import FeaturedPricing from "@/components/home/featured-pricing";
import { generateDynamicMetadata } from "@/lib/generateDynamicMetadata";

// export async function generateStaticParams() {
//   const allSlugs = SERVICES.flatMap((service) => service?.slug || []);
//   return allSlugs.map((slug) => ({ slug }));
// }

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug?.includes(params?.slug));
  if (!service) return {};

  return generateDynamicMetadata({
    title: `${service?.title} | Syed Ali Naqi Hasni`,
    description: service?.description,
    path: `/services/${service?.slug}`,
  });
}

const styles = {
  sectionPadding: " px-4",
  heroPadding: "pt-32 pb-16 md:pt-40 md:pb-20 px-4",
  containerSmall: "container mx-auto max-w-4xl",
  containerMedium: "container mx-auto max-w-5xl",
  containerLarge: "container mx-auto max-w-6xl",
  heroGrid: "grid grid-cols-1 md:grid-cols-12 gap-8 items-center",
  heroTextCol: "md:col-span-7",
  heroImageCol: "md:col-span-5 flex justify-center md:justify-end",
  heroImageWrapper:
    "relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl",
  heroTitle:
    "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-400",
  heroSubtitle: "text-2xl md:text-3xl font-medium mb-6",
  heroDescription: "text-lg md:text-xl text-muted-foreground mb-8 max-w-lg",
  heroButtons: "flex flex-wrap gap-4",
  socialButtons: "flex gap-4 mt-8",
  sectionHeader: "text-3xl font-bold mb-10 text-center",
  sectionHeaderLeft: "text-3xl font-bold mb-10",
  projectsHeaderWrapper: "flex justify-between items-center mb-10",
  centerText: "text-center mt-10",
  contactText: "text-center text-muted-foreground mb-10 max-w-2xl mx-auto",
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug?.includes(params?.slug));
  if (!service) return notFound();

  return (
    <section className="max-w-5xl mx-auto py-24 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">{service?.title}</h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          {service?.description}
        </p>
      </div>

      {/* Deliverables + Requirements side by side */}
      {(service?.deliverables || service?.requirements) && (
        <div className="mb-12 grid md:grid-cols-2 gap-8">
          <Section title="What’s Included">
            <FeatureList features={service?.features} />
          </Section>
          <div>
            <Section title="Related Services">
              <div className="flex flex-wrap gap-2">
                {service?.servs.map((serv) => (
                  <Link href={`/related-services/${serv}`} key={serv}>
                    <Badge variant="secondary" className="text-xs" key={serv}>
                      {toProperCase(serv).replace(/-/g, " ")}
                    </Badge>
                  </Link>
                ))}
              </div>
            </Section>
          </div>
        </div>
      )}
      {(service?.deliverables || service?.requirements) && (
        <div className="mb-12 grid md:grid-cols-2 gap-8">
          {service?.deliverables && (
            <div>
              <h2 className="text-xl font-semibold mb-3">Deliverables</h2>
              <FeatureList features={service?.deliverables} />
            </div>
          )}
          {service?.requirements && (
            <div>
              <h2 className="text-xl font-semibold mb-3">
                What I Need from You
              </h2>
              <FeatureList features={service?.requirements} />
            </div>
          )}
        </div>
      )}
      {/* Deliverables + Requirements side by side */}
      {(service?.relatedJobTitles || service?.technologies) && (
        <div className="mb-6 grid md:grid-cols-2 gap-8">
          {/* Related Job Titles as list with icons */}
          <Section title="Related Job Titles">
            <ul className="space-y-2">
              {service?.relatedJobTitles.map((serv) => (
                <li key={serv}>
                  <Link
                    href={`/related-jobs/${properCaseToDash(serv)}`}
                    className="flex items-center gap-2 text-xs hover:underline"
                  >
                    <Briefcase size={14} className="text-muted-foreground" />
                    <span>{dashToProperCase(serv).replace(/-/g, " ")}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
          {/* Technologies Used */}
          <Section title="Technologies Used">
            <ul className="space-y-2">
              {service?.technologies.map((serv) => (
                <li key={serv}>
                  <Link
                    href={`/related-services/${properCaseToDash(serv)}`}
                    className="flex items-center gap-2 text-xs hover:underline"
                  >
                    <Badge
                      variant="secondary"
                      className="text-xs  hover:underline "
                    >
                      <span>{dashToProperCase(serv).replace(/-/g, " ")}</span>
                    </Badge>
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      )}
      {service?.detailedDescription && (
        <Section title="More About This Service">
          <div className="prose prose-neutral max-w-none">
            <HtmlRenderer
              path=""
              terms={[]}
              html={service?.detailedDescription}
            />
          </div>
        </Section>
      )}

      {/* FAQs in Accordion */}
      {service?.faqs?.length > 0 && (
        <Section title="FAQs">
          <Accordion type="single" collapsible className="w-full">
            {service?.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>
      )}

      {/* Testimonials Slider */}
      {service?.testimonials?.length > 0 && (
        <Section title="Client Testimonials">
          <div className="gap-6 py-2 px-1">
            {service?.testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[300px] bg-muted/50 border rounded-xl p-4 my-3  flex-shrink-0"
              >
                <Quote className="w-5 h-5 text-primary mb-2" />
                <p className="text-lg italic text-muted-foreground mb-2">
                  {t.quote}
                </p>
                <div className="text-sm font-medium text-primary text-right">
                  — {t.client}
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}
      {/* Pricing Section */}
      <section className={`${styles?.sectionPadding} `} id={"pricing"}>
        <div className={styles?.containerLarge}>
          <div className={styles?.projectsHeaderWrapper}>
            <h2 className={styles?.sectionHeaderLeft}>Pricing Plans</h2>
            <Link href="/pricing">
              <Button variant={"outline"}>
                View All Plans
                <ArrowRight className={"ml-2 h-4 w-4"} />
              </Button>
            </Link>
          </div>
          <FeaturedPricing plans={service?.plans} />
        </div>
      </section>
      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold mb-2">Interested in this service?</h3>
        <p className="text-muted-foreground mb-6">
          Let’s talk about how I can help you with your project.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">
            Contact Me
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

// === Helpers ===

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}

function FeatureList({
  features,
  link,
}: {
  features: string[];
  link?: string;
}) {
  return (
    <div className="space-y-2">
      {features.map((feature, i) => (
        <div key={i} className="flex items-center gap-2 text-sm">
          <Check className="w-4 h-4 text-green-500" />
          {link ? (
            <Link
              href={`/related-services/${properCaseToDash(feature)}-${link}`}
            >
              <span>{feature}</span>
            </Link>
          ) : (
            <span>{feature}</span>
          )}
        </div>
      ))}
    </div>
  );
}
