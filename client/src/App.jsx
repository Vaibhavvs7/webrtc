import { Routes, Route } from 'react-router-dom'
import './App.css'
import LobbyScreen from './screens/lobby'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<LobbyScreen/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
