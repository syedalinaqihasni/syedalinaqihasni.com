import { Metadata } from "next";
import BlogsList from "@/components/blogs/blogs-list";
import { posts } from "@/constants/blogs";
import { dashToProperCase } from "@/lib/utils";

// Optional: You can add specific overrides here
const DESCRIPTION_OVERRIDES: Record<string, string> = {
  tutorials: "These are tutorial blogs to help you learn by doing.",
  freelance:
    "These are freelance blogs about client work, projects, and lifestyle.",
  design: "These are design blogs focused on UI/UX and creative thinking.",
  // Add more if needed
};

const styles = {
  container: "container mx-auto px-4 py-32 md:py-40",
  wrapper: "max-w-6xl mx-auto",
  header: "text-center mb-16",
  title: "text-4xl md:text-5xl font-bold mb-6",
  description: "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto",
};

// Generate <head> metadata dynamically
export async function generateMetadata({
  params,
}: {
  params: { tag: string };
}): Promise<Metadata> {
  const tag = params?.tag;
  const title = `${dashToProperCase(tag)} Blogs`;
  const description =
    DESCRIPTION_OVERRIDES[tag.toLowerCase()] ||
    `These are ${tag.toLowerCase()} blogs for curious minds.`;

  return {
    title,
    description,
  };
}

// Generate static params for all tags
// export async function generateStaticParams() {
//   // Collect all unique tags from posts
//   const tagsSet = new Set<string>();
//   posts.forEach(post => {
//     post.tags.forEach(tag => {
//       tagsSet.add(tag.toLowerCase().replace(/[\s/]+/g, '-'));
//     });
//   });

//   // Return params in the format expected by Next.js
//   return Array.from(tagsSet).map(tag => ({ tag }));
// }

// Server component
export default async function Page({ params }: { params: { tag: string } }) {
  const tag = params?.tag;

  const tagedPosts = posts.filter((post) =>
    post?.tags?.some((c) =>
      c
        .toLowerCase()
        .replace(/[\s/]+/g, "-")
        .includes(tag)
    )
  );

  const title = `${dashToProperCase(tag)} Blogs`;
  const description =
    DESCRIPTION_OVERRIDES[tag] ||
    `These are ${dashToProperCase(tag)} Blogs for curious minds.`;

  return (
    <div className={styles?.container}>
      <div className={styles?.wrapper}>
        <div className={styles?.header}>
          <h1 className={styles?.title}>{title}</h1>
          <p className={styles?.description}>{description}</p>
        </div>
        <BlogsList posts={tagedPosts} />
      </div>
    </div>
  );
}
