import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './assets/home/home';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);


//Test movie
/* let movie = {
  original_title: 'FNAF',
  vote_average: 8.4,
  poster_path: '/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg',
} */
