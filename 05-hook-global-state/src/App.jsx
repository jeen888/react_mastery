// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

import {Routes, Route} from 'react-router-dom'
import TopNavi from './components/TopNavi'
import UseReducer from './components/UseReducer'
import UseContext from './components/UseContext'
// import UseGlobalState from './components/UseGlobalState'

function App() {
  return <>
    <TopNavi />
    <Routes>
      <Route path="/use-reducer" element={<UseReducer />} />
      <Route path="/use-context" element={<UseContext />} />
      {/* <Route path="/use-global-state" element={<UseGlobalState />} /> */}
    </Routes>
  </>
}
export default App