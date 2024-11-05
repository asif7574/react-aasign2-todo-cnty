

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Countries from './Country files/Countries';
import Footer from './Footer';
import Homepage from './Homepage';
import Navbar from './Navbar';
import Notfound from './Notfound';
import Todo from './Todo files/Todo';
import 'bootstrap/dist/css/bootstrap.min.css';
import {React, createContext, useState } from 'react';
import Single from './Country files/Single';


export const dataContext=createContext(null)

function App() {

  const [selected,setSelected]=useState(null)

  return (
    <div className="App">

    <dataContext.Provider value={{selected,setSelected}}>
     
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Homepage/>}/>
      <Route path='todo/' element={<Todo/>}/>
      <Route path='countries/' element={<Countries/>}/>
      <Route path='*' element={<Notfound/>}/>
      <Route path='/single/:code' element={<Single/>}/>

    </Routes>
    </BrowserRouter>

    </dataContext.Provider>

    </div>
  );
}

export default App;
