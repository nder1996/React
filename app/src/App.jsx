import React from "react";
import  TodoList  from "./components/TodoList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './view/Inicio'
import  About from './view/About'

export function App(){


    return(
        <>
     <Router>
        <Routes>
          <Route exact path='/' element={ <Inicio/> } />

          <Route path='/about' element={ <About/> } />

        </Routes>
      </Router>
        </>
   

   
    )


    
}

export default App


