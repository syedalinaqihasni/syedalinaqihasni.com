import Image from "next/image";
import { ArrowRight} from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateDynamicMetadata } from "@/lib/generateDynamicMetadata";
import { CONSTANT, posts } from "@/constants/blogs";
import { notFound } from "next/navigation";
import SingleBlogPage from "@/components/blogs/SingleBlogPage";
import StructuredData from "@/components/StructuredData";
import {
  generateBlogPostSchema,
  generateBreadcrumbSchema,
} from "@/constants/structuredData";
import Link from "next/link";
import FeaturedBlogs from "@/components/blogs/featured-blogs";

const styles2 = {
  sectionPadding: "py-2 px-4",
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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts?.find((p) => p?.slug === params?.slug);
  if (!post) return notFound();

  return generateDynamicMetadata({
    title: post?.title,
    description: post?.excerpt,
    image: post?.image ?post?.image : 'https://www.syedalinaqihasni.com/apple-icon-180x180.png',
    publishedAt: post?.publishedAt,
    path: `https://www.syedalinaqihasni.com/blogs/${post?.slug}`,
  });
}

// Correct version of generateStaticParams
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const post = posts.find((post) => post.slug === params?.slug);
  if (!post) return notFound();

  const blogPostSchema = generateBlogPostSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.syedalinaqihasni.com" },
    { name: "Blogs", url: "https://www.syedalinaqihasni.com/blogs" },
    {
      name: post?.title,
      url: `https://www.syedalinaqihasni.com/blogs/${post?.slug}`,
    },
  ]);

  return (
    <>
      <StructuredData data={blogPostSchema} />
      <StructuredData data={breadcrumbSchema} />
      <SingleBlogPage post={post} />
      <div className="container mx-auto">
        {/* Blogs Section */}
        {posts?.length != 0 && (
          <section className={`${styles2?.sectionPadding}`} id={"blogs"}>
            <div className={styles2?.containerLarge}>
              <div className={styles2?.projectsHeaderWrapper}>
                <h2 className={styles2?.sectionHeaderLeft}>Recent Blogs</h2>
                <Link href={"https://www.syedalinaqihasni.com/blogs"}>
                  <Button variant={"outline"}>
                    View All Blogs
                    <ArrowRight className={"ml-2 h-4 w-4"} />
                  </Button>
                </Link>
              </div>
              <FeaturedBlogs posts={posts} />
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Page;
