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
import { Check, ArrowRight, Quote } from "lucide-react";
import { toProperCase } from "@/lib/utils";

export async function generateStaticParams() {
  const allSlugs = SERVICES.flatMap((service) => service?.slug || []);
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug?.includes(params.slug));
  if (!service) return {};
  return {
    title: `${service?.title} | Syed Ali Naqi Hasni`,
    description: service?.description,
    openGraph: {
      title: `${service?.title} | Syed Ali Naqi Hasni`,
      description: service?.description,
      url: `https://www.syedalinaqihasni.com/${params.slug}`,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug?.includes(params.slug));
  if (!service) return notFound();

  return (
    <section className="max-w-5xl mx-auto py-24 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-5xl mb-4">{service?.icon}</div>
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
            {/* <Section title="Technologies Used">
              <div className="flex flex-wrap gap-2">
                {service?.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Section> */}
            <Section title="Related Serivices">
              <div className="flex flex-wrap gap-2">
                {service?.servs.map((serv) => (
                  <Link href={serv} key={serv}>
                    <Badge variant="secondary" className="text-xs">
                      {toProperCase(serv).replace(/-/g, " ")}
                    </Badge>
                  </Link>
                ))}
              </div>
            </Section>
          </div>
        </div>
      )}
      {/* Pricing */}
      {/* <Section title="Pricing & Timeline">
        <div className="flex justify-between items-center border p-4 rounded-lg bg-muted/50">
          <span className="text-lg font-bold text-primary">
            {service?.startingPrice}
          </span>
          <span className="text-sm text-muted-foreground">
            {service?.deliveryTime}
          </span>
        </div>
      </Section> */}

      {/* Deliverables + Requirements side by side */}
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
      {service?.detailedDescription && (
        <Section title="More About This Service">
          <div
            className="prose prose-neutral max-w-none"
            dangerouslySetInnerHTML={{ __html: service?.detailedDescription }}
          />
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

      {/* Previous Projects */}
      {/* {service?.previousProjects && (
        <Section title="Past Projects">
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            {service?.previousProjects.map((project, i) => (
              <li key={i}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  {project.title}
                </a>{" "}
                – {project.description}
              </li>
            ))}
          </ul>
        </Section>
      )} */}

      {/* CTA */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold mb-2">Interested in this service?</h3>
        <p className="text-muted-foreground mb-6">
          Let’s talk about how I can help you with your project.
        </p>
        <Button size="lg" asChild>
          <Link href="https://www.syedalinaqihasni.com/contact">
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

function FeatureList({ features }: { features: string[] }) {
  return (
    <div className="space-y-2">
      {features.map((feature, i) => (
        <div key={i} className="flex items-center gap-2 text-sm">
          <Check className="w-4 h-4 text-green-500" />
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
}
