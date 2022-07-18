import React from 'react';
import './App.css';
import Header from './components/Header';
import Instructions from './components/Instructions';
import Menu from './components/Menu';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <div className='background'>
        <Instructions/>
        <Menu/>
      </div>
    </React.Fragment>

  );
}

export default App;
