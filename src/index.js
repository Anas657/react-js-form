import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import About from './components/pages/About';
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import Test2 from './components/pages/Test2';
import UseEffect from './components/pages/UseEffect';
import GetLocation from './components/pages/GetLocation';
import Arrays from './components/pages/Arrays';

// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function App(){
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Home />} />
    <Route path={'/About'} element={<About />} />
    <Route path={'/product/:productName'} element={<Product />} />
    <Route path={'/test/test2'} element={<Test2 />} />
    <Route path={'/Use-Effect'} element={<UseEffect />} />
    <Route path={'/Get-Location'} element={<GetLocation />} />
    <Route path={'/Arrays'} element={<Arrays />} />
    
    </Routes>
    </BrowserRouter>
  );
}

root.render(

<React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
