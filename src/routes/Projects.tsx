import { Link } from 'react-router-dom';
import projects from '../data/projects.json';
import Card from '../components/Card';
import { SEO } from '../lib/seo';
import { withBase } from '../lib/withBase';

export default function Projects() {
  return (
    <div className="space-y-12">
      <SEO title="Projects" description="Mission control software, telemetry pipelines, and real-time monitoring systems." path="/projects" />
      <header className="space-y-4 text-center">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Projects & Case Studies</h1>
        <p className="mx-auto max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Each project accelerates mission tempo with data-driven telemetry, resilient communications, and operator-centered tooling.
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
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
      </div>
    </div>
  );
}
