import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Instructions from './components/Instructions';
import Menu from './components/Menu';
import CartModal from './components/CartModal';
import Cart from './components/Cart';

function App() {

  const [modalOpen, setModalOpen] = useState(false);

  const openModalHandler = (props) =>{
    setModalOpen(true);
    console.log('llegue a ejecutar openModalHanlder en app.js');
  }

  const closeModalHandler = (props) =>{
    setModalOpen(false);
    console.log('llegue a ejecutar closeModalHanlder en app.js');
  }

  return (
    <React.Fragment>
      <Header openModal={openModalHandler}/>
      <div className='background'>
        <Instructions/>
        <Menu/>
        {modalOpen && <CartModal title='My Cart Modal' message='This is the cart modal' closeModal={closeModalHandler}></CartModal>}
      </div>
      
      
    </React.Fragment>

  );
}

export default App;
