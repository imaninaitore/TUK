import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import StudyLevel from './pages/StudyLevel'
import { Route,Routes } from 'react-router'

function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={
          <>
            <Navbar />
            <Header />
          </>
        }/>
        
       <Route path="/StudyLevel" element={<StudyLevel />} />
    </Routes>
    </>


  )
}

export default App