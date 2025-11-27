import { notFound } from "next/navigation";
import { Metadata } from "next";
import { TECHNOLOGIES } from "@/constants/technologies";
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
import { dashToProperCase, properCaseToDash } from "@/lib/utils";
import HtmlRenderer from "@/components/HtmlRenderer";
import FeaturedPricing from "@/components/home/featured-pricing";
import { countries } from "@/constants/countries";
import { generateDynamicMetadata } from "@/lib/generateDynamicMetadata";

export async function generateMetadata({
  params,
}: {
  params: { slug: string; country?: string; city?: string; area?: string };
}): Promise<Metadata> {
  const Technology = TECHNOLOGIES.find((s) => s.slug?.includes(params?.slug));
  if (!Technology) return {};

  // Convert dashed params to proper case
  const country = params.country ? dashToProperCase(params.country) : undefined;
  const city = params.city ? dashToProperCase(params.city) : undefined;
  const area = params.area ? dashToProperCase(params.area) : undefined;

  // Create location string for SEO
  const locationParts = [area, city, country].filter(Boolean);
  const location = locationParts?.length
    ? ` in ${locationParts?.join(", ")}`
    : "";

  const title = `${Technology?.title}${location} | Syed Ali Naqi Hasni`;
  // const description = Technology?.description;

  // Build dynamic path for full URL
  const pathParts = ["/technologies", params?.slug, country, city, area].filter(
    Boolean
  );
  const path = pathParts.join("/");

  return generateDynamicMetadata({
    title,
    // description,
    path,
  });
}

// export async function generateStaticParams() {
//   const params: {
//     slug: string;
//     country: string;
//     city: string;
//     area: string;
//   }[] = [];

//   for (const country of countries) {
//     for (const city of country.cities) {
//       for (const area of city.areas) {
//         for (const Technology of TECHNOLOGIES) {
//           params?.push({
//             slug: Technology?.slug,
//             country: country?.slug,
//             city: city?.slug,
//             area: area?.slug,
//           });
//         }
//       }
//     }
//   }

//   return params;
// }

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

export default function TechnologyPage({
  params,
}: {
  params: { slug: string; country?: string; city?: string; area?: string };
}) {
  const Technology = TECHNOLOGIES.find((s) => s.slug?.includes(params?.slug));
  if (!Technology) return notFound();
  const { country, city, area } = params;

  // Validate country, city, area
  let countryObj, cityObj, areaObj;

  if (params?.country) {
    countryObj = countries.find((c) => c.slug === params?.country);
    if (!countryObj) return notFound();
    if (params?.city) {
      cityObj = countryObj.cities.find((ct) => ct.slug === params?.city);
      if (!cityObj) return notFound();
      if (params?.area) {
        areaObj = cityObj.areas.find((a) => a.slug === params?.area);
        if (!areaObj) return notFound();
      }
    }
  }

  return (
    <section className="max-w-5xl mx-auto py-24 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          {Technology?.title} in {area ? dashToProperCase(area) : ""}{" "}
          {city ? dashToProperCase(city) : ""}{" "}
          {country ? dashToProperCase(country) : ""}
        </h1>
      </div>
      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold mb-2">Interested in this Technology?</h3>
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
              href={`/technologies/${properCaseToDash(feature)}-${link}`}
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
