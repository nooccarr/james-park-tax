import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { NextUIProvider } from '@nextui-org/react';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

// Importing the Tailwind CSS
import './output.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <StrictMode>
    <NextUIProvider>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </NextUIProvider>
  </StrictMode>
);
