import profile from '../data/profile.json';
import socials from '../data/socials.json';
import { SEO } from '../lib/seo';

const contactDetails = [
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
      <section className="mx-auto max-w-3xl space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Details</h2>
        <dl className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
          {contactDetails.map(({ term, description }) => (
            <div key={term}>
              <dt className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{term}</dt>
              <dd className="mt-1 font-semibold text-slate-900 dark:text-white">{description}</dd>
            </div>
          ))}
        </dl>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Social channels</h3>
          <div className="flex flex-wrap gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                className="rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-300"
                target="_blank"
                rel="noreferrer noopener"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
