import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards';
import axios from 'axios';
import './Countries.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';


function Countries() {
    const [all,setAll]=useState([])

    useEffect(()=>{
        getData()
    },[])

    const navigate=useNavigate()

    const getData=()=>{
        axios('https://restcountries.com/v3.1/all')
            .then((res)=>{
                setAll(res.data)
               
            })
            .catch((err)=>{
                console.log(err);
                navigate('/')
            })
    }


  return (
    <div className='d-flex flex-wrap gap-3 justify-content-center cntydiv'>

   {
    all.map((cnty)=><Cards data={cnty} key={cnty.cca3}/>)
   }
    </div>
  )
}

export default Countries