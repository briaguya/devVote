import React from 'react';
import logo from './logo.svg';
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

  return (
    <div className="ballot">
      <form>
        <h1>Democratic Primary</h1>
        {candidates.map((candidate_name, id) => (
          <React.Fragment>
            <input
              type="radio"
              name="candidate"
              id={id}
              value={candidate_name}
            />
            <label for={id}>{candidate_name}</label>
          </React.Fragment>
        ))}
      </form>
    </div>
  );
}

export default App;
