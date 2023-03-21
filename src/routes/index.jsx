import {Route, BrowserRouter, Routes} from "react-router-dom"

import React from 'react'

import Home from '../Pages/home'

import NavBar from '../components/navbar';

export default function AplicationRotes() {
  return (
    <div>
      
    <BrowserRouter>
    
    <NavBar></NavBar>
   
   <Routes>

   <Route path="/" element={<Home/>}  />{/* path="" usado para passar um string */}

   <Route path="/post" element={<h1>Post</h1>}  />{/* path="" usado para passar um string */}

   <Route path="/contact" element={<h1>Contato</h1>}></Route>

   <Route path="/Culture" element={<h1>Cultura</h1>}></Route>

   </Routes>
    
    </BrowserRouter>

    </div>
  )
}


