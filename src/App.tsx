import React from 'react';
import logoSRWKL from './res/logo_crests_only.png'
import logoCaption from './res/logo_caption_only.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoSRWKL} className="App-logo" alt="logo" />
        <img src={logoCaption} className="App-logo-caption" alt="logo" />
        <p>
          Stowarzyszenie Rodów Wielkiego Księstwa Litewskiego
        </p>
      </header>
    </div>
  );
}

export default App;
