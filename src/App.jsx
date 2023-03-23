import { useState } from 'react'

import './App.css'
import SideBar from './components/SideBar';
import InputBar from './components/InputBar';
import Container from './components/Container';
import RightPanel from './components/RightPanel';
import Tile from './components/Tile';

function App() {
  return (
    <div className="bg-[#DDDFE5] h-screen flex">
  <SideBar />
  <div>
  <InputBar />
  <div className='flex'>
    <Container />
  <RightPanel />
  </div>
 
   

  </div>

    </div>
  )
}

export default App