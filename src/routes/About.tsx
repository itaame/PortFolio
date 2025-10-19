import { Link } from 'react-router-dom';
import profile from '../data/profile.json';
import experience from '../data/experience.json';
import { SEO } from '../lib/seo';
import Tag from '../components/Tag';
import Card from '../components/Card';
import Timeline, { TimelineItem } from '../components/Timeline';
import { formatDateRange } from '../lib/utils';

const focusAreas = [
  {
    title: 'Mission control leadership',
    description:
      'Headed analog mission control rooms and built operator tooling that keeps medical, science, and flight teams synchronized when the tempo is high.',
    tags: ['OpenVoCS', 'YAMCS', 'FOP design']
  },
  {
    title: 'Telemetry & data pipelines',
    description:
      'Designs low-latency CCSDS-compliant telemetry systems, merging life-support housekeeping with wearable biometrics for clear, actionable dashboards.',
    tags: ['CCSDS', 'XTCE', 'Real-time trending']
  },
  {
    title: 'Human spaceflight readiness',
    description:
      'Blends avionics engineering with crewed mission procedures, from HiL simulations to zero-g flight campaigns and cross-functional anomaly response.',
    tags: ['Human spaceflight', 'HiL', 'Mission procedures']
  }
];

const quickFacts = [
  { label: 'Based in', value: profile.location },
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Degrees', value: 'Dual M.Sc. in Avionics & Human Spaceflight (Oct 2025)' },
  { label: 'Languages', value: 'English, French, Arabic, German (learning)' }
];

export default function About() {
  const highlightedExperience = [...experience]
    .sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime())
    .slice(0, 3);

  return (
    <div className="space-y-16">
      <SEO
        title="About"
        description="Discover Ilyasse Taame’s path across mission control, telemetry engineering, and human spaceflight preparation."
        path="/about"
      />
      <header className="space-y-6">
        <Tag variant="accent">About</Tag>
        <div className="grid gap-8 lg:grid-cols-[1.6fr,1fr] lg:items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Meet Ilyasse Taame
            </h1>
            <p className="max-w-3xl text-base text-slate-600 dark:text-slate-300">
              Spacecraft operations enthusiast with a dual-degree M.Sc. focused on avionics and human spaceflight, fascinated by how
              disciplined procedures and resilient software keep crews safe. I thrive in real-time environments where telemetry, human
              factors, and mission objectives intersect.
            </p>
          </div>
          <figure className="relative mx-auto max-w-xs overflow-hidden rounded-3xl border border-slate-200 shadow-soft dark:border-slate-700">
            <img
              src={profile.avatar}
              alt="Ilyasse Taame in mission control"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="sr-only">Portrait of Ilyasse Taame</figcaption>
          </figure>
        </div>
      </header>

      <section className="grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:items-start">
        <div className="space-y-4 text-base text-slate-600 dark:text-slate-300">
          <p>
            My journey spans mission control centers, embedded avionics labs, and zero-g flight campaigns. Whether coordinating with
            multidisciplinary teams as Head of MCC during ASCLEPIOS or architecting telemetry pipelines for life-support systems, I focus on
            clarity under pressure and data that operators can trust.
          </p>
          <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-soft dark:border-slate-800 dark:bg-slate-900/60">
            <img
              src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80"
              alt="Mission control consoles with glowing telemetry displays"
              loading="lazy"
              className="h-60 w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">
              A favorite mission control vantage point where telemetry, voice loops, and team coordination intersect.
            </figcaption>
          </figure>
          <p>
            I’m equally at home writing procedures as building the tools that execute them. From XTCE modelling and CCSDS packet routing to
            developing voice-loop software with openVoCS logic, I enjoy translating complex requirements into systems that feel intuitive to the
            people who rely on them in critical moments.
          </p>
          <figure className="grid gap-2 rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-soft md:grid-cols-[1.1fr,1fr] dark:border-slate-800 dark:bg-slate-900/70">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
              alt="Engineer working with avionics hardware in a lab"
              loading="lazy"
              className="h-48 w-full rounded-2xl object-cover"
            />
            <figcaption className="text-sm text-slate-500 dark:text-slate-400">
              Lab time—tuning avionics benches and validating telemetry pipelines before they reach mission rehearsal.
            </figcaption>
          </figure>
          <p>
            Outside the control room you can find me iterating on flight experiments, practicing languages to connect with global crews, or
            mentoring students entering the space-operations world. Curiosity and rigorous preparation are the constants that keep me mission-ready.
          </p>
          <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-soft dark:border-slate-800 dark:bg-slate-900/80">
            <img
              src="https://images.unsplash.com/photo-1529921735733-56c2d1d57b48?auto=format&fit=crop&w=1200&q=80"
              alt="Astronaut training aircraft flying over clouds"
              loading="lazy"
              className="h-56 w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">
              High-altitude campaigns remind me that curiosity and preparation fuel every successful mission.
            </figcaption>
          </figure>
        </div>
        <aside className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-soft backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Quick facts</h2>
          <dl className="space-y-3 text-sm">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="space-y-1">
                <dt className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{fact.label}</dt>
                <dd className="font-semibold text-slate-900 dark:text-white">
                  {fact.href ? (
                    <a href={fact.href} className="hover:text-accent">
                      {fact.value}
                    </a>
                  ) : (
                    fact.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <section aria-labelledby="focus-title" className="space-y-8">
        <div className="space-y-2">
          <h2 id="focus-title" className="text-2xl font-semibold text-slate-900 dark:text-white">
            How I deliver mission impact
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            I blend systems thinking with console discipline to keep missions resilient, observable, and human-centered.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {focusAreas.map((area) => (
            <Card key={area.title} title={area.title} description={area.description} tags={area.tags} />
          ))}
        </div>
      </section>

      <section aria-labelledby="trajectory-title" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 id="trajectory-title" className="text-2xl font-semibold text-slate-900 dark:text-white">
              Recent trajectory snapshot
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Highlights from the latest roles that shaped my approach to flight operations.
            </p>
          </div>
          <Link to="/experience" className="text-sm font-semibold text-accent hover:text-accent/80">
            View full experience →
          </Link>
        </div>
        <Timeline className="space-y-8 pl-6">
          {highlightedExperience.map((item) => (
            <TimelineItem
              key={`${item.organization}-${item.role}`}
              title={item.role}
              subtitle={`${item.organization} · ${item.location}`}
              meta={formatDateRange(item.start, item.end)}
            >
              <ul className="list-inside list-disc space-y-2">
                {item.achievements.slice(0, 2).map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </TimelineItem>
          ))}
        </Timeline>
      </section>
    </div>
  );
}
