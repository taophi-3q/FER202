import React from 'react';
import { createRoot } from 'react-dom/client';
import QuizApp from './Lab3/QuizApp';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <QuizApp />
  </React.StrictMode>
);
