import profile from '../data/profile.json';
import socials from '../data/socials.json';
import { Button, Input, Textarea } from '../components/Form';
import { SEO } from '../lib/seo';

export default function Contact() {
  return (
    <div className="space-y-12">
      <SEO title="Contact" description="Reach out to collaborate on mission control software, telemetry pipelines, or research." path="/contact" />
      <header className="space-y-4 text-center">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Contact</h1>
        <p className="mx-auto max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Let’s design Space and Ground Operations that keeps crews, Spacecraft, and mission safe. Drop a note and I’ll reply as soon as possible.
        </p>
      </header>
      <div className="grid gap-8 lg:grid-cols-[1fr,0.8fr]">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="https://formspree.io/f/xbjnzryd"
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
            Form is wired for Netlify deployments and falls back to Formspree. You’ll receive a confirmation when delivered.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button type="submit">Send message</Button>
            <Button asChild variant="secondary">
              <a href={`mailto:${profile.email}`}>Email directly</a>
            </Button>
          </div>
        </form>
        <aside className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Details</h2>
          <dl className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Location</dt>
              <dd className="mt-1 font-semibold text-slate-900 dark:text-white">{profile.location}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Email</dt>
              <dd className="mt-1 font-semibold">
                <a href={`mailto:${profile.email}`} className="hover:text-accent">
                  {profile.email}
                </a>
              </dd>
            </div>
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
                  rel="noreferrer"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-slate-100 p-4 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            Prefer automation? POST JSON to Formspree endpoint <code className="font-mono">https://formspree.io/f/xbjnzryd</code> with
            <code className="font-mono">name</code>, <code className="font-mono">email</code>, and <code className="font-mono">message</code> fields.
          </div>
        </aside>
      </div>
    </div>
  );
}
