import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";
import { getAdjacentProjects } from "@/lib/projects";
import type { Project } from "@/lib/projectsReal";

function DetailBlock({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
        {label}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-border pt-5">
      <p className="text-xs uppercase tracking-[0.18em] text-ink-muted">
        {label}
      </p>
      <p className="mt-2 text-sm font-medium text-ink md:text-base">{value}</p>
    </div>
  );
}

export function ProjectDetail({ project }: { project: Project }) {
  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <article>
      <header className="border-b border-border pb-10 md:pb-14">
        <Link
          href="/work"
          className="inline-flex min-h-10 items-center text-sm font-medium text-ink-muted transition-colors hover:text-ink"
        >
          ← All work
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
          {project.n} — {project.kind} · {project.year}
        </p>
        <h1 className="mt-4 max-w-full font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] tracking-tight text-ink">
          {project.title}
        </h1>
        <p className="mt-6 max-w-full text-base leading-relaxed text-ink-muted md:text-lg">
          {project.summary}
        </p>

        <dl className="mt-10 grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-4">
          <MetaItem label="Role" value={project.role} />
          <MetaItem label="Timeline" value={project.timeline} />
          <MetaItem label="Built for" value={project.team} />
          <MetaItem label="Status" value={project.status} />
        </dl>

        {(project.liveUrl || project.repoUrl) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <Button href={project.liveUrl} variant="secondary">
                View live
              </Button>
            ) : null}
            {project.repoUrl ? (
              <Button href={project.repoUrl} variant="ghost">
                Repository
              </Button>
            ) : null}
          </div>
        )}
      </header>

      <figure className="relative mt-12 aspect-video overflow-hidden rounded-sm border border-black/8 md:mt-16">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority
          sizes="(max-width: 1400px) 100vw, 1280px"
          className="object-cover"
        />
      </figure>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
        {project.outcomes.map((outcome) => (
          <div
            key={outcome.label}
            className="rounded-sm border border-border bg-surface/80 px-5 py-6"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-ink-muted">
              {outcome.label}
            </p>
            <p className="mt-2 font-serif text-2xl tracking-tight text-ink md:text-3xl">
              {outcome.metric}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-14 border-t border-border pt-16 md:mt-20 md:grid-cols-2 md:gap-16 md:pt-20">
        <DetailBlock label="The problem">
          <p className="text-base leading-relaxed text-ink-muted md:leading-[1.75]">
            {project.problem}
          </p>
        </DetailBlock>
        <DetailBlock label="The solution">
          <p className="text-base leading-relaxed text-ink-muted md:leading-[1.75]">
            {project.solution}
          </p>
        </DetailBlock>

        {project.gallery?.length ? (
          <section className="mt-2 md:col-span-2 md:mt-6">
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                Product gallery
              </h2>
              <p className="text-xs tabular-nums text-ink-muted">
                {String(project.gallery.length).padStart(2, "0")} screens
              </p>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4 space-y-6 md:space-y-8">
              {project.gallery.map((item, index) => (
                <figure
                  key={item.alt}
                  className="overflow-hidden m-0 rounded-sm border border-black/8 bg-surface shadow-[0_16px_50px_-30px_rgba(26,26,26,0.3)]"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    sizes="(max-width: 1400px) 100vw, 1280px"
                    className="h-auto w-full"
                  />
                  {/* <figcaption className="flex gap-4 border-t border-border px-4 py-3 text-xs text-ink-muted md:px-5">
                    <span className="tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item.alt}</span>
                  </figcaption> */}
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        {/* ============================ */}

        <DetailBlock label="Overview">
          <div className="space-y-5">
            {project.overview.map((item) => (
              <p
                key={item}
                className="text-base leading-relaxed text-ink-muted"
              >
                {item}
              </p>
            ))}
          </div>
        </DetailBlock>

        <DetailBlock label="Challenges">
          <ul className="space-y-4">
            {project.challenge.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 size-1.5 rounded-full bg-accent" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </DetailBlock>
        {/* ------- */}

        <DetailBlock label="Key Features">
          <ul className="grid gap-3 md:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="rounded border border-border p-4">
                {feature}
              </li>
            ))}
          </ul>
        </DetailBlock>

        <DetailBlock label="Approach">
          <div className="grid gap-6 md:grid-cols-2">
            {project.approach.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </DetailBlock>

        <DetailBlock label="Project Impact">
          <ul className="space-y-4">
            {project.impact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </DetailBlock>

        <DetailBlock label="Lessons Learned">
          <ul className="space-y-4">
            {project.learnings.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </DetailBlock>

        {/* ------ */}
      </div>

      <div className="mt-16 grid gap-14 border-t border-border pt-16 md:mt-20 md:grid-cols-12 md:gap-16 md:pt-20">
        <DetailBlock label="What I owned" className="md:col-span-5">
          <ul className="space-y-4">
            {project.responsibilities.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-ink-muted md:text-base"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </DetailBlock>

        <DetailBlock label="Stack" className="md:col-span-7">
          <ul className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li key={tech}>
                <span className="inline-block rounded-full border border-border bg-canvas px-3.5 py-1.5 text-sm font-medium text-ink">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </DetailBlock>
      </div>

      <DetailBlock
        label="Engineering highlights"
        className="mt-16 border-t border-border pt-16 md:mt-20 md:pt-20"
      >
        <ol className="grid gap-6 md:grid-cols-3 md:gap-8">
          {project.highlights.map((item, index) => (
            <li
              key={item.title}
              className="rounded-sm border border-border bg-surface/50 p-6 md:p-7"
            >
              <span className="text-xs tabular-nums text-ink-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-serif text-xl tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </DetailBlock>

      <DetailBlock
        label="How we shipped it"
        className="mt-16 border-t border-border pt-16 md:mt-20 md:pt-20"
      >
        <ol className="space-y-0 divide-y divide-border border-y border-border">
          {project.phases.map((phase, index) => (
            <li
              key={phase.title}
              className="grid gap-3 py-8 sm:grid-cols-12 sm:items-baseline sm:gap-6"
            >
              <span className="text-xs tabular-nums tracking-[0.16em] text-ink-muted sm:col-span-2">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-xl tracking-tight text-ink sm:col-span-3">
                {phase.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-muted sm:col-span-7 md:text-base">
                {phase.description}
              </p>
            </li>
          ))}
        </ol>
      </DetailBlock>

      <footer className="mt-16 flex flex-col gap-10 border-t border-border pt-16 md:mt-20 md:flex-row md:items-center md:justify-between md:pt-20">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">
            Interested in similar work?
          </p>
          <p className="mt-3 max-w-md text-sm text-ink-muted">
            I take on full-product builds, platform work, and long-term
            partnerships with founders and small teams.
          </p>
          <div className="mt-6">
            <Button href={`mailto:${siteConfig.email}`}>
              Discuss a project
            </Button>
          </div>
        </div>

        <nav
          className="flex flex-col gap-4 sm:flex-row sm:gap-8"
          aria-label="Other case studies"
        >
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group min-w-0 flex-1 rounded-sm border border-border p-5 transition-colors hover:border-ink/25"
            >
              <span className="text-xs uppercase tracking-[0.18em] text-ink-muted">
                Previous
              </span>
              <span className="mt-2 block font-serif text-lg text-ink group-hover:text-accent">
                {prev.title} →
              </span>
            </Link>
          ) : null}
          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group min-w-0 flex-1 rounded-sm border border-border p-5 transition-colors hover:border-ink/25"
            >
              <span className="text-xs uppercase tracking-[0.18em] text-ink-muted">
                Next
              </span>
              <span className="mt-2 block font-serif text-lg text-ink group-hover:text-accent">
                {next.title} →
              </span>
            </Link>
          ) : null}
        </nav>
      </footer>
    </article>
  );
}
