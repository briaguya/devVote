import React from 'react';
import './App.css';

function App() {
  const candidates = [
    'Joe Biden',
    'Bernie Sanders',
    'Tulsi Gabbard',
    'Elizabeth Warren',
    'Michael Bloomberg',
    'Amy Klobuchar',
    'Pete Buttigieg',
    'Tom Steyer',
    'Deval Patrick',
    'Michael Bennet'
  ];

  let selected_candidates = [];

  return (
    <div className="ballot">
      <form>
        <h1>Democratic Primary</h1>
        {candidates.map((candidate_name, id) => (
          <div className="candidate" key={id}>
            <input
              type="checkbox"
              name="candidate"
              id={id}
              value={selected_candidates}
            />
            <label htmlFor={id}>{candidate_name}</label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default App;
