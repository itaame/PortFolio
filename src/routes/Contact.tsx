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
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Primary channels</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              The inbound form is on hold while I focus on active operations. Reach out directly and I’ll reply as soon as I step away
              from the console.
            </p>
          </div>
          <ul className="grid gap-3 rounded-2xl bg-white/60 p-4 text-sm text-slate-600 shadow-inner dark:bg-slate-900/70 dark:text-slate-300 sm:grid-cols-2">
            <li className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Operational support</span>
              <span>Mission control readiness, anomaly response drills, and tooling reviews.</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Research &amp; speaking</span>
              <span>Workshops, lectures, and collaborative research around human spaceflight.</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Consulting</span>
              <span>Telemetry architecture, avionics integration, and mission assurance planning.</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Media &amp; press</span>
              <span>Interviews or appearances related to analog missions and aerospace systems.</span>
            </li>
          </ul>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild className="px-6 py-2.5 text-base">
              <a href={`mailto:${profile.email}`}>Email {profile.name}</a>
            </Button>
            <Button asChild variant="secondary" className="px-6 py-2.5 text-base">
              <a href="#social-channels">Browse socials</a>
            </Button>
          </div>
        </section>
        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-soft backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Direct details</h2>
            <dl className="mt-4 space-y-4 text-sm">
              {contactDetails.map((detail) => (
                <div key={detail.term} className="space-y-1">
                  <dt className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{detail.term}</dt>
                  <dd className="font-semibold text-slate-900 dark:text-white">{detail.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div
            id="social-channels"
            className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-soft backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Social channels</h3>
              <span className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Stay connected</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-accent hover:bg-accent hover:text-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300"
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
