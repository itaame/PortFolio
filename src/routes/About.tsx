import { Link } from 'react-router-dom';
import profile from '../data/profile.json';
import experience from '../data/experience.json';
import { SEO } from '../lib/seo';
import Tag from '../components/Tag';
import Card from '../components/Card';
import Timeline, { TimelineItem } from '../components/Timeline';
import { formatDateRange } from '../lib/utils';
import { withBase } from '../lib/withBase';

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
      'Designed low-latency CCSDS-compliant telemetry systems, merging life-support housekeeping with wearable biometrics for clear, actionable dashboards.',
    tags: ['CCSDS', 'XTCE', 'Real-time trending']
  },
  {
    title: 'Human spaceflight readiness',
    description:
      'Blended avionics engineering with crewed mission procedures, from HiL simulations to zero-g flight campaigns and cross-functional anomaly response.',
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
              Meet me
            </h1>
            <p className="max-w-3xl text-base text-slate-600 dark:text-slate-300">
            Hi, I’m Ilyasse Taame, a 24 years old space and aviation enthusiast. The rest of this portfolio highlights my academic and professional journey, but I wanted to dedicate this page to something more personal. Here, I’d like to share a glimpse of who I am beyond the consoles and code: my personal background, what first sparked my love for space and flight, and the passions that continue to inspire me today.
            </p>
          </div>
          <figure className="relative mx-auto max-w-xs overflow-hidden rounded-3xl border border-slate-200 shadow-soft dark:border-slate-700">
            <img
              src={withBase('assets/projects/about5.JPG')}
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
          Born in Casablanca, Morocco, the light pollution of such a vast city made it nearly impossible to see the beautiful stars I admired in my favorite documentaries, the ones about space.
To chase those stars and the dreams they inspired, I developed a deep sense of escapism. Airplanes, in particular, fascinated me. They could navigate anywhere, crossing the very frontiers that once felt so limiting.
          </p>
          <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-soft dark:border-slate-800 dark:bg-slate-900/60">
            <img
              src={withBase('assets/projects/about1.PNG')}
              alt="Mission control consoles with glowing telemetry displays"
              loading="lazy"
              className="h-60 w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">
              The moment I realized that looking up at the sky wasn’t enough, I wanted to fly through it.
            </figcaption>
          </figure>
          <p>
            My journey to reach those dreams eventually led me to study in France and Germany. Amid visa challenges and societal expectations, I had to navigate the complex terrain of studying abroad, often questioning belonging and worthiness. Yet, within this path, I found myself part of a small but passionate community of young space enthusiasts across Europe, traveling to Paris, Milan, and Cologne, and for once, not worrying about the borders that used to hold me back.
          </p>
          <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-soft dark:border-slate-800 dark:bg-slate-900/80">
            <img
              src={withBase('assets/projects/about3.JPG')}
              alt="Astronaut training aircraft flying over clouds"
              loading="lazy"
              className="h-56 w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">
              Before exploring space, I love exploring planet Earth, hiking in the Swiss Alps, the Pyrenees, and the Bavarian mountains, enjoying nature and the serenity of clear, starry night skies.
            </figcaption>
          </figure>
          <p>
            Another passion of mine is digital and analog photography. I love capturing people, animals, or even statues,
            making them the center of a story told through a single frame.
            A glimpse of my work is available in my{" "}
            <a
              href="https://vsco.co/llyass/gallery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              gallery
            </a>.
          </p>
          <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-soft dark:border-slate-800 dark:bg-slate-900/60">
            <img
              src={withBase('assets/projects/about2.JPG')}
              alt="Mission control consoles with glowing telemetry displays"
              loading="lazy"
              className="h-60 w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">
              Sometimes the lens turns the other way, capturing not the stars, but the journey toward them, a glimpse from the ASCLEPIOS analog mission.
            </figcaption>
          </figure>
        </div>
        <div className="space-y-6">
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
          <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-soft dark:border-slate-800 dark:bg-slate-900/80">
            <img
              src={withBase('assets/projects/about4.JPG')}
              alt="Ilyasse Taame in mission control"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="sr-only">Portrait of Ilyasse Taame</figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="focus-title" className="space-y-8">
        <div className="space-y-2">
          <h2 id="focus-title" className="text-2xl font-semibold text-slate-900 dark:text-white">
            How I deliver impact
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
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 id="trajectory-title" className="text-2xl font-semibold text-slate-900 dark:text-white">
              Recent trajectory snapshot
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Highlights from the latest roles that shaped my approach to avionics and flight operations.
            </p>
          </div>
          <Link to="/experience" className="text-sm font-semibold text-accent hover:text-accent/80 sm:text-right">
            View full experience →
          </Link>
        </div>
        <Timeline className="space-y-8 pl-4 sm:pl-6">
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
