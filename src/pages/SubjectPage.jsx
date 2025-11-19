// src/pages/SubjectPage.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import QAItem from '../components/QAItem';
//import { subjectsIndex } from '../data/subjects-index';

// Glob all subject modules (each exports default { slug, name, questions })
const subjectModules = import.meta.glob('../data/*.js');

export default function SubjectPage() {
  const { slug } = useParams();
  const [subject, setSubject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);

      // Find matching module path by slug (e.g., '../data/csharp.js')
      const entry = Object.entries(subjectModules).find(([path]) =>
        path.endsWith(`/${slug}.js`)
      );

      if (!entry) {
        setSubject(null);
        setLoading(false);
        return;
      }

      const [, loader] = entry;
      try {
        const mod = await loader();
        if (!cancelled) setSubject(mod.default);
      } catch (e) {
        console.error('Failed to load subject', slug, e);
        if (!cancelled) setSubject(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, [slug]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const all = subject?.questions ?? [];
    if (!q) return all;
    return all.filter(item =>
      item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
    );
  }, [query, subject]);

  if (loading) return <p>Loading {slug}…</p>;
  if (!subject) return <p>Subject not found.</p>;

  return (
    <section>
      <h1>{subject.name} Interview Q&A</h1>
      <input
        type="search"
        placeholder={`Search in ${subject.name}...`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search"
      />
      <p className="muted">
        Showing {filtered.length} of {subject.questions.length} questions
      </p>
      <div className="qa-list">
        {filtered.map((item, idx) => (
          <QAItem key={idx} q={item.q} a={item.a} />
        ))}
      </div>
    </section>
  );
}