import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { App } from './components/App';

createRoot(document.querySelector('#app')).render(<App />);
