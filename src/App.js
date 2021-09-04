import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Subcontent from './components/Subcontent';
import Advertisement from './components/Advertisement';


function App() {
  return (
    <div className="container d-flex flex-column">
      <Header />
      <div className="d-flex flex-row">
        <Navigation />
        <Main>
          <Subcontent />
          <Subcontent />
          <Subcontent />
          <Advertisement />
        </Main>
      </div>
    </div>
  );
}

export default App;

