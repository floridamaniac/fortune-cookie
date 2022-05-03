import { React, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

function App() {
  const [fortunes, setFortunes] = useState([]);

  useEffect(() => {
    axios.get('/fortunes').then((results) => setFortunes(results.data));
  }, []);

  return (
    <>
      {fortunes.map((fortune) => (
        <p key={fortune.date}>
          {fortune.text}
        </p>
      ))}
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
