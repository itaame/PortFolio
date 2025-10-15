import { Link, useParams } from 'react-router-dom';
import projects from '../data/projects.json';
import Card from '../components/Card';
import Tag from '../components/Tag';
import { SEO } from '../lib/seo';

export default function Project() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="space-y-6 text-center">
        <SEO title="Project not found" path={`/projects/${slug ?? ''}`} />
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Project not found</h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">The requested project does not exist. It may have been moved or renamed.</p>
        <Link to="/projects" className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-soft">
          Back to projects
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-12">
      <SEO title={project.title} description={project.summary} path={`/projects/${project.slug}`} image={project.images[0]} />
      <header className="space-y-4">
        <Tag variant="accent">Case Study</Tag>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{project.title}</h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {project.images.map((image) => (
          <img
            key={image}
            src={image}
            alt={`${project.title} screenshot`}
            className="h-72 w-full rounded-3xl object-cover shadow-soft"
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
      <section className="grid gap-6 md:grid-cols-3">
        <Card title="Problem">
          <ul className="list-inside list-disc space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {project.problem.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
        <Card title="Approach">
          <ul className="list-inside list-disc space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {project.approach.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
        <Card title="Results">
          <ul className="list-inside list-disc space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {project.results.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </section>
      <footer className="flex flex-wrap gap-4 text-sm font-semibold">
        {project.links.github && (
          <a className="text-accent hover:text-accent/80" href={project.links.github} target="_blank" rel="noreferrer">
            View on GitHub →
          </a>
        )}
        {project.links.demo && (
          <a className="text-accent hover:text-accent/80" href={project.links.demo} target="_blank" rel="noreferrer">
            Launch demo →
          </a>
        )}
        <Link to="/projects" className="text-accent hover:text-accent/80">
          Back to all projects →
        </Link>
      </footer>
    </article>
  );
}
