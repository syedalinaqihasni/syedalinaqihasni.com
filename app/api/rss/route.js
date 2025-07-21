import { posts } from "@/constants/blogs";
import { NextResponse } from "next/server";
import RSS from "rss";

export async function GET() {
    const feed = new RSS({
        title: "My Blog",
        description: "Latest articles from my blog",
        site_url: "https://www.syedalinaqihasni.com",
        feed_url: "https://www.syedalinaqihasni.com/api/rss",
        language: "en",
        pubDate: new Date(),
        ttl: '60',
        image_url: "https://www.syedalinaqihasni.com/about-us-syed-ali-naqi-hasni.webp", // Example
        copyright: "Copyright © Syed Ali Naqi Hasni",
        managingEditor: "Syed Ali Naqi Hasni",
        webMaster: "Syed Ali Naqi Hasni",
    });

    posts
    .slice() // create a shallow copy to avoid mutating the original
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .forEach(post => {
        feed.item({
            title: post?.title,
            description: post?.excerpt,
            url: `https://www.syedalinaqihasni.com/blogs/${post?.slug}`,
            guid: post?.id,
            author: post?.author || 'Syed Ali Naqi Hasni',
            date: post?.publishedAt,
            categories: [post?.category, ...(post?.tags || [])],
            enclosure: post?.image
                ? {
                        url: post?.image,
                        type: "image/jpeg",
                    }
                : undefined,
            custom_elements: [
                { "content:encoded": post?.content || "" },
                { "dc:creator": post?.author || "Syed Ali Naqi Hasni" },
                { "media:thumbnail": [{ _attr: { url: post?.image || "" } }] },
            ],
        });
    });

    const xml = feed.xml({ indent: true });

    return new NextResponse(xml, {
        headers: {
            "Content-Type": "application/rss+xml",
        },
    });
}
