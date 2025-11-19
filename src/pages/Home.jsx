import { Link } from 'react-router-dom';
import { subjects } from '../data/subjects';

export default function Home() {
  return (
    <section>
      <h1>Choose a subject</h1>
      <div className="grid">
        {subjects.map((s) => (
          <Link key={s.slug} to={`/subject/${s.slug}`} className="card">
            <h3>{s.name}</h3>
            <p>{s.questions.length} questions</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
