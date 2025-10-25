import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import profile from '../data/profile.json';
import skills from '../data/skills.json';
import projects from '../data/projects.json';
import socials from '../data/socials.json';
import { Button } from '../components/Form';
import Tag from '../components/Tag';
import Card from '../components/Card';
import { SEO } from '../lib/seo';
import { withBase } from '../lib/withBase';

export default function Home() {
  const featuredProjects = projects.slice(0, 2);
  const avatarSrc = withBase(profile.avatar);
  const resumeUrl = withBase('Ilyasse-Taame-CV.pdf');
  const skillProjectMap = useMemo(() => {
    return skills.reduce<Record<string, boolean>>((acc, skill) => {
      const normalizedSkill = skill.toLowerCase().trim();
      const hasMatchingProject = projects.some((project) =>
        (project.stack ?? [])
          .map((stackSkill) => stackSkill.toLowerCase().trim())
          .includes(normalizedSkill)
      );

      acc[skill] = hasMatchingProject;

      return acc;
    }, {});
  }, [skills, projects]);

  return (
    <div className="space-y-16">
      <SEO path="/" />
      <section className="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
        <div className="space-y-6">
          <Tag variant="accent">Short Profile</Tag>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {profile.name}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">{profile.summary}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/contact">Contact Me</Link>
            </Button>
            <Button asChild variant="ghost">
              <a href={resumeUrl} target="_blank" rel="noreferrer">
                Download CV
              </a>
            </Button>
          </div>
          <dl className="grid gap-4 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Location</dt>
              <dd className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">{profile.location}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Email</dt>
              <dd className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                <a href={`mailto:${profile.email}`} className="hover:text-accent">
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Social</dt>
              <dd className="mt-1 flex flex-wrap gap-2 text-sm">
                {socials.slice(0, 3).map((social) => (
                  <a key={social.label} href={social.url} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 transition hover:bg-accent hover:text-white dark:bg-slate-800 dark:text-slate-300" target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="relative h-64 w-64 overflow-hidden rounded-3xl border-4 border-white shadow-2xl ring-4 ring-accent/20 dark:border-slate-900">
            <img
              src={avatarSrc}
              alt={`${profile.name} portrait`}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="skills-title" className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 id="skills-title" className="text-2xl font-semibold text-slate-900 dark:text-white">
            Core capabilities
          </h2>
          <span className="text-sm text-slate-500 dark:text-slate-400">Rapid to adapt, built for mission tempo</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const hasProjects = skillProjectMap[skill];
            const baseClass =
              'flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200';
            const content = (
              <>
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
                {skill}
              </>
            );

            if (!hasProjects) {
              return (
                <div key={skill} className={baseClass}>
                  {content}
                </div>
              );
            }

            return (
              <Link
                key={skill}
                to={{ pathname: '/projects', search: `?skill=${encodeURIComponent(skill)}` }}
                className={`${baseClass} hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}
                aria-label={`View projects related to ${skill}`}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="featured-title" className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 id="featured-title" className="text-2xl font-semibold text-slate-900 dark:text-white">
            Featured missions
          </h2>
          <Link to="/projects" className="text-sm font-semibold text-accent hover:text-accent/80">
            Explore all projects →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Card key={project.slug} title={project.title} description={project.summary} tags={project.stack}>
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  to={`/projects/${project.slug}`}
                  className="text-sm font-semibold text-accent hover:text-accent/80"
                >
                  View case study →
                </Link>
                <ul className="list-inside list-disc text-xs text-slate-500 dark:text-slate-300">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
