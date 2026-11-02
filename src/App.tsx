//import { useState } from 'react'
import './App.css'
import JobList from './components/ui/JobList';

function App() {
  return (
    <>
      <section>
        <h1 className='mt-2 ml-2 text-xl'>Bem-Vindo utilizador!</h1>
        <JobList />
      </section>
    </>
  )
}

export default App
