import React from 'react';
import ReactDOM from 'react-dom/client';

//the new thing that I added 
import {
  BrowserRouter, Routes, Route
} from "react-router-dom"; //.

import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import './index.css';

export default function App(){
  return(
<BrowserRouter>
<Routes>
<Route path="/" element={<Layout />}>

  <Route index elemet={<Home/>} />
  <Route path="about" elemet={<About />}/>
  <Route path="contact" elemet={<Contact />}/>
  <Route path="*" elemet={<NotFound />}/>

  </Route>
</Routes>
</BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
