import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import Service from './views/Service/Service';
import './styles/global.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='service' element={<Service />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

