import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Body from './components/body/body';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
