import React from 'react';
import './App.css';
import Home from './containers/home';

class App extends React.Component {

  render() {
    return (
      <div className="container"
        style={{ color: '#191970', paddingTop: '100px', paddingLeft: "25%", paddingRight: "15%", paddingBottom: '100px' }}>
        <Home />
      </div >
    );
  }
}

export default App;
