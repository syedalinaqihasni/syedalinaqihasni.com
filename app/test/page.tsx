"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// constants/offlineServices.ts

export type OfflineService = {
  title: string;
  description: string;
  pricing: {
    min: number;
    max: number;
    currency: string;
    unit: string;
  };
  expectedSalary: {
    min: number;
    max: number;
    currency: string;
    unit: string;
  };
  relatedJobs: string[];
  tags?: string[];
};

export const offlineServices: OfflineService[] = [
  {
    title: "WordPress Training (1-on-1)",
    description:
      "Personalized WordPress training focused on theme customization, plugins, and site optimization.",
    pricing: { min: 5000, max: 15000, currency: "PKR", unit: "per session" },
    expectedSalary: {
      min: 50000,
      max: 100000,
      currency: "PKR",
      unit: "per month",
    },
    relatedJobs: ["WordPress Developer", "Site Administrator", "Freelancer"],
    tags: ["Lahore", "Evening", "Beginner"],
  },
  {
    title: "React.js Bootcamp",
    description:
      "Intensive React.js training to help learners build full-fledged SPAs with modern practices.",
    pricing: { min: 15000, max: 30000, currency: "PKR", unit: "one-time" },
    expectedSalary: {
      min: 80000,
      max: 200000,
      currency: "PKR",
      unit: "per month",
    },
    relatedJobs: [
      "React Developer",
      "MERN Stack Developer",
      "Frontend Engineer",
    ],
    tags: ["Karachi", "Weekend", "Intermediate"],
  },
  {
    title: "JavaScript Fundamentals",
    description:
      "Offline hands-on training covering ES6+, DOM, and async concepts.",
    pricing: { min: 8000, max: 20000, currency: "PKR", unit: "per course" },
    expectedSalary: {
      min: 60000,
      max: 150000,
      currency: "PKR",
      unit: "per month",
    },
    relatedJobs: ["JavaScript Developer", "Web Developer", "Frontend Engineer"],
    tags: ["Karachi", "Weekday", "Beginner"],
  },
];
const uniqueTags = Array.from(
  new Set(offlineServices.flatMap((s) => s.tags || []))
);

export default function OfflineServicesPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredServices = activeFilter
    ? offlineServices.filter((s) => s.tags?.includes(activeFilter))
    : offlineServices;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold mb-4">
        Offline Services, Pricing & Career Scope
      </h1>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Button
          size="sm"
          variant={activeFilter === null ? "default" : "outline"}
          onClick={() => setActiveFilter(null)}
        >
          All
        </Button>
        {uniqueTags.map((tag) => (
          <Button
            key={tag}
            size="sm"
            variant={activeFilter === tag ? "default" : "outline"}
            onClick={() => setActiveFilter(tag)}
          >
            {tag}
          </Button>
        ))}
      </div>

      {/* Service List */}
      {filteredServices.map((service, idx) => (
        <Card key={idx}>
          <CardContent className="p-6 space-y-2">
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="text-muted-foreground">{service.description}</p>

            <div className="text-sm">
              <p>
                <strong>Pricing:</strong> {service.pricing.currency}{" "}
                {service.pricing.min.toLocaleString()} -{" "}
                {service.pricing.max.toLocaleString()} ({service.pricing.unit})
              </p>
              <p>
                <strong>Expected Salary:</strong>{" "}
                {service.expectedSalary.currency}{" "}
                {service.expectedSalary.min.toLocaleString()} -{" "}
                {service.expectedSalary.max.toLocaleString()} (
                {service.expectedSalary.unit})
              </p>
              <p>
                <strong>Related Jobs:</strong>{" "}
                {service.relatedJobs.map((job, i) => (
                  <span key={i}>
                    {job}
                    {i < service.relatedJobs.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
            </div>

            {service.tags?.length && (
              <div className="flex flex-wrap gap-2 pt-2">
                {service.tags.map((tag, i) => (
                  <Badge key={i} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
