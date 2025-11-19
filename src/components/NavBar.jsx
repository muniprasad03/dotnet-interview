// src/components/NavBar.jsx
import { NavLink } from 'react-router-dom';
import { subjectsIndex } from '../data/subjects-index';

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="brand">
        <NavLink to="/">Dot Net Fullstack FAQ's</NavLink>
      </div>
      <nav className="menu">
        {subjectsIndex.map((s) => ( 
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