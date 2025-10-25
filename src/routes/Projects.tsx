import { Link, useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import projects from '../data/projects.json';
import Card from '../components/Card';
import { SEO } from '../lib/seo';
import { withBase } from '../lib/withBase';

export default function Projects() {
  const [searchParams] = useSearchParams();
  const skillFilter = searchParams.get('skill');
  const normalizedSkillFilter = skillFilter?.toLowerCase().trim();

  const filteredProjects = useMemo(() => {
    if (!normalizedSkillFilter) {
      return projects;
    }

    return projects.filter((project) => {
      const searchableText = [
        project.title,
        project.summary,
        ...(project.stack ?? []),
        ...(project.highlights ?? []),
        ...(project.problem ?? []),
        ...(project.approach ?? []),
        ...(project.results ?? [])
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return searchableText.includes(normalizedSkillFilter);
    });
  }, [normalizedSkillFilter]);

  return (
    <div className="space-y-12">
      <SEO title="Projects" description="Mission control software, telemetry pipelines, and real-time monitoring systems." path="/projects" />
      <header className="space-y-4 text-center">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Projects & Case Studies</h1>
        <p className="mx-auto max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Each project accelerates mission tempo with data-driven telemetry, resilient communications, and operator-centered tooling.
        </p>
        {skillFilter && (
          <div className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-full border border-accent/30 bg-accent/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-accent">
            <span>Filtering by skill: {skillFilter}</span>
            <Link to="/projects" className="text-[10px] font-bold uppercase tracking-widest text-accent/80 hover:text-accent">
              Clear
            </Link>
          </div>
        )}
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <Card key={project.slug} title={project.title} description={project.summary} tags={project.stack}>
            <div className="space-y-4">
              <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
                <img
                  src={withBase(project.images[0])}
                  alt={`${project.title} preview`}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <p className="font-semibold text-slate-900 dark:text-white">Highlights</p>
                <ul className="list-inside list-disc space-y-1">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                {project.links.github && (
                  <a className="text-accent hover:text-accent/80" href={project.links.github} target="_blank" rel="noreferrer">
                    GitHub →
                  </a>
                )}
                {project.links.demo && (
                  <a className="text-accent hover:text-accent/80" href={project.links.demo} target="_blank" rel="noreferrer">
                    Demo →
                  </a>
                )}
                {project.links.source && (
                  <a className="text-accent hover:text-accent/80" href={project.links.source} target="_blank" rel="noreferrer">
                    Source →
                  </a>
                )}
                <Link to={`/projects/${project.slug}`} className="text-accent hover:text-accent/80">
                  View project →
                </Link>
              </div>
            </div>
          </Card>
        ))}
        {filteredProjects.length === 0 && (
          <p className="col-span-full text-center text-sm text-slate-500 dark:text-slate-400">
            No projects matched the skill filter. Try exploring other capabilities.
          </p>
        )}
      </div>
    </div>
  );
}
