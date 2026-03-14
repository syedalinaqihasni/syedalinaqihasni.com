import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.syedalinaqihasni.com";

  // TODO → Replace with your DB / Sanity / Prisma query
  const blogs = [
    {
      title: "Full Feature Blog Post",
      slug: "full-feature-post",
      excerpt: "This post contains all rich metadata for RSS.",
      content: "<p>This is the full HTML content of the blog post.</p>",
      updatedAt: "2025-01-15",
      publishedAt: "2025-01-12",
      author: {
        name: "Syed Ali",
        email: "syed@example.com",
      },
      categories: ["Next.js", "Web Development", "RSS"],
      tags: ["nextjs", "seo", "rss"],
      featuredImage: "https://www.syedalinaqihasni.com/images/post1.jpg",
      thumbnail: "https://www.syedalinaqihasni.com/images/thumb-post1.jpg",
      enclosure: {
        url: "https://www.syedalinaqihasni.com/audio/podcast1.mp3",
        length: "12345678",
        type: "audio/mpeg",
      },
    },
  ];

  const items = blogs
    .map((post) => {
      const categories = post.categories
        ?.map((c) => `<category><![CDATA[${c}]]></category>`)
        .join("");

      const tags = post.tags
        ?.map((t) => `<category><![CDATA[${t}]]></category>`)
        .join("");

      return `
        <item>
          <title><![CDATA[${post.title}]]></title>

          <link>${baseUrl}/blog/${post.slug}</link>

          <guid isPermaLink="false">${baseUrl}/blog/${post.slug}</guid>

          <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
          <lastBuildDate>${new Date(post.updatedAt).toUTCString()}</lastBuildDate>

          <description><![CDATA[${post.excerpt}]]></description>

          <content:encoded><![CDATA[${post.content}]]></content:encoded>

          ${post?.author ? `<author>${post.author.email} (${post.author.name})</author>` : ""}

          ${categories || ""}
          ${tags || ""}

          ${
            post.featuredImage
              ? `<media:content url="${post.featuredImage}" medium="image"/>`
              : ""
          }

          ${
            post.thumbnail
              ? `<media:thumbnail url="${post.thumbnail}" />`
              : ""
          }

          ${
            post.enclosure
              ? `<enclosure url="${post.enclosure.url}" length="${post.enclosure.length}" type="${post.enclosure.type}" />`
              : ""
          }

        </item>
      `;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss 
      version="2.0"
      xmlns:atom="http://www.w3.org/2005/Atom"
      xmlns:content="http://purl.org/rss/1.0/modules/content/"
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:media="http://search.yahoo.com/mrss/"
    >
      <channel>

        <!-- Required -->
        <title>Your Blog RSS Feed</title>
        <link>${baseUrl}</link>
        <description>Latest blog posts from our website</description>
        <language>en-us</language>

        <!-- Atom self-link -->
        <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>

        <!-- Advanced metadata -->
        <copyright><![CDATA[
          © ${new Date().getFullYear()} Your Blog Name. All rights reserved.
        ]]></copyright>

        <generator>Next.js RSS Generator</generator>
        <ttl>60</ttl>

        <!-- Editor / Admin -->
        <managingEditor>editor@yourdomain.com (Site Admin)</managingEditor>
        <webMaster>support@yourdomain.com (Support Team)</webMaster>

        <!-- Channel image -->
        <image>
          <url>${baseUrl}/logo.png</url>
          <title>Your Blog RSS Feed</title>
          <link>${baseUrl}</link>
        </image>

        ${items}
      </channel>
    </rss>
  `;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
