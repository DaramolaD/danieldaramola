import { ProjectCard } from "@/components/sections/ProjectCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { projects } from "@/lib/projects";

export function ProjectGrid() {
  return (
    <section id="work" className="bg-surface/60 py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          label="03 — Selected work"
          line1="A small set of projects, chosen"
          line2="for what they taught me."
        />

        <div className="grid gap-x-10 gap-y-24 md:grid-cols-2 md:gap-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
