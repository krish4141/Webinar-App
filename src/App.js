import './App.css';
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import WebinarList from './components/WebinarList';
import { WebinarProvider } from './components/WebinarContext';



const App = () => {
  return (
    <WebinarProvider>
    <div className='App'>
      <div className="container mt-5">
      <WebinarList />
     
        
      </div>
    </div>
    </WebinarProvider>
  )
}

export default App