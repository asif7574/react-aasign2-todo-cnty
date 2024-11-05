import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      <Navbar/>

      <Link to="/todo"> <button>Todo</button> </Link>
      <Link to="/"> <button>Home</button> </Link>
      <Link to="/countries"> <button>Countries</button> </Link>
      <Link to="*"> <button>NotFound</button> </Link>
        
        
        <Footer/>
    </div>
  )
}

export default Homepage