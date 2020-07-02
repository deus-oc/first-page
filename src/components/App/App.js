import React from 'react';
import './App.css'
import  Header  from "../header/Header";
import  Content  from "../content/Content";
import  DynContent  from "../content/Dyncontent";

function App() {
  return (
    <div className="App-body">
      <Header />
      <Content />
      <DynContent />
    </div>
  );
}

export default App;
