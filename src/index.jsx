import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Survey from './pages/Survey/Survey';
import Home from './pages/Home/Home';
import Header from './components/Header';
import Error from './components/Error';
import Freelance from './pages/Survey/Freelances'
import Results from './pages/Survey/Results'

import './index.css';

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
      margin: 0;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />}/>
        <Route path="/results" element={<Results />}/>
        <Route path="/freelances" element={<Freelance />}/>
        <Route path="*" element={<Error />} />
        </Routes>
      </Router>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
