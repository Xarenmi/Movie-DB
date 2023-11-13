import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import LoadMovie from './Components/LoadMovie/LoadMovie.jsx';
import Home from './Sections/Home/Home.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoadMovie />
  </React.StrictMode>,
);

