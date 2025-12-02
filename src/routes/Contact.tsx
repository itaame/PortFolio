import { Button } from '../components/Form';
import profile from '../data/profile.json';
import socials from '../data/socials.json';
import { SEO } from '../lib/seo';

export default function Contact() {
  return (
    <div className="space-y-12">
      <SEO
        title="Contact"
        description="Reach out to collaborate on mission control software, telemetry pipelines, or research."
        path="/contact"
      />
      <header className="space-y-5 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Let’s connect</h1>
      </header>
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white/95 via-white/90 to-slate-50/80 p-6 shadow-lg backdrop-blur-sm dark:border-slate-800 dark:from-slate-900/95 dark:via-slate-900/90 dark:to-slate-950/80 sm:p-8">
            <dl className="space-y-6">
              <div className="space-y-2">
                <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Location</dt>
                <dd className="text-2xl font-semibold text-slate-900 dark:text-white">{profile.location}</dd>
              </div>
              <div className="space-y-2">
                <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Email</dt>
                <dd>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-base font-semibold text-accent transition hover:underline"
                    aria-label={`Email ${profile.email}`}
                  >
                    {profile.email}
                  </a>
                </dd>
              </div>
            </dl>
          </section>
          <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Social channels</h2>
            <div className="flex flex-col gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </section>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild className="w-full sm:w-auto">
            <a href={`mailto:${profile.email}`}>Send email</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
