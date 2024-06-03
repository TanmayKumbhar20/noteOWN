import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './SideBar.jsx'
import NoteWindow from './NoteWindow.jsx'

function App() {
  return(
    <>
       <div className='h-screen w-screen bg-black flex'>
    <SideBar/>
    <NoteWindow/>
    </div>
    </>
  )
}

export default App
