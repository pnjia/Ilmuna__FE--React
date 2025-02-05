import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'
import { Course } from './pages/Course/Course'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/course' element={<Course/>}></Route>
      </Routes>
    </BrowserRouter>  
  )
}

export default App
