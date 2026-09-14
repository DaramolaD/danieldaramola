import { ProjectCard } from "@/components/sections/ProjectCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { projects } from "@/lib/projects";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Work",
  description:
    "Software engineering case studies: PropTech SaaS, fuel logistics platforms, and operational dashboards.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main id="main-content" className="bg-canvas py-20 md:py-28">
      <div className="mx-auto max-w-[1360px] px-6 md:px-10">
        <SectionHeading
          as="h1"
          label="Portfolio"
          line1="Engineering products"
          line2="that power real operations."
        />

        <div className="mt-16 grid gap-x-10 gap-y-20 md:grid-cols-2 md:gap-y-28">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
