// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { subjectsIndex } from '../data/subjects-index';

export default function Home() {
  return (
    <section>
      <h1>Choose a subject</h1>
      <div className="grid">
        {subjectsIndex.map((s) => (
          <Link key={s.slug} to={`/subject/${s.slug}`} className="card">
            <h3>{s.name}</h3>
            <p>Open to view questions</p>
          </Link>
        ))}
      </div>
    </section>
  );
}