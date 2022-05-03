import { React } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <>
      Hello World!
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
