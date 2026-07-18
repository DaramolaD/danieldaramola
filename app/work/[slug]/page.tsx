import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/sections/ProjectDetail";
import { getProject, projects } from "@/lib/projects";
import { createMetadata, projectJsonLd } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  console.log(
    "PROJECT SLUGS:",
    projects.map((p) => p.slug),
  );
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return createMetadata({
    title: `${project.name} — ${project.tag}`,
    description: project.tagline,
    path: `/work/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) notFound();

  const jsonLd = projectJsonLd(project);

  return (
    <main id="main-content" className="bg-canvas pt-8 md:pt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <div className="container-site pb-[var(--section-y)]">
        <ProjectDetail project={project} />
      </div>
    </main>
  );
}
