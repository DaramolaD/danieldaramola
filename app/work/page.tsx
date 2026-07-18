import { ProjectCard } from "@/components/sections/ProjectCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
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
    <main id="main-content" className="bg-surface/60 py-32 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          as="h1"
          label="Portfolio"
          line1="Building products"
          line2="that solve real problems."
        />

        <div className="grid gap-x-10 gap-y-24 md:grid-cols-2 md:gap-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
