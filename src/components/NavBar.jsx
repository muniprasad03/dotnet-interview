import { NavLink } from 'react-router-dom';
import { subjects } from '../data/subjects';

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="brand">
        <NavLink to="/">.NET Interview Q&A</NavLink>
      </div>
      <nav className="menu">
        {subjects.map((s) => (
          <NavLink
            key={s.slug}
            to={`/subject/${s.slug}`}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {s.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
