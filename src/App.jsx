import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UserCreate from './pages/UserCreate/UserCreate'
import UserList from './pages/UserLIst/UserList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserCreate />} />
        <Route path="/user-list" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
