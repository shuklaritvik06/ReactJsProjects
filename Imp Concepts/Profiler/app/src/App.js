import React, { Profiler } from 'react'
import Header from './Components/Header'
function handleCallback(){
    console.log("Hello");
}
function App() {
  return (
    <>
       <Profiler id='header' onRender={handleCallback}>
         <Header />
       </Profiler>
    </>
  )
}

export default App