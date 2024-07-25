import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

async function enableMocking() {
  const { server } = await import('./mocks/node')

  return server.start()
}

const root = ReactDOM.createRoot(document.getElementById('root'));
enableMocking().then(() => {
  root.render(<App />)
})

