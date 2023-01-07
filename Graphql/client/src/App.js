import React from 'react'
import AddEmployee from './components/AddEmployee'
import AddTeam from './components/AddTeam'
import GetAEmployee from './components/GetAEmployee'
import GetATeam from './components/GetATeam'

function App() {
  return (
    <>
      <GetAEmployee />
      <GetATeam />
      <AddTeam />
      <AddEmployee />
    </>
  )
}

export default App