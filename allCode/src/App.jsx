import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import UserList from './components/UserList'
import UserCard from './components/UserCard'
import Header from './components/Header'
import Counter from './components/Counter'
import InteractionsContext from './context/InteractionsContext'
import { useState } from 'react'


function App() {

  const [counter, setCounter] = useState(null);

  return (
    <InteractionsContext.Provider value={[counter, setCounter]}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />}/>
        <Route path="/users/:id" element={<UserCard />}/>
      </Routes>
      <Counter />
    </InteractionsContext.Provider>
  )
}

export default App
