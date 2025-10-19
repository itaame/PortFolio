import { useMemo, useState } from 'react';
import publications from '../data/publications.json';
import Card from '../components/Card';
import { SEO } from '../lib/seo';
import { Select } from '../components/Form';
import CopyButton from '../components/CopyButton';

const years = ['All', ...Array.from(new Set(publications.map((item) => item.year))).sort((a, b) => b - a).map(String)];
const venues = ['All', ...Array.from(new Set(publications.map((item) => item.venue)))];

export default function Publications() {
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedVenue, setSelectedVenue] = useState<string>('All');

  const filtered = useMemo(() => {
    return publications.filter((item) => {
      const yearMatches = selectedYear === 'All' || item.year.toString() === selectedYear;
      const venueMatches = selectedVenue === 'All' || item.venue === selectedVenue;
      return yearMatches && venueMatches;
    });
  }, [selectedYear, selectedVenue]);

  return (
    <div className="space-y-12">
      <SEO title="Publications" description="Conference papers and articles covering mission control architectures and telemetry research." path="/publications" />
      <header className="space-y-4 text-center">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Publications</h1>

      </header>
      <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 sm:grid-cols-2">
        <label className="flex flex-col text-sm font-semibold text-slate-600 dark:text-slate-300">
          Filter by year
          <Select className="mt-2" value={selectedYear} onChange={(event) => setSelectedYear(event.target.value)} aria-label="Filter publications by year">
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Select>
        </label>
        <label className="flex flex-col text-sm font-semibold text-slate-600 dark:text-slate-300">
          Filter by venue
          <Select className="mt-2" value={selectedVenue} onChange={(event) => setSelectedVenue(event.target.value)} aria-label="Filter publications by venue">
            {venues.map((venue) => (
              <option key={venue} value={venue}>
                {venue}
              </option>
            ))}
          </Select>
        </label>
      </div>
      <div className="space-y-6">
        {filtered.map((item) => (
          <Card key={item.title} title={item.title} description={`${item.venue} · ${item.year}`}>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <p className="font-semibold text-slate-900 dark:text-white">{item.authors}</p>
              <p>{item.abstract}</p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                <a href={item.url} target="_blank" rel="noreferrer" className="text-accent hover:text-accent/80">
                  DOI / Link →
                </a>
                <CopyButton text={item.bibtex} />
              </div>
            </div>
          </Card>
        ))}
        {filtered.length === 0 && (
          <p className="rounded-2xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
            No publications match the selected filters.
          </p>
        )}
      </div>
    </div>
  );
}
