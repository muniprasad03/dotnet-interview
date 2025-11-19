import { useState } from 'react';

export default function QAItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="qa-item">
      <button className="qa-question" onClick={() => setOpen((o) => !o)}>
        {q}
        <span className="chevron">{open ? '▲' : '▼'}</span>
      </button>
      {open && <div className="qa-answer">{a}</div>}
    </div>
  );
}
