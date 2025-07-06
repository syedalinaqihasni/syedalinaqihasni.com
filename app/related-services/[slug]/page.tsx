import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SERVICES } from "@/constants/services";
import { dashToProperCase } from "@/lib/utils";
import { generateDynamicMetadata } from "@/lib/generateDynamicMetadata";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params?.slug);
  if (!service) return {};

  const slug = params.slug ? dashToProperCase(params.slug) : undefined;

  const title = `${service?.title}${slug ? ` in ${slug}` : ""} | Syed Ali Naqi Hasni`;
  const description = service?.description;

  const pathParts = ['/services', params?.slug].filter(Boolean);
  const path = pathParts.join('/');

  return generateDynamicMetadata({
    title,
    description,
    path,
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

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return (
    <section className="max-w-5xl mx-auto py-24 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          {slug ? dashToProperCase(slug) : ""}
        </h1>
      </div>
    </section>
  );
}
