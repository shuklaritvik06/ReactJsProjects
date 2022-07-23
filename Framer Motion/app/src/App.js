import React from 'react'
import Animations from './components/Animations'
import Hover from './components/Hover'
import Loader from './components/Loader'
import Modal from './components/Modal'
import Variants from './components/Variants'


export default function App() {
  return (
    <div>
       <Modal/>
       <Animations/>
       <Hover/>
       <Variants/>
       <Loader/>
    </div>
  )
}
