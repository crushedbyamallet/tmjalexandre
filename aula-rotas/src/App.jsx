import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './routes/components/Menu'
import Rodape from './routes/components/Rodape'

function App() {

  return (
    <>
      <Menu/>
      <Outlet/>
      <Rodape/>
    </>
  )
}

export default App
