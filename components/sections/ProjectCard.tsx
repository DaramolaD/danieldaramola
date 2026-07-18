"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/motion/FadeUp";
import { RuleLine } from "@/components/motion/RuleLine";
import type { Project } from "@/lib/projectsReal";

type Props = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: Props) {
  return (
    <FadeUp delay={0.08 * (index % 4)} y={24}>
      <article className={index % 2 ? "md:mt-24" : ""}>
        <Link href={`/work/${project.slug}`} className="group block">
          <div className="overflow-hidden rounded-md border border-border">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1400}
              height={900}
              className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <RuleLine className="mt-6" />

          <div className="mt-6 flex items-start justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">
                {project.kind}
              </p>

              <h3 className="mt-2 font-serif text-3xl tracking-tight text-ink">
                {project.title}
              </h3>
            </div>
          </div>

          <p className="mt-4 max-w-xl leading-relaxed text-ink-muted">
            {project.summary}
          </p>

          <div className="mt-6 flex items-center gap-3 text-sm text-ink-muted">
            <span>{project.role}</span>

            <span>•</span>

            <span>{project.timeline}</span>
          </div>
          <p className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent">
            View Case Study
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </p>
        </Link>
      </article>
    </FadeUp>
  );
}
