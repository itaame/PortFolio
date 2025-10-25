import type { ReactNode } from 'react';

import { Button, Input, Textarea } from '../components/Form';
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
      <header className="space-y-4 text-center">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Contact</h1>
        <p className="mx-auto max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          The quickest way to get in touch is via email or the social channels below. I look forward to hearing from you.
        </p>
      </header>
      <div className="grid gap-8 lg:grid-cols-[1fr,0.8fr]">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          {...(formspreeEndpoint ? { action: formspreeEndpoint } : {})}
          className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out:
              <input name="bot-field" type="text" autoComplete="off" />
            </label>
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
              Name
              <Input name="name" required autoComplete="name" placeholder="Your name" />
            </label>
            <label className="space-y-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
              Email
              <Input name="email" type="email" required autoComplete="email" placeholder="name@mail.com" />
            </label>
          </div>
          <label className="space-y-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
            Message
            <Textarea name="message" rows={6} required placeholder="Share context, timelines, and goals." />
          </label>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Form is wired for Netlify deployments
            {formspreeEndpoint ? ' and falls back to Formspree' : ''}. You’ll receive a confirmation when delivered.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href={`mailto:${profile.email}`}>Email {profile.name}</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#social-channels">
                View socials
              </a>
            </Button>
          </div>
        </form>
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
          {formspreeEndpoint ? (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-xs text-slate-600 shadow-soft dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              Prefer automation? POST JSON to Formspree endpoint{' '}
              <code className="font-mono">{formspreeEndpoint}</code> with <code className="font-mono">name</code>,{' '}
              <code className="font-mono">email</code>, and <code className="font-mono">message</code> fields.
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-accent/50 bg-accent/5 p-6 text-xs text-slate-600 shadow-soft dark:border-accent/40 dark:bg-accent/10 dark:text-slate-300">
              Prefer automation? Configure a <code className="font-mono">VITE_FORMSPREE_FORM_ID</code> environment variable to enable the
              Formspree JSON endpoint fallback.
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
