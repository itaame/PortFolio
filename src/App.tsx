import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  loadAbout,
  loadContact,
  loadExperience,
  loadHome,
  loadNotFound,
  loadProject,
  loadProjects,
  loadPublications
} from './routes/lazy';
import { usePlausibleAnalytics, usePageview } from './lib/analytics';
import profile from './data/profile.json';
import { withBase } from './lib/withBase';

const Home = lazy(loadHome);
const About = lazy(loadAbout);
const Projects = lazy(loadProjects);
const Project = lazy(loadProject);
const Experience = lazy(loadExperience);
const Publications = lazy(loadPublications);
const Contact = lazy(loadContact);
const NotFound = lazy(loadNotFound);

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light';
  }
  const stored = window.localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function useTheme(): [Theme, (theme: Theme) => void] {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
}

function App() {
  const [theme, setTheme] = useTheme();
  usePlausibleAnalytics();
  usePageview();
  const location = useLocation();

  const year = useMemo(() => new Date().getFullYear(), []);
  const profileWithBase = useMemo(
    () => ({
      ...profile,
      avatar: withBase(profile.avatar)
    }),
    []
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header theme={theme} onThemeChange={setTheme} profile={profileWithBase} />
      <main id="main" className="mx-auto max-w-6xl px-4 pb-24 pt-24 sm:px-6 lg:px-8">
        <Suspense
          fallback={
            <div className="grid min-h-[40vh] place-items-center text-slate-500">
              <span className="animate-pulse">Loading {location.pathname.replace('/', '') || 'home'}…</span>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<Project />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer name={profileWithBase.name} year={year} />
    </div>
  );
}

export default App;
