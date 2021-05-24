import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './list/List';

ReactDOM.render(
  <div className="app">
    <Header />
    <div className="app-body">
        <List />
    </div>
    <Footer />
  </div>,
  document.getElementById('root')
);

