/** @format */
import React from "react"
import "./App.css"
import {
  Blog,
  Features,
  Header,
  Footer,
  WhatGPT3,
  Posibole,
} from "./components/containers"
import { Brand, CTA, NavBar } from "./components"
function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Posibole />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
