import React from 'react';
import './App.css';
import Header from "./Header/Header";
import FirstCont from './FirstContainer/FirstCont';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <FirstCont/> 
      </div>
    );
  }
}

export default App;
