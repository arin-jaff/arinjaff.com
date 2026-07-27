import React from "react";
import { profile } from "../data/profile";
import PageHeader from "../components/PageHeader";
import { GithubIcon, ExternalLinkIcon, FileTextIcon } from "../components/icons";

function status(project) {
  if (project.wip) return "wip";
  if (project.url) return "live";
  return "source";
}

function Pill({ href, icon: PillIcon, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm transition-colors hover:border-border-strong hover:bg-paper-deep hover:text-accent"
    >
      <PillIcon className="size-4" />
      {children}
    </a>
  );
}

function ProjectRow({ project, number }) {
  const thumbSize = project.showcase ? "h-40 w-40 sm:h-52 sm:w-52" : "h-24 w-24";

  return (
    <article className="py-5 md:py-6">
      <div className="mb-3 flex flex-wrap items-baseline gap-4">
        <span className="specimen-index">{number}</span>
        <span className="label">{project.tagline}</span>
        <span className="label ml-auto">{status(project)}</span>
      </div>

      <div className="flex flex-col gap-5 sm:flex-row">
        {project.thumb && (
          <div className={`archive-mat shrink-0 ${thumbSize}`}>
            <img
              src={project.thumb}
              alt={project.title}
              className={`h-full w-full ${
                project.thumbFit === "left" ? "object-cover object-left" : "object-contain"
              } ${project.wip ? "opacity-40 grayscale" : ""}`}
            />
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-base leading-tight tracking-tight md:text-lg">
              {project.title}
            </h3>
            {project.featured && (
              <span className="label rounded-full bg-accent px-2.5 py-1 text-background">
                featured
              </span>
            )}
          </div>

          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

          {project.tech && (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="label border border-border px-2 py-1">
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-3">
            {project.url && !project.wip && (
              <Pill href={project.url} icon={ExternalLinkIcon}>
                live demo
              </Pill>
            )}
            {project.github && (
              <Pill href={project.github} icon={GithubIcon}>
                github
              </Pill>
            )}
            {project.pdfLink && (
              <Pill href={project.pdfLink} icon={FileTextIcon}>
                proposal pdf
              </Pill>
            )}
            {project.githubRepos?.map((repo) => (
              <Pill key={repo.name} href={repo.url} icon={GithubIcon}>
                {repo.name.toLowerCase()}
              </Pill>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = profile.projects.filter((p) => p.featured);
  const rest = profile.projects.filter((p) => !p.featured);

  return (
    <div className="mx-auto max-w-6xl py-6 md:py-8">
      <PageHeader title="things made" />

      <div className="max-w-3xl space-y-14">
        {featured.length > 0 && (
          <section aria-label="Featured">
            <h2 className="label-strong mb-3">featured</h2>
            <div className="divide-y divide-border border-y border-border">
              {featured.map((project, i) => (
                <ProjectRow
                  key={project.id}
                  project={project}
                  number={String(i + 1).padStart(2, "0")}
                />
              ))}
            </div>
          </section>
        )}

        <section aria-label="Personal and collaborative software projects">
          <h2 className="label-strong mb-3">personal and collaborative</h2>
          <div className="divide-y divide-border border-y border-border">
            {rest.map((project, i) => (
              <ProjectRow
                key={project.id}
                project={project}
                number={String(i + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
