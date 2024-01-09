import React from 'react'
import "./App.css"
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import About from "./Components/About"
import Service from "./Components/Service"
import {BrowserRouter, Routes,Route} from "react-router-dom"

export default function App() {
  return (
    <div id = "APP">
      <BrowserRouter>
        <Nav/>
        <Routes>

        <Route path='' element = {<Home/>}/>
        <Route path='About' element = {<About/>}/>
        <Route path='Service' element = {<Service/>}/>

        </Routes>

      </BrowserRouter>
    </div>
  )
}
