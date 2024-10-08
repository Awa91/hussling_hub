import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import {Layout} from './Layout'
import './App.css'

export const  App = React.memo(() => {
  
  return (
    <>   
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
        </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}
);

