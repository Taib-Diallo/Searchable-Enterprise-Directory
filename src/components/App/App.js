import React from 'react'
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import Page404 from '../Page404/Page404';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

function App() {
  return (
    <HashRouter>
      <div className="Navigation">
        <Navigation />
      </div>
      <div className="Main">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Login />} />
          <Route path='/home/:employee_no' element={<Home />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
