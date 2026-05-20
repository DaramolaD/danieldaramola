import { CtaBand } from "@/components/sections/CtaBand";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { siteConfig } from "@/lib/constants";
import { projects } from "@/lib/projects";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Work",
  description:
    "Software engineering case studies — healthcare SaaS, logistics platforms, fintech dashboards, and productivity tools.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main id="main-content" className="bg-surface/60 py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          as="h1"
          label="Selected work"
          line1="Case studies &"
          line2="selected projects."
        />
        <div className="grid gap-x-10 gap-y-24 md:grid-cols-2 md:gap-y-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
      <CtaBand
        eyebrow="Similar work?"
        title={
          <>
            Let&apos;s talk about{" "}
            <span className="italic text-accent">your product.</span>
          </>
        }
        description="Share where you are today, idea, MVP, or production, and what you need from engineering."
        primaryLabel="Start a conversation"
        primaryHref={`mailto:${siteConfig.email}?subject=Project%20inquiry`}
        secondaryLabel="Back to home"
        secondaryHref="/"
      />
    </main>
  );
}
