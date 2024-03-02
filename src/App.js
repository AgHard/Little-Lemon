// App.js
import React from 'react';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';
import Footer from './Footer';
import './styles.css';

function App() {
  return (
    <div >
        <Header></Header>
        <Nav></Nav>
        <Main></Main>
        <Footer />
    </div>
  );
}

export default App;
