import React, { Component } from 'react';
import './App.css';
import SignupPage from './components/SignupPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <SignupPage/>
      </div>
    );
  }
}

export default App;
