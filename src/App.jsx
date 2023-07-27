import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UserCreate from './pages/UserCreate/UserCreate'
import UserList from './pages/userList/userList'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<UserCreate />} />
          <Route path='/user-list' element={<UserList/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
