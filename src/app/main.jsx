import { createRoot } from 'react-dom/client';
import App from './components/App';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing the Tailwind CSS
import './output.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <NextUIProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </NextUIProvider>
);
