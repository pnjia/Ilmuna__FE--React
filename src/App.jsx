import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'
<<<<<<< HEAD
import { Home } from './pages/Home/Home'
=======
import { Course } from './pages/Course/Course'
>>>>>>> 45150c90c077780cdbada8efaf41639ff7a8b550


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
<<<<<<< HEAD
        <Route path='/' element={<Home/>}></Route>
=======
        <Route path='/course' element={<Course/>}></Route>
>>>>>>> 45150c90c077780cdbada8efaf41639ff7a8b550
      </Routes>
    </BrowserRouter>  
  )
}

export default App
