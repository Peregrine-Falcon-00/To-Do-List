import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextArea from './TextArea';

function App() {
  return (
    <>
      <h1>To-Do-List</h1>
      <TextArea></TextArea>
    </>
  )
}

export default App
