"use client";

import { useEffect } from "react";
import { event } from "@/lib/gtag";

export default function SectionTracker() {
  useEffect(() => {
    const viewedSections = new Set<string>();
    const sections = ["home", "about", "portfolio", "testimonials"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
            const sectionId = entry.target.id;
          if (entry.isIntersecting && !viewedSections.has(sectionId)) {
            viewedSections.add(sectionId)
            event({
              action: "section_view",
              params: {
                section_id: sectionId,
              },
            });
            console.log("👁️ Section viewed:", sectionId);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
