import { useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { subjects } from '../data/subjects';
import QAItem from '../components/QAItem';

export default function SubjectPage() {
  const { slug } = useParams();
  const [query, setQuery] = useState('');
  const subject = subjects.find((s) => s.slug === slug);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return subject?.questions ?? [];
    return (subject?.questions ?? []).filter(
      (item) =>
        item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
    );
  }, [query, subject]);

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
