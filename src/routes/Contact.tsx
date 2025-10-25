import type { ReactNode } from 'react';

import { Button } from '../components/Form';
import Tag from '../components/Tag';
import profile from '../data/profile.json';
import socials from '../data/socials.json';
import { SEO } from '../lib/seo';

const contactDetails: Array<{ term: string; description: ReactNode }> = [
  {
    term: 'Location',
    description: profile.location,
  },
  {
    term: 'Email',
    description: (
      <a
        href={`mailto:${profile.email}`}
        className="hover:text-accent"
        aria-label={`Email ${profile.email}`}
      >
        {profile.email}
      </a>
    ),
  },
];

export default function Contact() {
  return (
    <div className="space-y-12">
      <SEO
        title="Contact"
        description="Reach out to collaborate on mission control software, telemetry pipelines, or research."
        path="/contact"
      />
      <header className="space-y-5 text-center">
        <Tag variant="accent" className="mx-auto w-fit">Collaborations</Tag>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Let’s connect</h1>
        <p className="mx-auto max-w-2xl text-base text-slate-600 dark:text-slate-300">
          Whether you’re planning a mission rehearsal, telemetry pipeline, or a research partnership, I’m always happy to discuss
          how we can work together.
        </p>
      </header>
      <div className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr]">
        <section className="space-y-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-white/95 via-white/90 to-slate-50/80 p-8 shadow-lg backdrop-blur-sm dark:border-slate-800 dark:from-slate-900/95 dark:via-slate-900/90 dark:to-slate-950/80">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Reach out directly</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              I’m easiest to reach over email. Share your mission overview, timelines, and goals and I’ll respond as soon as I step
              away from the console.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild className="w-full sm:w-auto">
              <a href={`mailto:${profile.email}`}>Email {profile.name}</a>
            </Button>
          </div>
        </section>
        <aside className="space-y-6">
          <dl className="space-y-3 text-sm">
            {contactDetails.map((detail) => (
              <div key={detail.term} className="space-y-1">
                <dt className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{detail.term}</dt>
                <dd className="font-semibold text-slate-900 dark:text-white">{detail.description}</dd>
              </div>
            ))}
          </dl>
          <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Social channels</h3>
            <div className="flex flex-wrap gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
