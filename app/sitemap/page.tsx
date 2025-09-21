"use client";
import Link from "next/link";
import { useState } from "react";
import { posts } from "@/constants/blogs";
import { projects } from "@/constants/projects";
import { events } from "@/constants/events";
import { LINKS_GROUPS } from "@/constants/footer";
import { SERVICES } from "@/constants/services";
import { countries } from "@/constants/area-services";

function formatSlug(text: string) {
  return text.toLowerCase().replace(/[\s/]+/g, "-");
}

export default function SitemapStyleLinktreePage() {
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags || [])));
  const categories = Array.from(
    new Set(posts.flatMap((post) => post.category || []))
  );

  // State for toggling countries, cities, and areas
  const [openCountries, setOpenCountries] = useState<Record<string, boolean>>(
    {}
  );
  const [openCities, setOpenCities] = useState<Record<string, boolean>>({});
  const [openAreas, setOpenAreas] = useState<Record<string, boolean>>({});

  const toggleCountry = (slug: string) => {
    setOpenCountries((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  const toggleCity = (slug: string) => {
    setOpenCities((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  const toggleArea = (slug: string) => {
    setOpenAreas((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  return (
    <div className="max-w-6xl mx-auto py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Site Map Links</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🌐 Main Navigation</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {LINKS_GROUPS.flatMap((group) =>
            group.map((link) => (
              <li key={link.path}>
                <Link href={link.path} className=" hover:underline">
                  🔗 {link.name}
                </Link>
              </li>
            ))
          )}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">📝 Blog Posts</h2>
        <ul className="space-y-2">
          {posts.slice(0, 20).map((post) => (
            <li key={post.slug}>
              <Link href={`/blogs/${post.slug}`} className="hover:underline">
                ✍️ {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          📚 Blogs Categories & Tags
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/blogs/category/${formatSlug(cat)}`}
              className="hover:underline "
            >
              📂 {cat}
            </Link>
          ))}
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blogs/tag/${formatSlug(tag)}`}
              className="hover:underline "
            >
              🏷️ {tag}
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">💼 Projects</h2>
        <ul className="space-y-2">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="hover:underline"
              >
                🚀 {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">📅 Events</h2>
        <ul className="space-y-2">
          {events.map((event) => (
            <li key={event.slug}>
              <Link href={`/events/${event.slug}`} className="hover:underline">
                📌 {event.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🌍 Services by Area</h2>
        <div className="space-y-8">
          {countries.map((country) => (
            <div key={country.slug}>
              <button
                type="button"
                className="text-xl font-bold mt-6 mb-2 flex items-center gap-2"
                onClick={() => toggleCountry(country.slug)}
              >
                <span>{openCountries[country.slug] ? "▼" : "▶"}</span>
                {country.name}
              </button>
              {openCountries[country.slug] && (
                <>
                  <ul className="ml-4 mb-4 space-y-1">
                    {SERVICES.map((service) => (
                      <li key={service?.slug}>
                        <Link
                          href={`/services/${service?.slug}/${country.slug}`}
                          className="hover:underline"
                        >
                          👨🏻‍🔧 {service?.title} in {country.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {country.cities.map((city) => (
                    <div key={city.slug} className="ml-6">
                      <button
                        type="button"
                        className="text-lg font-semibold mt-4 mb-1 flex items-center gap-2"
                        onClick={() => toggleCity(city.slug)}
                      >
                        <span>{openCities[city.slug] ? "▼" : "▶"}</span>
                        {city.name}
                      </button>
                      {openCities[city.slug] && (
                        <>
                          <ul className="ml-4 mb-2 space-y-1">
                            {SERVICES.map((service) => (
                              <li key={service?.slug}>
                                <Link
                                  href={`/services/${service?.slug}/${country.slug}/${city.slug}`}
                                  className="hover:underline"
                                >
                                  👨🏻‍🔧 {service?.title} in {city.name},{" "}
                                  {country.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          {city.areas.map((area) => (
                            <div key={area.slug} className="ml-6">
                              <button
                                type="button"
                                className="font-medium mt-2 mb-1 flex items-center gap-2"
                                onClick={() => toggleArea(area.slug)}
                              >
                                <span>{openAreas[area.slug] ? "▼" : "▶"}</span>
                                {area.name}
                              </button>
                              {openAreas[area.slug] && (
                                <ul className="ml-4 space-y-1">
                                  {SERVICES.map((service) => (
                                    <li key={service?.slug}>
                                      <Link
                                        href={`/services/${service?.slug}/${country.slug}/${city.slug}/${area.slug}`}
                                        className="hover:underline"
                                      >
                                        👨🏻‍🔧 {service?.title} in {area.name},{" "}
                                        {city.name}, {country.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  ))}
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
