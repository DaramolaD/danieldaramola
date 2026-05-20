"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/motion/FadeUp";
import { RuleLine } from "@/components/motion/RuleLine";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <FadeUp delay={0.08 * (index % 4)} y={24}>
      <article className={index % 2 === 1 ? "md:mt-32" : ""}>
        <Link href={`/work/${project.slug}`} className="group block">
          <div className="overflow-hidden rounded-sm bg-border/40">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1280}
              height={960}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="aspect-4/3 w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
          </div>
          <RuleLine className="mt-6" />
          <div className="mt-6 flex items-baseline justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">
                {project.n} — {project.kind}
              </p>
              <h3 className="mt-3 font-serif text-3xl tracking-tight text-ink">
                {project.title}
                <span className="ml-2 inline-block text-ink-muted transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </h3>
            </div>
            <span className="shrink-0 text-xs text-ink-muted">{project.year}</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
            {project.blurb}
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent opacity-0 transition-opacity group-hover:opacity-100">
            Read case study →
          </p>
        </Link>
      </article>
    </FadeUp>
  );
}
