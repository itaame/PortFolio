import { Link } from 'react-router-dom';
import { SEO } from '../lib/seo';

export default function NotFound() {
  return (
    <div className="space-y-6 text-center">
      <SEO title="Page not found" path="/404" />
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Lost in telemetry</h1>
      <p className="mx-auto max-w-md text-sm text-slate-600 dark:text-slate-300">
        The page you’re looking for drifted out of range. Head back to the mission dashboard and continue exploring.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link to="/" className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-soft">
          Return home
        </Link>
        <Link to="/projects" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-100">
          View projects
        </Link>
      </div>
    </div>
  );
}
