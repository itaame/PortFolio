import experience from '../data/experience.json';
import { SEO } from '../lib/seo';
import Timeline, { TimelineItem } from '../components/Timeline';
import { formatDateRange } from '../lib/utils';
import { Button } from '../components/Form';

export default function Experience() {
  const timeline = [...experience].sort((a, b) => Number(b.start) - Number(a.start));

  return (
    <div className="space-y-12">
      <SEO title="Experience" description="Hands-on mission control, telemetry engineering, and research positions." path="/experience" />
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Experience</h1>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            Mission-ready engineering leadership, from analog mission control centers to embedded telemetry pipelines.
          </p>
        </div>
        <Button asChild variant="secondary">
          <a href="/Ilyasse-Taame-CV.pdf" download>
            Download CV
          </a>
        </Button>
      </header>
      <Timeline className="space-y-8 pl-6">
        {timeline.map((item) => (
          <TimelineItem
            key={`${item.organization}-${item.role}`}
            title={item.role}
            subtitle={`${item.organization} · ${item.location}`}
            meta={formatDateRange(item.start, item.end)}
          >
            <ul className="list-inside list-disc space-y-2">
              {item.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
