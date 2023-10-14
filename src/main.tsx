import React from 'react'
import ReactDOM from 'react-dom/client'

import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Homepage from './pages/home/index.tsx'
import Header from './components/header/index.tsx'
import Login from './pages/login/index.tsx'
import Cadastro from './pages/cadastro/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>             
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
