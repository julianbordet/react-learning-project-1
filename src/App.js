import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Instructions from './components/Instructions';
import Menu from './components/Menu';
import CartModal from './components/CartModal';
import CartContextProvider from './components/store/cart-context';

function App() {

  const [modalOpen, setModalOpen] = useState(false);

  const openModalHandler = (props) => {
    setModalOpen(true);
  }

  const closeModalHandler = (props) => {
    setModalOpen(false);
  }

  return (
    <React.Fragment>

      <CartContextProvider>
        <Header openModal={openModalHandler} />
        <div className='background'>
          <Instructions />
          <Menu />
          {modalOpen && <CartModal title='My Cart Modal' message='This is the cart modal' closeModal={closeModalHandler}></CartModal>}
        </div>
      </CartContextProvider>

    </React.Fragment>

  );
}

export default App;
