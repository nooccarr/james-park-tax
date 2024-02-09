import { createRoot } from 'react-dom/client';
import App from './components/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing the Tailwind CSS
import './output.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
);
